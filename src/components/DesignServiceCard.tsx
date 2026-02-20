import ArrowIcon from "./ArrowIcon";

const DesignServiceCard = ({ service }) => {
  return (
    <div className="relative bg-white rounded-tr-xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full group">
      {/* Yellow Ribbon for specific cards */}
      {service.isNew && (
        <div className="absolute top-0 left-0 w-12 h-12 bg-yellow-400 transform -translate-x-6 -translate-y-6 rotate-45 z-10 shadow-sm" />
      )}

      {/* Image Section */}
      <div className="h-48 overflow-hidden flex items-center justify-center">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        {/* Learn More Link */}
        <a
          href="#"
          className="inline-flex gap-2 items-center text-orange-600 font-semibold text-sm hover:underline"
        >
         <ArrowIcon/>
          Learn more
        </a>
      </div>
    </div>
  );
};

export default DesignServiceCard;
