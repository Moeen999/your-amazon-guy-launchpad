import { ArrowUpRight, TrendingUp, TrendingDown } from "lucide-react";
import CTASection from "@/components/CTASection";

const caseStudies = [
  {
    category: "Health & Wellness",
    title: "From $50K to $250K Monthly Revenue",
    metrics: [
      { label: "Revenue Growth", value: "+400%", positive: true },
      { label: "ACoS Reduction", value: "-45%", positive: true },
      { label: "Organic Ranking", value: "Top 3", positive: true },
    ],
    description: "A health supplement brand came to us struggling with high ad costs and low organic visibility. Through aggressive listing optimization and restructured PPC campaigns, we 5x'd their monthly revenue in 8 months.",
  },
  {
    category: "Home & Kitchen",
    title: "Launched to $100K/month in 90 Days",
    metrics: [
      { label: "Launch Revenue", value: "$100K/mo", positive: true },
      { label: "Review Count", value: "500+", positive: true },
      { label: "BSR Rank", value: "Top 10", positive: true },
    ],
    description: "We executed a full product launch strategy for a premium kitchen brand, achieving $100K monthly revenue within the first quarter through strategic PPC, review generation, and SEO optimization.",
  },
  {
    category: "Electronics",
    title: "Rescued a Declining Account",
    metrics: [
      { label: "Sales Recovery", value: "+180%", positive: true },
      { label: "ACoS", value: "18%", positive: true },
      { label: "Profit Margin", value: "+25%", positive: true },
    ],
    description: "An electronics seller was losing market share to competitors. We overhauled their listing strategy, restructured campaigns, and implemented brand defense tactics to reverse the decline.",
  },
];

const ResultsPage = () => (
  <>
    <section className="gradient-hero section-padding">
      <div className="container-main text-center">
        <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Results & Case Studies</p>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground">
          Real Results for Real Brands
        </h1>
        <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
          See how we've helped brands like yours achieve measurable growth on Amazon.
        </p>
      </div>
    </section>

    {/* Summary stats */}
    <section className="bg-background border-b border-border">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "$50M+", label: "Total Revenue Generated" },
            { value: "35%", label: "Avg. Sales Increase" },
            { value: "40%", label: "Avg. ACoS Reduction" },
            { value: "200+", label: "Successful Campaigns" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Case Studies */}
    <section className="bg-background section-padding">
      <div className="container-main space-y-8">
        {caseStudies.map((cs) => (
          <div key={cs.title} className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
            <div className="p-6 md:p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">{cs.category}</span>
              <h3 className="text-2xl font-heading font-bold text-foreground mt-2">{cs.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{cs.description}</p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="bg-section-alt rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-xl md:text-2xl font-heading font-bold text-accent">{m.value}</span>
                      {m.positive ? (
                        <TrendingUp className="h-4 w-4 text-accent" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-destructive" />
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <CTASection />
  </>
);

export default ResultsPage;
