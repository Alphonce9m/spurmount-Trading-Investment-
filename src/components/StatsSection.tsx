import { useEffect, useState } from "react";
import { Package, Users, Award, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const [counts, setCounts] = useState({
    products: 0,
    customers: 0,
    experience: 0,
    satisfaction: 0,
  });

  const stats = [
    {
      icon: Package,
      target: 500,
      label: "Quality Products",
      suffix: "+",
    },
    {
      icon: Users,
      target: 1000,
      label: "Happy Customers",
      suffix: "+",
    },
    {
      icon: Award,
      target: 5,
      label: "Years Experience",
      suffix: "+",
    },
    {
      icon: TrendingUp,
      target: 98,
      label: "Satisfaction Rate",
      suffix: "%",
    },
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        products: Math.floor(stats[0].target * progress),
        customers: Math.floor(stats[1].target * progress),
        experience: Math.floor(stats[2].target * progress),
        satisfaction: Math.floor(stats[3].target * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          products: stats[0].target,
          customers: stats[1].target,
          experience: stats[2].target,
          satisfaction: stats[3].target,
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                <stat.icon className="h-8 w-8 text-accent" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2 font-heading">
                {Object.values(counts)[index]}{stat.suffix}
              </div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
