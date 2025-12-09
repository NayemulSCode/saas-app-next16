import { authOptions } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { generateTaskSuggestions } from "@/lib/deepseek";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const db = await getDb();
    // @ts-ignore
    const userId = new ObjectId(session.user.id);
    const user = await db.collection("users").findOne({ _id: userId });
    // Check AI usage limits
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    // Initialize aiUsage if it doesn't exist
    if (!user.aiUsage) {
      await db.collection("users").updateOne(
        { _id: userId },
        {
          $set: {
            aiUsage: {
              requestsUsed: 0,
              requestsLimit: 50, // Free tier: 50 requests
              resetDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
            },
          },
        }
      );
      user.aiUsage = {
        requestsUsed: 0,
        requestsLimit: 50,
        resetDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      };
    }
    // Check if usage limit reset date has passed
    if (new Date() > new Date(user.aiUsage.resetDate)) {
      await db.collection("users").updateOne(
        { _id: userId },
        {
          $set: {
            "aiUsage.requestsUsed": 0,
            "aiUsage.resetDate": new Date(
              Date.now() + 30 * 24 * 60 * 60 * 1000
            ),
          },
        }
      );
      user.aiUsage.requestsUsed = 0;
    }
    if (user.aiUsage.requestsUsed >= user.aiUsage.requestsLimit) {
      return NextResponse.json(
        {
          error: "AI usage limit reached",
          usageRemaining: 0,
          resetDate: user.aiUsage.resetDate,
        },
        { status: 429 }
      );
    }
    const { taskTitle, taskDescription } = await req.json();

    if (!taskTitle) {
      return NextResponse.json(
        { error: "Task title is required" },
        { status: 400 }
      );
    }
    // Generate AI suggestions using DeepSeek
    const suggestions = await generateTaskSuggestions(
      taskTitle,
      taskDescription
    );
    // Update usage count
    await db.collection("users").updateOne(
      { _id: userId },
      {
        $inc: { "aiUsage.requestsUsed": 1 },
      }
    );
    const usageRemaining =
      user.aiUsage.requestsLimit - user.aiUsage.requestsUsed - 1;
    return NextResponse.json({
      suggestions,
      usageRemaining,
      resetDate: user.aiUsage.resetDate,
    });
  } catch (error: any) {
    console.error("AI suggestions error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate suggestions" },
      { status: 500 }
    );
  }
}
