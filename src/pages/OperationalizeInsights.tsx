import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";   // 👈 import Button
import { Link } from "react-router-dom";          // 👈 import Link
import ExpertiseTabs from "@/components/ExpertiseTabs"; // 👈 import tabs

const OperationalizeInsights = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      {/* Tabs for navigation across expertise pages */}
      <ExpertiseTabs />

      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
        Operationalize Insights into Intelligent Action
      </h1>

      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        We move beyond dashboards. By operationalizing insights into AI-powered decision systems, we enable adaptive enterprises that learn and act in real time.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Reimagine Experiences with AI</h3>
            <p className="text-muted-foreground">
              We design AI-powered interactions that personalize journeys, boost engagement, and make every customer and employee touchpoint intelligent and adaptive.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Engineer Intelligent Applications</h3>
            <p className="text-muted-foreground">
              From process automation to decisioning, we build applications with AI at the core — making business operations smarter, faster, and more seamless.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Evolve from BI to AI-Powered Decisioning</h3>
            <p className="text-muted-foreground">
              Move beyond dashboards. We operationalize insights into adaptive decision systems that act in real time and continuously learn from outcomes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Operationalize AI with MLOps</h3>
            <p className="text-muted-foreground">
              Ensure your models deliver value at scale. We automate the entire ML lifecycle — from training to monitoring — so insights stay reliable, ethical, and production-ready.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Bottom text */}
      <p className="text-center text-lg mt-12 text-muted-foreground">
        We embed AI into the fabric of your operations — turning data into intelligence, and intelligence into measurable impact at enterprise scale.
      </p>

      {/* CTA button */}
      <div className="flex justify-center mt-8">
        <Link to="/contact">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Start Your AI Journey
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OperationalizeInsights;
