import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What are your minimum order quantities?",
      answer: "Minimum order quantities vary by product. Most items have a minimum order of 1 unit for wholesale customers. Contact us for specific product requirements.",
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery takes 1-3 business days within Nairobi and surrounding areas. Same-day delivery is available for urgent orders placed before 10 AM.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept M-PESA Paybill, bank transfers, and cash on delivery for established customers. Payment instructions are provided after order confirmation.",
    },
    {
      question: "Do you offer credit terms?",
      answer: "Yes, we offer credit terms to established businesses with good payment history. Contact our sales team to discuss credit arrangements.",
    },
    {
      question: "Can I return products?",
      answer: "We accept returns for defective or damaged products within 7 days of delivery. Products must be in original packaging with proof of purchase.",
    },
    {
      question: "Do you deliver outside Nairobi?",
      answer: "Yes, we deliver to major towns across Kenya. Delivery charges and timelines vary by location. Contact us for specific delivery information.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
