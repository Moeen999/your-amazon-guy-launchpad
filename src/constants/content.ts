import { FaCheck } from "react-icons/fa6";
import { Search, BarChart3, ShieldCheck, FileWarning, ListRestart, Palette, Wrench, Stamp, Globe, Package, Monitor } from "lucide-react"

export const growthAreaContent = [
  {
    id: 1,
    imgSrc: "/rank.png",
    title: "Client growth = company growth",
    description:
      "We are proud to be the 334th Fastest Growing Company in the USA with over 500 employees, providing top-tier service to over 400 Amazon brands.",
  },
  {
    id: 2,
    imgSrc: "/girl.png",
    title: "Hear it from people we've helped",
    description:
      "See how our services have helped clients reach their full potential and solved their Amazon problems.",
  },
];

export const services = [
  {
    imgSrc: "/allServicesImgs/fullService.png",
    title: "Full Service Management",
    desc: "As a full service amazon agency, we manage all the pillars of Amazon – SEO, PPC, catalog, design, and others – to have them work in sync with each other for a better chance at getting success.",
    features: ["Click through rate", "Platform management", "Brand and content optimization", "Search engine optimization", "Paid advertising (PPC)", "Troubleshooting", "Reporting and monitoring"],
  },
  {
    imgSrc: "/allServicesImgs/searchEngine.png",
    title: "Search Engine Optimization",
    desc: "Our Amazon SEO experts identify the best keywords to use and optimize listings for improved organic ranking to make it easier for shoppers to find your products.",
    features: ["4-phase SEO plan", "Keyword & Competitor Research", "Targeted Keyword Selection", "Ongoing Rank Tracking", "Optimized listings for SEO"],
  },
  {
    imgSrc: "/allServicesImgs/accAudit.png",
    title: "Amazon Account Audit",
    desc: "Get a thorough analysis of your seller central account to identify areas of improvement and avoid costly mistakes.",
    features: ["Advertising (PPC) segmentation, structure, and bidding", "SEO indexing and rankings", "Product listings – merchandising and design", "Brand registry", "Account Health", "Growth Areas"],
  },
  {
    imgSrc: "/allServicesImgs/accSuspension.png",
    title: "Account Suspensions",
    desc: "Has your seller listing or account been suspended or deactivated? We can help get things back up and running with our expert Amazon specialists.",
    features: ["Metrics (order defect) suspensions", "Copyright, trademark, patent suspensions", "Validation Issue Suspensions", "Multiple account suspensions"],
  },
  {
    imgSrc: "/allServicesImgs/reinstatement.png",
    title: "Listing Reinstatement",
    desc: "Has Amazon deactivated your top-selling ASIN? Need help reinstating the yanked listing? We can assist quickly and efficiently.",
    features: ["Copyright claims takedown", "Trademark infringement yank", "Medical claims takedown", "Listing condition complaints", "Restricted item type claims"],
  },
  {
    imgSrc: "/allServicesImgs/design.png",
    title: "Design",
    desc: "Engage and inform shoppers with captivating imagery. Showcase your products with professional design to help boost conversion rates.",
    features: ["Brand guidelines", "Brand story", "Brand storefront", "Enhanced brand content A+", "Full listing optimization", "Listing images design", "Main image CTR hack"],
  },
  {
    imgSrc: "/allServicesImgs/troubleshooting.png",
    title: "Troubleshooting",
    desc: "Everything from UPC issues, page updates, catalog problems, brand changes — we help get things right and identify areas of improvement.",
    features: ["Brand name change", "UPC to GS1 changes", "Gated categories", "Catalog problems", "Hazmat review errors", "Account and listing reinstatement"],
  },
  {
    imgSrc: "/allServicesImgs/trademark.png",
    title: "Trademark Registration",
    desc: "We file your trademark for your brand and sign you up for Amazon Brand Registry — protecting your products from infringement.",
    features: ["Free trademark assessment", "Trademark search", "Trademark filing", "Dedicated trademark attorney", "Assistance in Amazon Brand Registry"],
  },
  {
    imgSrc: "/allServicesImgs/seoforsites.png",
    title: "SEO for Websites",
    desc: "Effective website search engine optimization (SEO) is the key to getting your products seen online beyond Amazon.",
    features: ["On-page SEO optimization", "Content strategy", "Technical SEO audit", "Link building"],
  },
  {
    imgSrc: "/allServicesImgs/FBARETURNS.png",
    title: "FBA Returns",
    desc: "Amazon owes 99% of sellers money for lost/damaged units, refunds and mishandled returns. We make the process of getting your money back quick and easy.",
    features: ["Lost and damaged inventory", "Lost inbound shipment", "Destroyed units"],
  },
  {
    imgSrc: "/allServicesImgs/vendorservice.png",
    title: "Vendor Central Full Service",
    desc: "Get expert help managing Vendor Central and sell your products directly to Amazon with confidence.",
    features: ["PPC", "SEO", "A+ Content", "Brand Store", "Listing optimization", "Logistics", "Reporting", "Troubleshooting"],
  },
];

