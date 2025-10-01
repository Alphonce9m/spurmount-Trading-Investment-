import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample products - will be replaced with database data later
  const products = [
    { id: 1, name: "Rice 25kg", category: "Groceries", price: "KES 3,500", image: "🌾" },
    { id: 2, name: "Cooking Oil 5L", category: "Groceries", price: "KES 1,800", image: "🛢️" },
    { id: 3, name: "Sugar 50kg", category: "Groceries", price: "KES 5,500", image: "🧂" },
    { id: 4, name: "Wheat Flour 50kg", category: "Groceries", price: "KES 4,200", image: "🌾" },
    { id: 5, name: "Soda 24 Pack", category: "Beverages", price: "KES 1,200", image: "🥤" },
    { id: 6, name: "Water 24 Pack", category: "Beverages", price: "KES 800", image: "💧" },
    { id: 7, name: "Detergent 5kg", category: "Household", price: "KES 1,500", image: "🧼" },
    { id: 8, name: "Tissue Paper Box", category: "Household", price: "KES 600", image: "🧻" },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleWhatsAppOrder = (productName: string) => {
    const message = `Hi, I'm interested in ordering ${productName}`;
    const whatsappUrl = `https://wa.me/254XXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Our Products</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Quality wholesale products at competitive prices
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search products or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="shadow-card hover:shadow-elevated transition-smooth border-border/50"
            >
              <CardContent className="p-6">
                <div className="text-6xl text-center mb-4">{product.image}</div>
                <div className="mb-2">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{product.name}</h3>
                <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="cta" 
                  className="w-full"
                  onClick={() => handleWhatsAppOrder(product.name)}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Order via WhatsApp
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No products found matching your search.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
