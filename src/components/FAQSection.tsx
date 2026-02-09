import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is an Amazon Agency?",
    a: "An Amazon agency is a team of e-commerce experts who partner with sellers to help them succeed in Amazon's complex marketplace. Sellers often face challenges in SEO, PPC, brand building, and adapting to Amazon's constantly shifting policies. Amazon agencies offer critical support, helping sellers optimize their listings, drive traffic, and streamline operations.",
  },
  {
    q: "How do you optimize product listings on Amazon?",
    a: "Our agency has a unique listing optimization process that includes our 4-phase SEO and Design CTR Hack. We focus on indexing, keyword optimization, Strike Zone keywords ranked between 20-50, and use the Search Query Performance Report to enhance your market share compared to competitors.",
  },
  {
    q: "How do you manage Amazon advertising campaigns?",
    a: "We manage advertising campaigns by setting up segmented campaigns that target all potential customers, utilizing optimal keywords and competitor analysis to optimize your listings. Our Ad Setup Service includes keyword research, PPC optimization, ACOS reduction, sales increase, and weekly reporting.",
  },
  {
    q: "Can you improve product rankings on Amazon search?",
    a: "Yes, we can improve your product rankings on Amazon. Our agency has a proven 4-phase SEO strategy that focuses on optimizing listings with effective keywords, increasing visibility, and ultimately driving higher clicks and conversions.",
  },
  {
    q: "What customer support and feedback can I expect?",
    a: "Our customer service representatives answer queries and concerns within 24 hours. We also set up automatic responses to ensure every incoming message receives a timely reply. Reach us Monday to Friday, 9:00 AM to 5:00 PM EST.",
  },
  {
    q: "How do I get started with My Amazon Partners?",
    a: "Ready to boost your sales with the Amazon experts? Reach out through our online contact form or contact us during business hours. You can also get a FREE listing audit where we check your listing and give suggestions for improvements.",
  },
  {
    q: "Can you help manage my inventory?",
    a: "Yes, we can help manage your inventory. Our full service Amazon agency caters to inventory management needs by accurately tracking inventory levels, troubleshooting stranded inventory issues, managing small and light inventory, assisting with reimbursements, and more.",
  },
  {
    q: "Can you provide advertising reporting and analytics?",
    a: "Yes, we offer comprehensive advertising reporting and analytics. Our weekly performance reports cover key metrics such as revenue, sessions, unit session percentage, units ordered, ad spend, ad revenue, impressions, CTR, ACOS, and True ACOS.",
  },
];

const FAQSection = () => (
  <section className="bg-background section-padding">
    <div className="container-main px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-muted-foreground mb-10 max-w-3xl">
        Hiring an Amazon agency simplifies selling, boosts growth, optimizes listings, and builds your brand. With industry best practices, we free your time for innovation to help drive success on Amazon.
      </p>
      <Accordion type="single" collapsible className="w-full max-w-4xl">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-base font-heading font-semibold">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
