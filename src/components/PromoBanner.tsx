import { X } from "lucide-react";
import { useState } from "react";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="gradient-accent text-accent-foreground py-3 px-4 relative animate-slide-in-left">
      <div className="container mx-auto flex items-center justify-center gap-4">
        <p className="text-sm md:text-base font-medium text-center">
          🎉 <span className="font-bold">Special Offer!</span> Get 10% off on bulk orders above KES 50,000 | 
          <span className="ml-2 underline cursor-pointer">Contact us today</span>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 hover:opacity-80 transition-opacity"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