export interface ServiceCard {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  cta: string;
}

export const servicesCards: ServiceCard[] = [
  {
    id: 1,
    title: "PPC",
    description:
      "Boost sales, cut costs. We’re your partner in transparent, high-performing Amazon advertising.",
    imgSrc: "/pointer.png",
    cta: "Learn more",
  },
  {
    id: 2,
    title: "SEO",
    description:
      "Watch your search rankings soar with our proven 4-phase Amazon SEO plan. Results in just 90 days.",
    imgSrc: "/seo.png",
    cta: "Learn more",
  },
  {
    id: 3,
    title: "Design",
    description:
      "CTR-optimized Amazon listing images, compelling A+ Content, and high-converting Brand Stores.",
    imgSrc: "/design.png",
    cta: "Learn more",
  },
  {
    id: 4,
    title: "Merchandising",
    description:
      "Your product catalog, perfected. We optimize listings, attributes, and more to ensure customers love what they see.",
    imgSrc: "/merchandising.png",
    cta: "Learn more",
  },
  {
    id: 5,
    title: "Catalog Troubleshooting",
    description:
      "Having trouble with your catalog? We’ll handle it.",
    imgSrc: "/ctTroubleShooting.png",
    cta: "Learn more",
  },
  {
    id: 6,
    title: "Main Image CTR Hack",
    description:
      "Ready to increase your Amazon traffic? Our CTR-optimized image design is the key.",
    imgSrc: "/ctrhack.png",
    cta: "Learn more",
  },
  {
    id: 7,
    title: "Reporting and Monitoring",
    description:
      "Stay ahead of the Amazon game. We track updates, monitor your account, and optimize for peak performance.",
    imgSrc: "/reportnmonitor.png",
    cta: "Learn more",
  },
  {
    id: 8,
    title: "Platform Management",
    description:
      "Stress-free Amazon selling. Our Amazon experts take care of everything, from A to Z.",
    imgSrc: "/platformmanagement.png",
    cta: "Learn more",
  },
  {
    id: 9,
    title: "Audit",
    description:
      "A deep dive into your Amazon listing performance. Our audit will pinpoint areas for improvement.",
    imgSrc: "/audit.png",
    cta: "Learn more",
  },
  {
    id: 10,
    title: "Shipping Plans",
    description:
      "Avoid FBA pitfalls. Our expert IPI management and strategic planning will keep your inventory flowing smoothly.",
    imgSrc: "/shippingPlans.png",
    cta: "Learn more",
  },
  {
    id: 11,
    title: "Copywriting",
    description:
      "Want your product to stand out? Our expert copywriting and Amazon SEO services will make it a top contender.",
    imgSrc: "/copyright.png",
    cta: "Learn more",
  },
  {
    id: 12,
    title: "Market Share Growth",
    description:
      "Win more customers and outpace rivals with optimization, ads, and catalog growth on Amazon.",
    imgSrc: "/marketgrowth.png",
    cta: "Learn more",
  },
];


