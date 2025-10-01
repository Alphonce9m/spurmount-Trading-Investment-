import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import NewsletterSignup from "./NewsletterSignup";

const Footer = () => {
  return (
    <footer className="gradient-hero text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">SpurMount Trading</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Eat Quality, Live Quality
            </p>
            <p className="text-sm text-primary-foreground/70">
              Your trusted wholesale partner for quality groceries and household products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/how-to-order" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  How to Order
                </Link>
              </li>
              <li>
                <Link to="/payments" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Payments
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+254 XXX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>info@spurmount.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-accent transition-smooth">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-accent transition-smooth">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-accent transition-smooth">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <NewsletterSignup />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} SpurMount Trading & Investment Wholesalers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
