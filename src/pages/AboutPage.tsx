import { Award, Users, Target, Zap, CheckCircle } from "lucide-react";
import CTASection from "@/components/CTASection";
import TrustLogos from "@/components/TrustLogos";

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every strategy is backed by data and measured against clear KPIs." },
  { icon: Users, title: "Client-First", desc: "We treat your business like our own, with transparent communication and dedicated support." },
  { icon: Zap, title: "Agile & Adaptive", desc: "Amazon changes fast. We stay ahead of algorithm updates and marketplace trends." },
  { icon: Award, title: "Proven Expertise", desc: "Our team has managed millions in ad spend and optimized thousands of listings." },
];

const pressLogos = ["Business Insider", "San Diego Tribune", "Markets Insider", "NBC", "Bloomberg", "The Seattle Times"];

const AboutPage = () => (
  <>
    <section className="bg-background">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">About Us</p>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground leading-tight">
              Your Amazon Growth Partner
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              My Amazon Partners is a team of Amazon marketplace experts, data analysts, and growth strategists dedicated to helping brands succeed on the world's largest marketplace.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With years of combined experience managing accounts across every major category, we bring deep expertise and proven frameworks to every client engagement. From startups launching their first product to established brands scaling to eight figures.
            </p>
          </div>
          <div className="bg-section-alt rounded-xl p-8 border border-border">
            <div className="grid grid-cols-2 gap-8">
              {[
                { value: "450+", label: "Brands Managed" },
                { value: "460+", label: "Team Members" },
                { value: "$1.2B+", label: "Revenue Generated" },
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

    {/* Client growth = company growth */}
    <section className="bg-section-alt section-padding">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-heading font-bold text-foreground">Client growth = company growth</h2>
          <p className="mt-3 text-muted-foreground">
            We are proud to be one of the fastest growing companies in the USA with over 500 employees, servicing over 400 Amazon brands.
          </p>
        </div>
        <div>
          <p className="text-center text-sm text-muted-foreground mb-4">As featured in:</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {pressLogos.map((name) => (
              <span key={name} className="text-base font-heading font-semibold text-muted-foreground/40">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="bg-background section-padding">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-10 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-card rounded-xl p-6 shadow-card border border-border text-center">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <TrustLogos />
    <CTASection />
  </>
);

export default AboutPage;
