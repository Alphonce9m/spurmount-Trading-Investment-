import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    
    const whatsappUrl = `https://wa.me/254XXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setMessage("");
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-8 z-50 w-80 md:w-96 shadow-elevated rounded-lg bg-card border border-border animate-scale-in">
          <div className="gradient-accent p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-accent-foreground" />
              <span className="font-semibold text-accent-foreground">Chat with us</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-accent-foreground hover:opacity-80">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              Hi! How can we help you today? Send us a message on WhatsApp.
            </p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full h-24 px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <Button 
              onClick={handleSend} 
              variant="cta" 
              className="w-full"
              disabled={!message.trim()}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Send on WhatsApp
            </Button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 md:right-8 z-50 w-14 h-14 rounded-full gradient-accent shadow-accent flex items-center justify-center hover:scale-110 transition-smooth animate-bounce-subtle"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-accent-foreground" />
        ) : (
          <MessageCircle className="h-6 w-6 text-accent-foreground" />
        )}
      </button>
    </>
  );
};

export default FloatingWhatsApp;
