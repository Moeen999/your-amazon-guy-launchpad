import { Award, Users, Target, Zap } from "lucide-react";
import CTASection from "@/components/CTASection";

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every strategy is backed by data and measured against clear KPIs." },
  { icon: Users, title: "Client-First", desc: "We treat your business like our own, with transparent communication and dedicated support." },
  { icon: Zap, title: "Agile & Adaptive", desc: "Amazon changes fast. We stay ahead of algorithm updates and marketplace trends." },
  { icon: Award, title: "Proven Expertise", desc: "Our team has managed millions in ad spend and optimized thousands of listings." },
];

const AboutPage = () => (
  <>
    <section className="gradient-hero section-padding">
      <div className="container-main text-center">
        <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">About Us</p>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground">
          Your Amazon Growth Partner
        </h1>
        <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
          We're a full-service Amazon agency obsessed with helping brands unlock their marketplace potential.
        </p>
      </div>
    </section>

    <section className="bg-background section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              youramazonguy is a team of Amazon marketplace experts, data analysts, and growth strategists dedicated to helping brands succeed on the world's largest marketplace.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With years of combined experience managing accounts across every major category, we bring deep expertise and proven frameworks to every client engagement.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From startups launching their first product to established brands scaling to eight figures, we've helped businesses at every stage achieve their Amazon goals.
            </p>
          </div>
          <div className="bg-section-alt rounded-xl p-8 border border-border">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "200+", label: "Brands Served" },
                { value: "$50M+", label: "Revenue Managed" },
                { value: "98%", label: "Client Retention" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-heading font-bold text-accent">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-section-alt section-padding">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-card rounded-xl p-6 shadow-card border border-border text-center">
              <div className="w-12 h-12 rounded-lg gradient-cta flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </>
);

export default AboutPage;
