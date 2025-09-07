import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";   // 👈 import Button
import { Link } from "react-router-dom";          // 👈 import Link
import ExpertiseTabs from "@/components/ExpertiseTabs"; // 👈 import the tabs component

const EngineerData = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      {/* Tabs for navigation across expertise pages */}
      <ExpertiseTabs />

      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
        Engineer Data for AI-Readiness
      </h1>

      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        Your AI is only as strong as your data. We build intelligent, real-time, and governed data foundations that fuel trustworthy AI and enterprise-scale insights.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Modernize Data for AI Agility</h3>
            <p className="text-muted-foreground">
              Transform legacy systems into AI-ready, cloud-native platforms that deliver agility, scalability, and intelligence-driven cost efficiency.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Build a Trusted AI-Ready Data Foundation</h3>
            <p className="text-muted-foreground">
              Lay the groundwork for intelligence with standardized models, governance, and quality frameworks that make data reliable, secure, and AI-ready.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Intelligent DataOps for Continuous AI</h3>
            <p className="text-muted-foreground">
              Automate pipelines and monitoring with AI-driven DataOps practices that ensure real-time, reliable, and scalable data flows — powering continuous learning systems.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Bottom text */}
      <p className="text-center text-lg mt-12 text-muted-foreground">
        With a strong data backbone, your organization is ready to power the next generation of AI-driven insights.
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

export default EngineerData;
