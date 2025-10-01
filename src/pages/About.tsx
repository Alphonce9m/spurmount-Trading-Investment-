import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About SpurMount</h1>
          <p className="text-xl text-primary font-semibold mb-4">Eat Quality, Live Quality</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            SpurMount Trading & Investment Wholesalers is your trusted partner for quality wholesale products.
            We are committed to providing businesses with the finest groceries, beverages, and household items
            at competitive prices.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <Card className="shadow-elevated border-border/50">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-card-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Founded with a vision to transform wholesale trading in Kenya, SpurMount Trading & Investment
                  Wholesalers has grown to become a reliable source for quality products at wholesale prices.
                </p>
                <p>
                  Our journey began with a simple belief: every business deserves access to high-quality products
                  without compromising on affordability. Today, we serve numerous retailers, restaurants, and
                  businesses across the region.
                </p>
                <p>
                  We pride ourselves on building lasting relationships with our clients through exceptional
                  service, quality products, and competitive pricing.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mission, Vision, Values */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-card hover:shadow-elevated transition-smooth border-border/50">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-accent mb-4">
                <Target className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide businesses with access to quality wholesale products while maintaining
                the highest standards of service and reliability.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elevated transition-smooth border-border/50">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-accent mb-4">
                <Eye className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading wholesale distributor in East Africa, recognized for quality,
                reliability, and customer satisfaction.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elevated transition-smooth border-border/50">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-accent mb-4">
                <Heart className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Values</h3>
              <p className="text-muted-foreground">
                Quality, Integrity, Customer Focus, and Innovation drive everything we do.
                We believe in honest business and building long-term partnerships.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Why Choose Us */}
        <section className="gradient-hero rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary-foreground">Why Choose SpurMount?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-primary-foreground mb-1">Quality Assurance</h4>
                <p className="text-primary-foreground/80">Every product meets our strict quality standards</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-primary-foreground mb-1">Competitive Pricing</h4>
                <p className="text-primary-foreground/80">Best wholesale prices in the market</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-primary-foreground mb-1">Reliable Delivery</h4>
                <p className="text-primary-foreground/80">Fast and dependable delivery service</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-primary-foreground mb-1">Customer Support</h4>
                <p className="text-primary-foreground/80">Dedicated team ready to assist you</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
