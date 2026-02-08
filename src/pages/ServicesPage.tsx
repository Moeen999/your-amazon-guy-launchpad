import { Target, BarChart3, ShieldCheck, Rocket, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";

const services = [
  {
    icon: Target,
    title: "PPC Management",
    desc: "Our team of PPC specialists manages your Amazon advertising campaigns with precision, using advanced data analytics and bid optimization strategies.",
    features: ["Campaign structure optimization", "Bid management & automation", "Keyword research & targeting", "ACoS reduction strategies"],
  },
  {
    icon: BarChart3,
    title: "Listing Optimization",
    desc: "We craft compelling, SEO-optimized listings that rank higher in search results and convert browsers into buyers with persuasive copy and imagery.",
    features: ["Keyword-rich title optimization", "Bullet point & description copy", "A+ Content design", "Image strategy & guidelines"],
  },
  {
    icon: ShieldCheck,
    title: "Account Management",
    desc: "Full-service Amazon account management that handles everything from inventory planning to case resolution, so you can focus on your business.",
    features: ["Daily account monitoring", "Inventory & supply chain planning", "Case management & resolution", "Brand protection & enforcement"],
  },
  {
    icon: Rocket,
    title: "Product Launch Services",
    desc: "Strategic product launches designed to build momentum fast with ranking strategies, review generation, and promotional campaigns.",
    features: ["Pre-launch market analysis", "Launch strategy & execution", "Review generation campaigns", "Ranking acceleration tactics"],
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    desc: "Custom growth roadmaps built on deep market analysis, competitive intelligence, and proven expansion frameworks.",
    features: ["Market opportunity analysis", "Competitive intelligence", "Expansion planning", "Revenue forecasting"],
  },
  {
    icon: Users,
    title: "Consulting",
    desc: "Expert Amazon consulting for brands that want strategic guidance without full-service management. Perfect for in-house teams that need direction.",
    features: ["Strategy audits", "Team training & enablement", "Performance reviews", "Custom recommendations"],
  },
];

const ServicesPage = () => (
  <>
    <section className="gradient-hero section-padding">
      <div className="container-main text-center">
        <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground">
          Amazon Growth Solutions
        </h1>
        <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
          Comprehensive services designed to help your brand thrive on the Amazon marketplace.
        </p>
      </div>
    </section>

    <section className="bg-background section-padding">
      <div className="container-main space-y-16">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`flex flex-col lg:flex-row gap-8 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            <div className="flex-1">
              <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center mb-4">
                <s.icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">{s.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              <Button asChild variant="cta" size="sm" className="mt-6">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="flex-1 bg-section-alt rounded-xl p-6 border border-border w-full">
              <h3 className="font-heading font-semibold text-foreground mb-4">What's Included</h3>
              <ul className="space-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>

    <CTASection />
  </>
);

export default ServicesPage;
