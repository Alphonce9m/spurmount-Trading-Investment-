import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle, CreditCard, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HowToOrder = () => {
  const steps = [
    {
      icon: Search,
      number: "1",
      title: "Browse Products",
      description: "Explore our product catalog and find the items you need for your business.",
      action: "View Products",
      link: "/products",
    },
    {
      icon: MessageCircle,
      number: "2",
      title: "Place Your Order",
      description: "Contact us via WhatsApp with your product selections and quantities.",
      action: "Order on WhatsApp",
      external: true,
    },
    {
      icon: CreditCard,
      number: "3",
      title: "Make Payment",
      description: "Complete your payment through M-PESA Paybill using our provided details.",
      action: "Payment Details",
      link: "/payments",
    },
    {
      icon: Truck,
      number: "4",
      title: "Receive Your Order",
      description: "Your order will be processed and delivered to your specified location.",
      action: "Learn More",
      link: "/contact",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">How to Order</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to place your wholesale order with SpurMount
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 max-w-4xl mx-auto mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-elevated transition-smooth border-border/50"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Step Number & Icon */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent-foreground">{step.number}</span>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-card-foreground">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    {step.external ? (
                      <Button 
                        variant="cta"
                        onClick={() => {
                          const message = "Hi, I'd like to place an order";
                          window.open(`https://wa.me/254XXXXXXXXX?text=${encodeURIComponent(message)}`, '_blank');
                        }}
                      >
                        {step.action}
                      </Button>
                    ) : (
                      <Link to={step.link || "#"}>
                        <Button variant="cta">{step.action}</Button>
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Order Requirements</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Minimum order value may apply for delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Clear product specifications and quantities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Valid delivery address within our service area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Contact information for order confirmation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Delivery Information</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Standard delivery within 1-3 business days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Same-day delivery available for urgent orders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Store pickup option available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Delivery charges based on location and order size</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="shadow-elevated gradient-hero border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                Need Help with Your Order?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Our team is ready to assist you with any questions or special requirements
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Contact Us
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowToOrder;