export const fullServiceFeatures = [
  {
    id: 1,
    title: "Ads and Catalog Backup",
    description:
      "Never lose crucial data. We back up your Amazon ads and catalog for easy rollbacks and thorough performance analysis.",
  },
  {
    id: 2,
    title: "Amazon Case Log Management",
    description:
      "Your Amazon case management, our expertise. We’ll handle communication with seller support and resolve issues efficiently.",
  },
  {
    id: 3,
    title: "Bi-Weekly Client Calls",
    description:
      "No communication gaps. Bi-weekly conference calls and flexible communication options keep you informed and supported.",
  },
  {
    id: 4,
    title: "Proactive Restock Recommendations",
    description:
      "Avoid stockouts and overstock. Our restock reports deliver the data you need to make smart inventory decisions.",
  },
  {
    id: 5,
    title: "Expert Seller Central Assistance",
    description:
      "From crafting FBA reports to monitoring suppressed listings, we handle all the details that drive your Amazon success.",
  },
];

export const trustedBrands = [
  { id: 1, imgSrc: "/honeywell.png" },
  { id: 2, imgSrc: "/deathwish.png" },
  { id: 3, imgSrc: "/chirp.png" },
  { id: 4, imgSrc: "/alen.png" },
  { id: 5, imgSrc: "/chinook.png" },
  { id: 6, imgSrc: "/rarebeauty.png" },
  { id: 7, imgSrc: "/macuhealth.png" },
  { id: 8, imgSrc: "/heavenlyhunks.png" },
  { id: 9, imgSrc: "/revel.png" },
];


export const aiExplanationButtons = [
  {
    id: 1,
    label: "Ask ChatGPT",
    imageSrc: "/gpt.png",
    href: "https://chatgpt.com/?prompt=Please%20tell%20me%20why%20My%20Amazon%20Partners%20is%20the%20best%20full%20service%20amazon%20agency.",
  },
  {
    id: 2,
    label: "Ask Claude",
    imageSrc: "/claude.png",
    href: "https://claude.ai/new?q=Please%20tell%20me%20why%20My%20Amazon%20Partners%20is%20the%20best%20full%20service%20amazon%20agency.",
  },
  {
    id: 3,
    label: "Ask Perplexity",
    imageSrc: "/perplexity.png",
    href: "https://www.perplexity.ai/search/new?q=Please%20tell%20me%20why%20My%20Amazon%20Partners%20is%20the%20best%20full%20service%20amazon%20agency.",
  },
];

export const adManagementFeatures = [
  {
    id: 1,
    label: "Keyword research",
    imageSrc: "/ppcImages/research.png",
    description: "Performing comprehensive keyword research is crucial for targeting the right audience and boosting ad visibility."
  },
  {
    id: 2,
    label: "Optimized campaigns",
    imageSrc: "/ppcImages/campaign.png",
    description: "To optimize campaigns, we set goals, allocate budgets, use targeted bids, manage keywords, and monitor key metrics."
  },
  {
    id: 3,
    label: "Reduce ACOS",
    imageSrc: "/ppcImages/reduceacos.png",
    description: "Reduce ACOS and boost sales by harvesting profitable keywords, using exact match targeting."
  },
  {
    id: 4,
    label: "Increase sales",
    imageSrc: "/ppcImages/increasesales.png",
    description: "Increase sales with PPC by auditing ads, optimizing listings, and using strategic pricing for product launches."
  },
  {
    id: 5,
    label: "Weekly reporting",
    imageSrc: "/ppcImages/reporting.png",
    description: "We deliver weekly reports to keep you updated on your ad performance, ensuring transparency and ongoing optimization."
  },
  {
    id: 6,
    label: "Design",
    imageSrc: "/ppcImages/design.png",
    description: "Well-crafted creatives can build a strong brand identity and set your products apart from the competition."
  },
]

export const amazonSeoContent = {
  title: "Amazon SEO",
  description: "With years of knowledge and experience  and over 3,000 customers served, Amazon SEO has become second nature to us. Our best-in-class 4-phase SEO plan can help your listing rank better and make it easier for shoppers to find your products on Amazon:",
  phaseList: [
    {
      id: 1,
      icon: FaCheck,
      phase: "Phase 1: Search term optimization"
    },
    {
      id: 2,
      icon: FaCheck,
      phase: "Phase 2: Copy and pink keyword update"
    },
    {
      id: 3,
      icon: FaCheck,
      phase: "Phase 3: Strike zone keywords"
    },
    {
      id: 4,
      icon: FaCheck,
      phase: "Phase 4: Search query report"
    },
  ],
  phases: "* SEO Phases 2, 3, and 4 are available for full service management only.",
  imgSrc: "/seoImages/hero.png"
}

