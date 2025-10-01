import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, CheckCircle, Smartphone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Payments = () => {
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const paybillNumber = "123456"; // Replace with actual paybill
  const accountNumber = "SpurMount"; // Replace with actual account format

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: "Copied!",
      description: `${field} copied to clipboard`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  const steps = [
    {
      number: "1",
      title: "Go to M-PESA",
      description: "Open M-PESA on your phone and select Lipa na M-PESA",
    },
    {
      number: "2",
      title: "Select Paybill",
      description: "Choose the Paybill option from the menu",
    },
    {
      number: "3",
      title: "Enter Details",
      description: `Business Number: ${paybillNumber}, Account: ${accountNumber}`,
    },
    {
      number: "4",
      title: "Enter Amount",
      description: "Enter the exact amount as quoted in your order",
    },
    {
      number: "5",
      title: "Confirm Payment",
      description: "Enter your M-PESA PIN and confirm the payment",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Payment Information</h1>
          <p className="text-lg text-muted-foreground">
            Complete your order payment securely through M-PESA
          </p>
        </div>

        {/* Payment Details Card */}
        <Card className="shadow-elevated gradient-accent border-0 max-w-2xl mx-auto mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <Smartphone className="h-16 w-16 text-accent-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-accent-foreground mb-2">M-PESA Paybill Details</h2>
              <p className="text-accent-foreground/90">Use these details to complete your payment</p>
            </div>

            <div className="space-y-4">
              {/* Paybill Number */}
              <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-accent-foreground/80 mb-1">Paybill Number</p>
                    <p className="text-3xl font-bold text-accent-foreground">{paybillNumber}</p>
                  </div>
                  <Button
                    variant="hero"
                    size="sm"
                    onClick={() => copyToClipboard(paybillNumber, "Paybill Number")}
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    {copiedField === "Paybill Number" ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Account Number */}
              <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-accent-foreground/80 mb-1">Account Number</p>
                    <p className="text-2xl font-bold text-accent-foreground">{accountNumber}</p>
                  </div>
                  <Button
                    variant="hero"
                    size="sm"
                    onClick={() => copyToClipboard(accountNumber, "Account Number")}
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    {copiedField === "Account Number" ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Steps */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">How to Pay via M-PESA</h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <Card key={index} className="shadow-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-accent-foreground">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-card-foreground">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Important Notes</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Always confirm your order total before payment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Keep your M-PESA confirmation message</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Payment confirmation is usually instant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Contact us if payment is not reflected within 30 minutes</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card gradient-hero border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">After Payment</h3>
              <ul className="space-y-3 text-primary-foreground/90">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-accent flex-shrink-0" />
                  <span>Send your M-PESA confirmation SMS to us via WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-accent flex-shrink-0" />
                  <span>We'll verify your payment and confirm your order</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-accent flex-shrink-0" />
                  <span>Your order will be processed for delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-accent flex-shrink-0" />
                  <span>Track your order status through WhatsApp</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payments;
