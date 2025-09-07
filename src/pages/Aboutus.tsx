import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About iGenie Labs:{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI at the Core of Everything We Do
            </span>
          </h1>

          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            We believe the future belongs to AI-first enterprises. Our mission is to help organizations 
            reimagine strategy, data, and products by embedding intelligence at the foundation — 
            creating growth, resilience, and impact at scale.
          </p>
        </div>
      </section>

      {/* Vision & Approach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          <Card className="shadow-card border-border bg-gradient-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To lead the AI-first movement worldwide — empowering enterprises of all sizes to transform products, processes, and customer experiences through intelligence at scale.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border bg-gradient-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <p className="text-muted-foreground">
                We combine strategy, data, and engineering with an AI-first mindset. Every engagement starts with intelligence at the core — delivering tailored solutions that move fast, scale seamlessly, and drive measurable value.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-card border-border bg-gradient-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
              <p className="text-muted-foreground">
                AI-First by Design → Intelligence is the foundation, not an add-on.
                Speed with Purpose → Fast delivery, measurable outcomes.
                Responsible AI → Ethical, transparent, and compliant innovation.
                Partnership for Growth → Co-creating solutions with our clients.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
     
      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of AI innovators, product leaders, and technologists brings together expertise in data, machine learning, engineering, and operations. Together, we are shaping the future of AI adoption — responsibly, strategically, and at scale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Team Member 1 */}
          <Card className="shadow-card border-border">
            <CardContent className="p-6 text-center">
              <div className="h-24 w-24 rounded-full mx-auto mb-4 bg-gradient-primary" />
              <h3 className="text-xl font-semibold">Hari Katukota</h3>
              <p className="text-muted-foreground">Product Advisory</p>
            </CardContent>
          </Card>

          {/* Team Member 2 */}
          <Card className="shadow-card border-border">
            <CardContent className="p-6 text-center">
              <div className="h-24 w-24 rounded-full mx-auto mb-4 bg-gradient-primary" />
              <h3 className="text-xl font-semibold">Manju Ratakonda</h3>
              <p className="text-muted-foreground">Technology Advisory</p>
            </CardContent>
          </Card>

          {/* Team Member 3 */}
          <Card className="shadow-card border-border">
            <CardContent className="p-6 text-center">
              <div className="h-24 w-24 rounded-full mx-auto mb-4 bg-gradient-primary" />
              <h3 className="text-xl font-semibold">Teja Dandu</h3>
              <p className="text-muted-foreground">Data/ML Advisory</p>
            </CardContent>
          </Card>

          {/* Team Member 4 */}
          <Card className="shadow-card border-border">
            <CardContent className="p-6 text-center">
              <div className="h-24 w-24 rounded-full mx-auto mb-4 bg-gradient-primary" />
              <h3 className="text-xl font-semibold">Praneel Peruru</h3>
              <p className="text-muted-foreground">India Operations</p>
            </CardContent>
          </Card>

          {/* Team Member 5 */}
          <Card className="shadow-card border-border">
            <CardContent className="p-6 text-center">
              <div className="h-24 w-24 rounded-full mx-auto mb-4 bg-gradient-primary" />
              <h3 className="text-xl font-semibold">Soujanya Suddapalli</h3>
              <p className="text-muted-foreground">US Operations</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          </p>
        </div>
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With decades of combined experience across AI, data platforms, and enterprise transformation, our leadership team ensures every client engagement is outcome-driven and future-ready.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
