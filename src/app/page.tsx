import LandingHeader from "@/components/landing/LandingHeader";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
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
            <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
            {/* Add your features here */}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
            {/* Add your pricing cards here */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
