import DesignServiceCard from "@/components/DesignServiceCard";
import FeatureHighlightCard from "@/components/FullServiceCard";
import { betterDesignData, servicesData } from "@/constants/content";

const DesignPage = () => {
  return (
    <div className="w-full md:px-16 flex flex-col items-start">
      <div className="w-full px-16 py-4">
        <h1 className="text-2xl font-light md:text-4xl md:font-bold">
          Design for Amazon
        </h1>
        <p className="text-sm font-light max-w-2xl mt-4">
          Capture attention and drive sales with top-notch graphic design for
          your Amazon listings. High-quality visuals are key to making your
          products shine and converting views into purchases.
        </p>

        {/* Design Page Service Card */}
        <div className="max-w-7xl mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <DesignServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
        <hr className="h-[1px] bg-zinc-400" />
      </div>

      <div className="w-full px-16 py-4">
        <h1 className="text-2xl font-light md:text-4xl md:font-bold">
          Better design brings better sales
        </h1>
        <p className="text-sm font-light max-w-2xl mt-4">
          You could have the best product in the world, but if your visuals
          don’t sell it, no one’s buying. Outstanding graphic design for Amazon
          is the silent sales force you should have.
        </p>
      </div>

      {/* better design benifits */}
      <div className="w-full px-16 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {betterDesignData.map((data, index) => {
            return <FeatureHighlightCard {...data} key={index} />;
          })}
        </div>
        <hr className="h-[1px] bg-zinc-400 mt-12" />
      </div>

      <div className="w-full px-16 py-4">
        <h1 className="text-2xl font-light md:text-4xl md:font-bold">
          Professional design service
        </h1>
        <p className="text-sm font-light max-w-2xl mt-4">
          Doing it yourself might seem like the easy way, but when it comes to
          Amazon listings, a professional touch makes all the difference. Hiring
          a designer to handle your graphics is an investment that pays off.
        </p>
      </div>

      {/* Design Service Page */}
    </div>
  );
};

export default DesignPage;
