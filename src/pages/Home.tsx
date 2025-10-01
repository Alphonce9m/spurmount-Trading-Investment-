import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Truck, Shield, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import TrustBadges from "@/components/TrustBadges";
import FAQSection from "@/components/FAQSection";
import PromoBanner from "@/components/PromoBanner";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  const categories = [
    { name: "Groceries", icon: ShoppingBag, description: "Fresh and quality food products" },
    { name: "Beverages", icon: ShoppingBag, description: "Wide selection of drinks" },
    { name: "Household", icon: ShoppingBag, description: "Essential home products" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Only the finest products for your business",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery service",
    },
    {
      icon: ShoppingBag,
      title: "Wholesale Prices",
      description: "Best prices for bulk purchases",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Navbar />
      <FloatingWhatsApp />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 gradient-hero opacity-90"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up font-heading">
            SpurMount Trading & Investment
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Eat Quality, Live Quality
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Your trusted wholesale partner for quality groceries, beverages, and household products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/products">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/how-to-order">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur"
              >
                How to Order
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Features Section */}
      <section className="py-16 gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground font-heading">Why Choose SpurMount?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-smooth border-border/50 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-accent mb-4">
                    <feature.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground font-heading">Our Product Categories</h2>
          <p className="text-center text-muted-foreground mb-12">
            Explore our wide range of wholesale products
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-elevated transition-smooth cursor-pointer group border-border/50 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary mb-4 group-hover:scale-110 transition-smooth">
                    <category.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-card-foreground">{category.name}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Link to="/products">
                    <Button variant="cta" className="w-full">
                      View Products
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <FAQSection />

      {/* CTA Section */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground font-heading">
            Ready to Start Your Order?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Experience quality wholesale products delivered to your doorstep
          </p>
          <Link to="/products">
            <Button variant="hero" size="lg">
              Order Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
