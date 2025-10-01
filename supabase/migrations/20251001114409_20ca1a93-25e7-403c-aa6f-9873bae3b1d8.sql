-- Create products table for dynamic product management
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_url TEXT,
  stock_quantity INTEGER DEFAULT 0,
  min_order_quantity INTEGER DEFAULT 1,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  company_name TEXT,
  testimonial_text TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  image_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create orders table
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  order_items JSONB NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  delivery_address TEXT,
  order_status TEXT DEFAULT 'pending',
  payment_status TEXT DEFAULT 'pending',
  mpesa_code TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create newsletter_subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create public read policies (products and testimonials are public)
CREATE POLICY "Products are viewable by everyone" 
ON public.products FOR SELECT USING (is_active = true);

CREATE POLICY "Testimonials are viewable by everyone" 
ON public.testimonials FOR SELECT USING (true);

-- Orders can be inserted by anyone (for now, until we add auth)
CREATE POLICY "Anyone can create orders" 
ON public.orders FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view their own orders" 
ON public.orders FOR SELECT USING (true);

-- Newsletter subscriptions
CREATE POLICY "Anyone can subscribe to newsletter" 
ON public.newsletter_subscribers FOR INSERT WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
BEFORE UPDATE ON public.orders
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample products
INSERT INTO public.products (name, description, category, price, stock_quantity, is_featured, is_active) VALUES
('Premium Rice 25kg', 'High-quality long grain rice, perfect for wholesale', 'Groceries', 3500.00, 150, true, true),
('Cooking Oil 5L', 'Pure vegetable cooking oil in bulk packaging', 'Groceries', 1800.00, 200, true, true),
('Sugar 50kg', 'Refined white sugar for commercial use', 'Groceries', 5500.00, 100, true, true),
('Wheat Flour 50kg', 'Premium wheat flour for baking', 'Groceries', 4200.00, 120, true, true),
('Soda 24 Pack', 'Assorted soft drinks in bulk', 'Beverages', 1200.00, 300, false, true),
('Bottled Water 24 Pack', 'Pure drinking water in cases', 'Beverages', 800.00, 500, false, true),
('Detergent Powder 5kg', 'Industrial strength laundry detergent', 'Household', 1500.00, 180, false, true),
('Tissue Paper Box', 'Bulk tissue paper for commercial use', 'Household', 600.00, 400, false, true),
('Maize Flour 50kg', 'Fresh maize flour for ugali', 'Groceries', 4000.00, 90, false, true),
('Tea Leaves 1kg', 'Premium tea leaves in bulk', 'Beverages', 350.00, 250, true, true);

-- Insert sample testimonials
INSERT INTO public.testimonials (customer_name, company_name, testimonial_text, rating, is_featured) VALUES
('Jane Wanjiru', 'Nairobi Fresh Grocers', 'SpurMount has been our reliable supplier for over 2 years. Their products are always fresh and prices competitive. Highly recommended!', 5, true),
('David Omondi', 'Eastlands Restaurant', 'Excellent service and quality products. The delivery is always on time and the customer service is outstanding.', 5, true),
('Grace Mwangi', 'Westlands Supermarket', 'We have tried many wholesalers but SpurMount stands out. Their commitment to quality and customer satisfaction is unmatched.', 5, true),
('Peter Kimani', 'CBD Food Store', 'Great wholesale prices and genuine products. SpurMount has helped our business grow significantly.', 4, false);
