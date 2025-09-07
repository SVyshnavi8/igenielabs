import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";   // 👈 import Button
import { Link } from "react-router-dom";          // 👈 import Link
import ExpertiseTabs from "@/components/ExpertiseTabs"; // 👈 import tabs

const DifferentiateAI = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      {/* Tabs for navigation across expertise pages */}
      <ExpertiseTabs />

      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
        Differentiate with AI/ML at the Core
      </h1>

      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        We don’t just implement models — we help you create competitive advantage by embedding intelligence into products, platforms, and decisions.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Data Science for Competitive Intelligence</h3>
            <p className="text-muted-foreground">
              Transform raw data into intelligence. We build advanced models that uncover hidden patterns, deliver predictive power, and personalize decisions at scale.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Engineer AI for Scale & Trust</h3>
            <p className="text-muted-foreground">
              Move from prototype to production with confidence. We design, deploy, and monitor enterprise-grade AI systems with built-in reliability, governance, and ethical safeguards.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Scale Innovation with ML Products & Platforms</h3>
            <p className="text-muted-foreground">
              Accelerate enterprise-wide AI adoption through reusable modules, APIs, and platforms that democratize access to intelligence.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Bottom text */}
      <p className="text-center text-lg mt-12 text-muted-foreground">
        Our AI-first approach ensures your business leads with innovation while staying grounded in measurable results.
      </p>

      {/* CTA button */}
      <div className="flex justify-center mt-8">
        <Link to="/contact">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Schedule Consultation
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DifferentiateAI;
