import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
    const message = "Hi, I'd like to inquire about your products and services.";
    const whatsappUrl = `https://wa.me/254XXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch with us for any inquiries or orders
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h2>
              <p className="text-muted-foreground mb-6">
                We're here to help! Reach out to us through any of the following channels.
              </p>
            </div>

            <Card className="shadow-card border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Phone</h4>
                    <p className="text-muted-foreground">+254 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Email</h4>
                    <p className="text-muted-foreground">info@spurmount.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Location</h4>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="shadow-card gradient-accent border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MessageCircle className="h-12 w-12 text-accent-foreground" />
                  <div className="flex-grow">
                    <h4 className="font-semibold text-accent-foreground mb-1">Quick Contact</h4>
                    <p className="text-accent-foreground/90 text-sm">Chat with us on WhatsApp</p>
                  </div>
                  <Button 
                    variant="hero" 
                    onClick={handleWhatsApp}
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    Chat Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-card border-border/50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-card-foreground">Business Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium text-card-foreground">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium text-card-foreground">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium text-card-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elevated border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-card-foreground">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                  />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