export const seoPhasesData = [
  {
    id: 1,
    phaseNumber: "SEO Phase 1",
    heading: "Search term optimization",
    description: "Get expert Search Term Optimization starting at $1,000. Supercharge your product listings with our Phase 1 Amazon SEO. We’ll optimize back-end search terms to drive more traffic and sales. Each order will cover up to 10 ASINs. You’ll also get before and after drafts for your approval.",
    phaseList: [
      { icon: FaCheck, text: "Keyword and competitor research in your category" },
      { icon: FaCheck, text: "Ranking for keywords organically over time" },
      { icon: FaCheck, text: "Hand selecting the most effective keywords" },
      { icon: FaCheck, text: "Increased visibility for your products, leading to higher sales" },
      { icon: FaCheck, text: "Help your customers to find your product" }
    ]
  },
  {
    id: 2,
    phaseNumber: "SEO Phase 2",
    heading: "Incremental indexing",
    description: "Optimize your backend search terms for your Amazon listings. Phase 2 of our SEO service offering includes:",
    phaseList: [
      { icon: FaCheck, text: "Title and bullets point features adjusted for additional keyword inclusions" },
      { icon: FaCheck, text: "We update for “pink” keywords – words already in the title/bullets are removed to make room for additional indexing opportunities in the search term field." }
    ]
  },
  {
    id: 3,
    phaseNumber: "SEO Phase 3",
    heading: "Strike zone keywords",
    description: "Optimize your back end search terms for your listings on Amazon. In our Phase 3 of our SEO service, we do the following tasks.",
    phaseList: [
      { icon: FaCheck, text: "Keyword & competitor research in your category" },
      { icon: FaCheck, text: "Effectively, hand select the best relevant keywords" },
      { icon: FaCheck, text: "Ranking for keywords organically, overtime" },
      { icon: FaCheck, text: "Increase visibility for your products, leading to higher clicks" },
      { icon: FaCheck, text: "Help your customers to find your product!" }
    ]
  },
  {
    id: 4,
    phaseNumber: "SEO Phase 4",
    heading: "Search query report",
    description: "This is the Market Share Indexing phase where it increases market share for top ranking keywords determined by Amazon’s search query report, by inputting these exact match phrases into our SEO strategy. For mature listings already eligible for the phase 3 strikezone strategy.",
    phaseList: []
  }
];

export const amazonFeatureCards = [
  {
    id: 1,
    imgSrc: "/seoImages/effectivekwtools.png",
    heading: "Effective keyword tools",
    description: "We use best-in-class tools to find top keywords, analyze competitors, and optimize your Amazon listings."
  },
  {
    id: 2,
    imgSrc: "/seoImages/optclicks.png",
    heading: "Optimized for more clicks",
    description: "Optimize backend search fields to enhance product discoverability, including key attributes like subject matter and audience."
  },
  {
    id: 3,
    imgSrc: "/seoImages/visibilityrank.png",
    heading: "Better visibility and rank",
    description: "Phase 1 prioritizes getting your product indexed, laying the foundation for your product to appear in the top 300 search results."
  },
  {
    id: 4,
    imgSrc: "/seoImages/strategykw.png",
    heading: "Strategic keyword usage",
    description: "Boost indexing by repeating crucial keywords in your title and backend search terms, maximizing Amazon’s algorithm recognition."
  }
];

export const accountAuditData = {
  heading: "Amazon account audit",
  title: "Get a full account audit for $1,000.",
  description: "Have an Amazon expert review your account to know the strengths and weaknesses of your account and how they stack against competitors.",
  auditList: [
    {
      id: 1,
      icon: FaCheck,
      audit: "Advertising: segmentation, structure, and bidding"
    },
    {
      id: 2,
      icon: FaCheck,
      audit: "Search engine optimization (SEO): indexing and rankings"
    },
    {
      id: 3,
      icon: FaCheck,
      audit: "Product listings: merchandising and design"
    },
    {
      id: 4,
      icon: FaCheck,
      audit: "Brand registry"
    },
    {
      id: 5,
      icon: FaCheck,
      audit: "Account health"
    },
    {
      id: 6,
      icon: FaCheck,
      audit: "Growth areas"
    },
    {
      id: 7,
      icon: FaCheck,
      audit: "Logistics – IPI scores"
    },
    {
      id: 8,
      icon: FaCheck,
      audit: "International expansion"
    },
    {
      id: 9,
      icon: FaCheck,
      audit: "Customer service"
    },
  ],
  imgSrc: "/accAuditImages/hero.png"
}

