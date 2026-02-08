import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, ShieldCheck, Rocket, BarChart3, Users } from "lucide-react";
import CTASection from "@/components/CTASection";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "$50M+", label: "Revenue Generated" },
  { value: "200+", label: "Brands Managed" },
  { value: "35%", label: "Average Sales Increase" },
  { value: "4.9/5", label: "Client Satisfaction" },
];

const services = [
  { icon: Target, title: "PPC Management", desc: "Data-driven Amazon PPC campaigns that maximize ROI and minimize ACoS." },
  { icon: BarChart3, title: "Listing Optimization", desc: "SEO-optimized listings with compelling copy and A+ content that converts." },
  { icon: ShieldCheck, title: "Account Management", desc: "Full-service account management so you can focus on growing your brand." },
  { icon: Rocket, title: "Product Launch", desc: "Strategic product launches that generate momentum from day one." },
  { icon: TrendingUp, title: "Growth Strategy", desc: "Custom growth plans backed by market research and competitor analysis." },
  { icon: Users, title: "Consulting", desc: "Expert guidance from seasoned Amazon professionals for your toughest challenges." },
];

const testimonials = [
  { quote: "They doubled our revenue in just 6 months. The team is incredibly data-driven and responsive.", name: "Sarah M.", role: "CPG Brand Owner" },
  { quote: "Our ACoS dropped by 40% while sales went up 60%. Best investment we've made for our Amazon business.", name: "James T.", role: "Electronics Seller" },
  { quote: "Professional, transparent, and results-focused. They feel like an extension of our team.", name: "Lisa K.", role: "Health & Wellness Brand" },
];

const HomePage = () => (
  <>
    {/* Hero */}
    <section className="relative gradient-hero overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="relative container-main px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-up">
            Full-Service Amazon Agency
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight animate-fade-up">
            Scale Your Amazon Business to{" "}
            <span className="text-gradient-orange">New Heights</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-2xl animate-fade-up-delay">
            We help brands grow revenue, optimize listings, and dominate the Amazon marketplace with proven strategies and hands-on management.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
            <Button asChild variant="cta" size="lg">
              <Link to="/contact">
                Book a Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="lg">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-background border-b border-border">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="bg-background section-padding">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Everything You Need to Win on Amazon
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/services"
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/30"
            >
              <div className="w-12 h-12 rounded-lg gradient-cta flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="bg-section-alt section-padding">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Client Results</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Trusted by Leading Brands
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-xl p-6 shadow-card border border-border">
              <p className="text-foreground leading-relaxed italic">"{t.quote}"</p>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </>
);

export default HomePage;
