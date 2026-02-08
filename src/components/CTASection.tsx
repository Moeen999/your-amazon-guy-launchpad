import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

const CTASection = ({
  title = "Ready to Scale Your Amazon Business?",
  subtitle = "Book a free strategy call and discover how we can help you grow revenue, reduce ACoS, and dominate your category.",
  dark = true,
}: CTASectionProps) => (
  <section className={dark ? "gradient-hero" : "bg-section-alt"}>
    <div className="container-main section-padding text-center">
      <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-4 ${dark ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      <p className={`max-w-2xl mx-auto mb-8 text-lg ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild variant="cta" size="lg">
          <Link to="/contact">
            Book a Free Call <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant={dark ? "outline-light" : "outline"} size="lg">
          <Link to="/services">View Our Services</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
