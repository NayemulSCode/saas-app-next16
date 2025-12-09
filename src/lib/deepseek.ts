interface TaskSuggestion {
  subtasks: string[];
  priority: "low" | "medium" | "high";
  timeEstimate: number;
}

export async function generateTaskSuggestions(
  taskTitle: string,
  taskDescription?: string
): Promise<TaskSuggestion> {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    throw new Error(
      "Please define the DEEPSEEK_API_KEY environment variable inside .env"
    );
  }

  const prompt = `As a productivity assistant, analyze this task and provide:
    1. Break it down into 3-5 actionable subtasks
    2. Suggest a priority level (low/medium/high) based on typical urgency
    3. Estimate time to complete in minutes

    Task: ${taskTitle}
    ${taskDescription ? `Description: ${taskDescription}` : ""}

    Respond ONLY with valid JSON in this exact format:
    {
    "subtasks": ["subtask1", "subtask2", "subtask3"],
    "priority": "medium",
    "timeEstimate": 120
    }`;
  try {
    const response = await fetch(
      "https://api.deepseek.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            {
              role: "system",
              content:
                "You are a productivity expert. Always respond with valid JSON only, no markdown or explanations.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      }
    );
    if (!response.ok) {
      const error = await response.text();
      console.error("DeepSeek API error:", error);
      throw new Error(`DeepSeek API failed: ${response.status}`);
    }
    const data = await response.json();
    const content = data.choices[0]?.message?.content;
    if (!content) {
      throw new Error("No response from DeepSeek");
    }
    // Parse the JSON response
    // Remove markdown code blocks if present
    const cleanContent = content
      .replace(/```json\n?/g, "")
      .replace(/```\n?/g, "")
      .trim();
    const suggestions = JSON.parse(cleanContent);
    // Validate the response structure
    if (!suggestions.subtasks || !Array.isArray(suggestions.subtasks)) {
      throw new Error("Invalid response structure");
    }
    return {
      subtasks: suggestions.subtasks.slice(0, 5), // Limit to 5 subtasks
      priority: suggestions.priority || "medium",
      timeEstimate: suggestions.timeEstimate || 60,
    };
  } catch (error) {
    console.error("DeepSeek generation error:", error);
    throw new Error("Failed to generate AI suggestions");
  }
}
