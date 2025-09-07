import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Music, Workflow } from "lucide-react";
import { Link } from "react-router-dom";   // 👈 import Link

const Products = () => {
  const products = [
    {
      icon: MapPin,
      title: "Travel Genie",
      description:
        "Your personal AI travel companion. Travel Genie creates hyper-personalized itineraries, finds the best deals in real-time, and ensures every journey is smarter, smoother, and more rewarding.",
      features: [
        "AI-driven itinerary creation",
        "Dynamic price intelligence",
        "Personalized travel insights",
        "Global multi-language support",
      ],
    },
    {
      icon: Music,
      title: "Audio Genie",
      description:
        "Turn noise into knowledge. Audio Genie uses AI to organize, enhance, and uncover insights from your audio content — making discovery and creativity effortless.",
      features: [
        "Automatic content tagging & categorization",
        "Semantic AI-powered search",
        "Studio-grade audio enhancement",
        "Context-aware playlist generation",
      ],
    },
    {
      icon: Workflow,
      title: "Workflow Genie",
      description:
        "Your AI co-pilot for business efficiency. Workflow Genie learns from patterns, automates repetitive tasks, and continuously optimizes operations in real time.",
      features: [
        "End-to-end process automation",
        "Adaptive intelligent routing",
        "Real-time performance insights",
        "Seamless integrations with enterprise tools",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-28">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Products That Redefine{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Work, Travel, and Creativity
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each iGenie Labs product is AI-first by design — built to unlock new value, simplify complexity, and transform everyday tasks into intelligent experiences.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <product.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{product.title}</CardTitle>
                  {/* ✅ description same size as features */}
                  <p className="text-md text-muted-foreground">
                    {product.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground text-md">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to See AI in Action?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience how our AI-first products deliver measurable impact. 
            From smarter travel to automated workflows, the future of work and life starts here.
          </p>

          {/* 👇 Wrap button with Link */}
          <Link to="/contact">
            <Button size="lg" className="shadow-glow">
              Experience It Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
