import LandingHeader from "@/components/landing/LandingHeader";
import Footer from "@/components/shared/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart3,
  Brain,
  Calendar,
  Check,
  CheckCircle2,
  Target,
  Users,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <LandingHeader />
      {/* Hero Section */}
      <main className="min-h-screen">
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Task Management
              <br />
              <span className="text-blue-600">Powered by AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let artificial intelligence help you break down tasks, prioritize
              work, and accomplish more every day.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/register">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to manage tasks efficiently with the power
                of AI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>AI Task Breakdown</CardTitle>
                  <CardDescription>
                    Let AI automatically break down complex tasks into
                    actionable subtasks. Get instant suggestions for better task
                    organization.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 2 */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Smart Prioritization</CardTitle>
                  <CardDescription>
                    AI analyzes your tasks and suggests optimal priority levels
                    based on urgency, complexity, and dependencies.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 3 */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Time Estimation</CardTitle>
                  <CardDescription>
                    Get accurate time estimates for each task powered by machine
                    learning. Plan your day with confidence.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 4 */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Project Organization</CardTitle>
                  <CardDescription>
                    Organize tasks into projects with color coding. Track
                    progress with visual completion rates and statistics.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 5 */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-pink-600" />
                  </div>
                  <CardTitle>Progress Tracking</CardTitle>
                  <CardDescription>
                    Real-time dashboard with stats, completion rates, and
                    insights into your productivity patterns.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 6 */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>Easy Collaboration</CardTitle>
                  <CardDescription>
                    Share projects, assign tasks, and collaborate with your
                    team. Keep everyone aligned and productive.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Additional Benefits */}
            <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">
                    Why Choose TaskFlow AI?
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Deep Integration</div>
                        <div className="text-sm text-gray-600">
                          Powered by DeepSeek AI for intelligent task management
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Privacy First</div>
                        <div className="text-sm text-gray-600">
                          Your data is encrypted and never shared with third
                          parties
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Lightning Fast</div>
                        <div className="text-sm text-gray-600">
                          Built with Next.js 16 for optimal performance
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Mobile Ready</div>
                        <div className="text-sm text-gray-600">
                          Access your tasks anywhere, anytime, on any device
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/api/placeholder/500/400"
                    alt="Dashboard Preview"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the plan that fits your needs. Upgrade or downgrade
                anytime.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Free Plan */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Free</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <CardDescription className="mt-2">
                    Perfect for individuals getting started
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-6" variant="outline" asChild>
                    <Link href="/register">Get Started</Link>
                  </Button>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Up to 50 tasks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>3 projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>50 AI suggestions/month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Basic analytics</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-400">
                      <X className="h-5 w-5" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-400">
                      <X className="h-5 w-5" />
                      <span>Team collaboration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="border-2 border-blue-600 shadow-xl relative">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <Badge className="bg-blue-600">Most Popular</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Pro</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$9</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <CardDescription className="mt-2">
                    For professionals who need more power
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-6" asChild>
                    <Link href="/register">Start Free Trial</Link>
                  </Button>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="font-semibold">Unlimited tasks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="font-semibold">Unlimited projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>500 AI suggestions/month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Export & integrations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <CardDescription className="mt-2">
                    For teams that need everything
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-6" variant="outline" asChild>
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="font-semibold">Everything in Pro</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Unlimited AI suggestions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Team collaboration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Dedicated support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>SLA & uptime guarantee</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <div className="mt-20 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <details className="bg-gray-50 p-6 rounded-lg">
                  <summary className="font-semibold cursor-pointer">
                    Can I change plans later?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Yes! You can upgrade or downgrade your plan at any time.
                    Changes take effect immediately, and we'll prorate any
                    charges.
                  </p>
                </details>
                <details className="bg-gray-50 p-6 rounded-lg">
                  <summary className="font-semibold cursor-pointer">
                    What happens when I reach my AI limit?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    You can still use all features, but AI suggestions will be
                    paused until your next billing cycle. You can upgrade
                    anytime to get more AI suggestions immediately.
                  </p>
                </details>
                <details className="bg-gray-50 p-6 rounded-lg">
                  <summary className="font-semibold cursor-pointer">
                    Is my data secure?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Absolutely. We use bank-level encryption, regular security
                    audits, and never share your data with third parties. Your
                    privacy is our priority.
                  </p>
                </details>
                <details className="bg-gray-50 p-6 rounded-lg">
                  <summary className="font-semibold cursor-pointer">
                    Do you offer refunds?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Yes, we offer a 30-day money-back guarantee on all paid
                    plans. If you're not satisfied, contact us for a full
                    refund.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
