import { Shield, Truck, CreditCard, HeadphonesIcon } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "100% Genuine",
      description: "Authentic products guaranteed",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery available",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "M-PESA & bank transfer",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "We're here to help",
    },
  ];

  return (
    <section className="py-8 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-foreground">{badge.title}</h4>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