export const auditBenefits = [
  {
    id: 1,
    title: "Maximize profits",
    description:
      "Our experts will go through your account with the goal of spotting areas of improvement to help drive more sales for your listings:",
    points: [
      {
        id: 1,
        icon: FaCheck,
        text: "Detailed 75 point analysis",
      },
      {
        id: 2,
        icon: FaCheck,
        text: "Our recommendations for your account",
      },
      {
        id: 3,
        icon: FaCheck,
        text: "High level summary for growth opportunities",
      },
    ],
  },
  {
    id: 2,
    title: "Avoid costly mistakes",
    description:
      "Mistakes on Amazon can cost you more than just sales—they can jeopardize your account. Our audit service ensures your store is error-free and compliant:",
    points: [
      {
        id: 1,
        icon: FaCheck,
        text: "Address potential policy violations",
      },
      {
        id: 2,
        icon: FaCheck,
        text: "Correct performance metric weaknesses",
      },
      {
        id: 3,
        icon: FaCheck,
        text: "Maintain strong account health metrics",
      },
    ],
  },
];


export const auditFeatures = [
  {
    id: 1,
    title: "Account health check",
    description:
      "Review of performance metric, identifying and addressing policy violations or warnings.",
    imgSrc: "/accAuditImages/health.png",
  },
  {
    id: 2,
    title: "Detailed listing optimization",
    description:
      "Evaluation of product titles, descriptions, bullet points, images, SEO effectiveness, and more.",
    imgSrc: "/accAuditImages/listingOpt.png",
  },
  {
    id: 3,
    title: "Inventory management",
    description:
      "Assess inventory levels to avoid stockouts or overstocking and identify slow-moving or unsellable inventory.",
    imgSrc: "/accAuditImages/inventory.png",
  },
  {
    id: 4,
    title: "Advertising performance",
    description:
      "Review of PPC campaigns and other advertising efforts to optimize ad spend and assess ROI.",
    imgSrc: "/accAuditImages/performance.png",
  },
  {
    id: 5,
    title: "Customer experience",
    description:
      "Analyze reviews and feedback. Address negative reviews or issues impacting customer satisfaction.",
    imgSrc: "/accAuditImages/customerExp.png",
  },
  {
    id: 6,
    title: "Analysis of profitability",
    description:
      "Review fees, costs, and pricing strategies to spot areas to reduce expenses or increase margins.",
    imgSrc: "/accAuditImages/profitAnalysis.png",
  },
  {
    id: 7,
    title: "Full compliance review",
    description:
      "Ensure compliance with Amazon’s policies and guidelines, and verify that all documentation and legal requirements are up-to-date.",
    imgSrc: "/accAuditImages/compliance.png",
  },
];

export const brandConsultingContent = {
  heading: "Amazon brand growth consulting",

  subHeading: "Vetted coaches, with more call session options",

  description:
    "We’ll find growth gaps, fix catalog issues, sharpen PPC, and guide your tariff strategy. Every session is about moving your brand forward. Let’s fix what’s broken and fuel what’s working.",

  ctaText: "View consultation options",

  checklist: [
    {
      id: 1,
      icon: "check",
      text: "Amazon brand growth",
      href: "brandGrowth"
    },
    {
      id: 2,
      icon: "check",
      text: "Drive sales, fix issues",
      href: "targetedSolutions"
    },
    {
      id: 3,
      icon: "check",
      text: "Strategic business considerations",
      href: "customSolutions"
    },
  ],

  rightImageSrc: "/consultingImages/hero.png",
};

