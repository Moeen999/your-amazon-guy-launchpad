import CalendlyWidget from "@/components/CalendlyWidget";
import FeatureHighlightCard from "@/components/FullServiceCard";
import ServiceCard from "@/components/ServiceCard";
import SplitTestimonialSection from "@/components/SplitTestimonialSection";
import TrustedBrands from "@/components/TrustedBrands";
import WhyBestAgency from "@/components/WhyBestAgency";
import {
  fullServiceFeatures,
  growthAreaContent,
  servicesCards,
} from "@/constants/content";

const FullServiceManagement = () => {
  return (
    <div className="w-full py-12 md:py-16">
      {/* Calender section */}
      <section className="container grid grid-cols-1 justify-center md:grid-cols-2 gap-12 py-20 mx-auto px-4">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">
            Full Service Account Management
          </h1>

          <p className="text-lg text-gray-600">
            We grow your market share, continuously.
          </p>

          <p className="text-lg text-gray-600">
            Our Amazon experts manage all the pillars of Amazon: SEO, PPC,
            catalog, design, and more. When these are optimized and are in sync
            with each other, your full catalog gains market share together.
          </p>

          <button className="bg-yellow-400 px-8 py-4 rounded-full font-semibold">
            Request a Quote
          </button>
        </div>

        {/* RIGHT CALENDAR */}
        <div className="rounded-xl overflow-hidden shadow-lg w-full min-h-[500px]">
          <CalendlyWidget />
        </div>
      </section>

      {/* Growth section */}
      <section className="w-full px-12 md:px-16">
        <div className=" border-t border-b border-zinc-400 min-h-32 h-auto w-full flex flex-col justify-center md:flex-row gap-4 md:gap-12 py-2 px-4">
          <div className="absolute w-10/12 h-[1px] md:h-24 md:w-[1px] bg-zinc-400 mx-auto self-center" />
          {growthAreaContent.map((data, index) => {
            const { imgSrc, title, description } = data;
            return (
              <div className="flex gap-4 mt-6" key={index}>
                <img
                  src={imgSrc}
                  alt={title}
                  className="hidden md:block h-[90px] w-[140px] rounded-md object-cover"
                />
                <div className="flex flex-col gap-2 ">
                  <h3 className="text-xl">{title}</h3>
                  <p className="text-sm md:text-md text-zinc-400 mb-10 max-w-lg leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full px-12 py-12 md:px-16">
        <div className="w-full flex flex-col justify-center md:flex-row gap-4 md:gap-12 py-2 px-4">
          <div className="w-full md:w-1/2 flex flex-col gap-2 self-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black/90 mb-3">
              Full service Amazon agency
            </h2>
            <p className="text-md w-full md:w-10/12">
              It takes more than just having a good product to succeed on
              Amazon. With full service management, you’ll have a holistic
              approach to growth, and a better chance at achieving your goals on
              Amazon.
            </p>
            <p className="text-md w-10/12">
              From ads to SEO to operations, we align everything to drive
              consistent results.
            </p>
          </div>

          <div className="md:w-2/4">
            <img
              src="/agency.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="w-full px-12 py-12 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {servicesCards.map((cardData, index) => {
            return <ServiceCard {...cardData} key={index} />;
          })}
        </div>
      </section>

      {/* Additional Support */}
      <section className="w-full px-12 py-12 md:px-16">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2.5 w-10/12 mb-8">
            <h3 className="sm:text-xl md:text-3xl font-bold">
              Additional support for Amazon
            </h3>
            <p className="text-sm md:text-lg font-light max-w-4xl text-black/80">
              Attention to detail sets our Amazon agency apart from others.
              We’re not just about the big picture. Every detail counts, and
              we’re here to maximize your Amazon performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fullServiceFeatures.map((servicesData, index) => {
              return <FeatureHighlightCard {...servicesData} key={index} />;
            })}
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="w-full px-12 py-12 md:px-16">
        <TrustedBrands />
      </section>

      {/* Testimonial Splitter */}
      <section className="w-full px-12 py-12 md:px-16">
        <SplitTestimonialSection />
      </section>

      {/* AiIcons */}
      <section className="w-full px-12 py-12 md:px-16">
        <WhyBestAgency />
      </section>
    </div>
  );
};

export default FullServiceManagement;