export const servicesContent = [
  {
    id: 1,
    imgSrc: "/consultingImages/design.png",
    title: "Design, SEO, and listing optimization",
    description:
      "Make your listings rank and convert. From keyword indexing to A+ visuals, we help you optimize every part of your product pages to boost traffic and increase conversion rates.",
  },
  {
    id: 2,
    imgSrc: "/consultingImages/catalog.png",
    title: "Catalog management",
    description:
      "Clean up the chaos. We troubleshoot and restructure messy catalogs, merge duplicate listings, fix parent/child errors, and ensure your backend is set up for smooth scaling.",
  },
  {
    id: 3,
    imgSrc: "/consultingImages/brand.png",
    title: "Brand registry",
    description:
      "Get protected, stay in control. We walk you through the full Brand Registry process, help fix brand errors, and support reinstatement if your brand gets revoked.",
  },
  {
    id: 4,
    imgSrc: "/consultingImages/brandgrowth.png",
    title: "Amazon brand growth strategy",
    description:
      "Build a brand, not just a product. From initial setup to future growth, we develop your Amazon brand’s roadmap, including pricing, product lines, and visibility.",
  },
  {
    id: 5,
    imgSrc: "/consultingImages/brandexpansion.png",
    title: "International brand expansion",
    description:
      "Expand globally with confidence. Get expert coaching to protect your brand, optimize listings for different regions, and seamlessly translate your catalog for global expansion.",
  },
];

export const tagetedSolutions = [
  {
    id: 1,
    title: "Troubleshooting product suppression and listing issues",
    description:
      "Get your listings back on track. We identify and fix the root causes of product suppressions, listing errors, and compliance issues—so your products stay visible and active on Amazon.",
  },
  {
    id: 2,
    title: "PPC optimization and troubleshooting",
    description:
      "Maximize ad performance, minimize waste. We optimize your PPC campaigns, improve targeting, and troubleshoot underperforming ads to drive more sales at a lower cost-per-click.",
  },
  {
    id: 3,
    title: "Conversion rate optimization",
    description:
      "Turn more clicks into sales. We analyze your listings and implement strategies—from better images and copy to testing layouts—to increase your conversion rate and boost sales.",
  },
  {
    id: 4,
    title: "Seller Central account management",
    description:
      "Maintain a healthy, efficient account. We ensure your Seller Central account stays in top shape by monitoring for warnings, addressing policy issues, and managing account health to avoid suspensions.",
  },
  {
    id: 5,
    title: "Cart abandonment solutions",
    description:
      "Bring back lost sales. We study cart abandonment patterns and implement targeted solutions, like retargeting strategies and offering incentives, to recover those lost opportunities.",
  },
  {
    id: 6,
    title: "Performance metrics analysis and strategy",
    description:
      "Data-driven decisions for growth. We review your Amazon performance metrics, identify opportunities, and adjust strategies based on insights to improve sales velocity, conversion rates, and overall profitability.",
  },
]

export const customSolutionsContent = {
  heading: "Custom solutions to scale on Amazon",
  subheading:
    "My Amazon Guy tackles your unique challenges, from growth to tariffs, step-by-step.",

  points: [
    {
      id: 1,
      title: "Business growth strategies",
      description:
        "Grow smarter, not harder. We help you map out actionable business strategies, identify expansion opportunities, and create a plan for scaling your brand both within Amazon and beyond.",
    },
    {
      id: 2,
      title: "Tariff strategy",
      description:
        "Stay profitable despite tariff hikes. We guide you through tariff challenges, offering cost-saving strategies and alternatives to maintain your margins in global markets.",
    },
    {
      id: 3,
      title: "Supplements and health categories",
      description:
        "Stay compliant and competitive. We steer you through compliance and listing optimization to succeed in the health and supplements industry.",
    },
    {
      id: 4,
      title: "Product compliance and regulatory requirements",
      description:
        "Avoid costly compliance mistakes. Our team helps ensure your products, especially in strict categories, meet Amazon and legal standards.",
    },
    {
      id: 5,
      title: "Custom marketing by category",
      description:
        "Right audience, right message. Fueling your growth with laser-targeted campaigns specific to your category.",
    },
    {
      id: 6,
      title: "Off-Amazon marketing and diversification",
      description:
        "Expand beyond Amazon’s walls. Escape Amazon dependency by building your off-platform presence and diversifying income with our guidance.",
    },
  ],

  rightSide: {
    imgSrc: "/consultingImages/customSolutions.png",
    title: "Feeling the pressure of rising tariffs?",
    description:
      "You are not alone. Businesses across the country rely on foreign manufacturing for their success, and tariff changes have major impact to business operations. Talk to an expert who’ll help you plan smarter shipping, sourcing, and pricing strategies.",
  },
};

export const resultsStats = [
  {
    id: 1,
    value: "450+",
    label: "Brands currently managed",
  },
  {
    id: 2,
    value: "$1.2+ Billion",
    label: "Revenue generated on Amazon annually",
  },
  {
    id: 3,
    value: "460+",
    label: "Employees",
  },
];

export const reviewsData = [
  {
    id: 1,
    platform: "trustpilot",
    rating: "4.5 Stars",
    reviews: "443 Reviews",
    logo: "/allServicesImgs/trustpilot.png",
    stars: "/allServicesImgs/4p5stars.png",
  },
  {
    id: 2,
    platform: "google",
    rating: "4.6 Stars",
    reviews: "133 Reviews",
    logo: "/allServicesImgs/google.png",
    stars: "/allServicesImgs/4p6stars.png",
  },
];

export const servicesData = [
  {
    id: 1,
    title: "Brand guidelines",
    description: "Build trust, attract customers, and stand out from the competition. Our Amazon experts create brand design guidelines for a cohesive, professional look that works.",
    image: "/designImages/brandgl.png",
    isNew: true,

  },
  {
    id: 2,
    title: "Brand story",
    description: "Your Brand Story is your chance to shine. Make it memorable, build trust, and keep customers coming back. Let us help you craft a story worth sharing.",
    image: "/designImages/brandstory.png",
    isNew: true,

  },
  {
    id: 3,
    title: "Brand storefront",
    description: "Stand out with an Amazon storefront that does more than just list products. Have a branded shopping experience that builds trust and drives sales.",
    image: "/designImages/brandstorefront.png",
    isNew: true,

  },
  {
    id: 4,
    title: "Listing images",
    description: "Get high-quality visuals that show off your product in the best light. Your product may be amazing, but if your listing images don't do it justice, no one will know.",
    image: "/designImages/listingimages.png",
    isNew: true,

  },
  {
    id: 5,
    title: "Enhanced brand content A+",
    description: "A+ content is a proven sales booster. If your listing isn't giving customers the full picture, they'll probably look elsewhere. Get A+ content that builds trust and drives more sales.",
    image: "/designImages/brandcontent.png",
    isNew: true,
  },
  {
    id: 6,
    title: "Full listing optimization",
    description: "An optimized listing is the difference between getting lost in the crowd and getting noticed. Keywords, images, descriptions — these elements work together to boost sales.",
    image: "/designImages/fulllisting.png",
    isNew: true,
  },
  {
    id: 7,
    title: "Main image CTR hack",
    description: "Make a good first impression and have more Amazon shoppers discover your products. Turn your main image into the attention-grabber it should be and start driving those clicks.",
    image: "/designImages/ctrhack.png",
    isNew: true,
  }
];

export const betterDesignData = [
  {
    id: 1,
    title: "Higher visibility and CTR",
    description: 'Let’s face it—Amazon is a crowded marketplace, and blending in won’t do you any favors. Eye-catching visuals is the way to get noticed and clicked on. Because if shoppers don’t click, they don’t buy.',
  },
  {
    id: 2,
    title: "Communicate features and benefits",
    description: 'No one’s reading that long description if your visuals don’t grab them first. Infographics and sharp layouts do the heavy lifting, so shoppers get the point without breaking a sweat.',
  },
  {
    id: 3,
    title: "Enhanced appeal and perceived value",
    description: 'High-quality, professional images showcase your products in the best light, increasing their perceived value and making them more attractive to buyers.',
  },
  {
    id: 4,
    title: "Increased trust and brand recognition",
    description: 'No communication gaps. Bi-weekly conference calls and flexible communication options keep you informed and supported.',
  },
  {
    id: 5,
    title: "Better engagement",
    description: 'Your story matters—but not if it’s buried under amateur design. pro-level visuals keeps shoppers scrolling, learning, and clicking “Add to Cart.',
  },
  {
    id: 6,
    title: "Beat the competition",
    description: 'Professional graphic design helps your listings outperform competitors, making your products more memorable and appealing to buyers.',
  },
]