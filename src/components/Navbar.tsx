import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ArrowIcon from "./ArrowIcon";

const topNav = [{ label: "Contact Us", path: "/contact" }];

const bottomNav = [
  { label: "Services", path: "/services", hasDropdown: true },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Testimonials", path: "/case-studies#testimonials" },
  { label: "About Us", path: "/about" },
  { label: "Coaching", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const servicesButtonRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !servicesButtonRef.current?.contains(e.target)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Top bar */}
      <div className="border-b border-border">
        <div className="container-main flex items-center justify-between px-4 h-14">
          <Link to="/" className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              <div className="w-1 h-6 bg-red-accent rounded-sm" />
              <div className="w-1 h-6 bg-accent rounded-sm" />
              <div className="w-1 h-6 bg-accent rounded-sm" />
            </div>
            <span className="text-xl font-heading font-bold ml-1">
              My Amazon Partners
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {topNav.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="cta" size="sm">
              <Link to="/contact">Get a Free Audit</Link>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="hidden md:block relative">
        <div className="container-main flex items-center gap-8 px-4 h-12">
          {bottomNav.map((item) =>
            item.hasDropdown ? (
              <button
                ref={servicesButtonRef}
                key={item.label}
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm font-medium hover:text-accent"
              >
                Services <ChevronDown size={16} />
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm font-medium hover:text-accent ${
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}

          <Link to="/contact" className="text-sm font-medium text-red-accent">
            Free Audit
          </Link>
        </div>

        {/* SERVICES Dropdown */}
        {servicesOpen && (
          <div
            ref={dropdownRef}
            className="absolute left-0 w-full bg-white border-t-[4px] border-orange-500 shadow-xl transition-transform duration-300 "
          >
            <div className="container-main px-8 py-10 grid grid-cols-4 text-sm text-gray-800">
              {/* Col 1 */}
              <div className="space-y-4 pr-6 border-r border-dashed">
                {[
                  {
                    title: "Full service management",
                    link: "/services/full-service-management",
                  },
                  {
                    title: "Advertising (PPC) management",
                    link: "/services/advertising-management",
                  },
                  { title: "Amazon SEO", link: "/services/amazon-seo" },
                  {
                    title: "Amazon account audit",
                    link: "/services/amazon-account-audit",
                  },
                  { title: "All services", link: "/services" },
                  {
                    title: "Consulting",
                    link: "/services/amazon-brand-growth-consulting",
                  },
                  {
                    title: "Book a coaching call",
                    link: "/contact",
                  },
                ].map((item) => (
                  <Link
                    to={item.link}
                    onClick={()=>setServicesOpen(!servicesOpen)}
                    key={item.link}
                    className="flex items-center gap-3 font-semibold hover:bg-gray-200/60 px-2 py-1.5 rounded-sm"
                  >
                    <ArrowIcon />
                    <p className="font-bold hover:text-black hover:underline cursor-pointer">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Col 2 */}
              <div className="space-y-3 px-6 border-r border-dashed">
                {[
                  {
                    title: "Design",
                    link: "/services/design",
                  },
                  {
                    title: "Brand guidelines",
                    link: "/services/design/amazon-brand-guidelines",
                  },
                  {
                    title: "Brand story",
                    link: "/services/design/amazon-brand-story",
                  },
                  {
                    title: "Brand store",
                    link: "/services/design/amazon-brand-store",
                  },
                  {
                    title: "Listing images",
                    link: "/services/design/listing-images-design",
                  },
                  {
                    title: "Enhanced brand content A+",
                    link: "/services/design/amazon-enhanced-brand-a-plus-content",
                  },
                  {
                    title: "Main image CTR hack",
                    link: "/services/design/amazon-main-image-ctr-upgrade",
                  },
                  {
                    title: "Listing optimization",
                    link: "/services/listing-optimization",
                  },
                  {
                    title: "Full listing optimization",
                    link: "/services/listing-optimization/end-to-end-listing",
                  },
                ].map((item) => (
                  <Link
                    to={item.link}
                    key={item.title}
                    className="flex items-center gap-3  hover:bg-gray-200/60 px-2 py-1.5 rounded-sm"
                  >
                    {item.title === "Design" && <ArrowIcon />}
                    <p
                      className={`hover:underline ${item.title === "Design" ? "font-bold " : ""}`}
                    >
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
              {/* Col 3 */}
              <div className="space-y-3 px-6 border-r border-dashed">
                {[
                  {
                    title: "Troubleshooting",
                    link: "/services/other-services/amazon-troubleshooting",
                  },
                  {
                    title: "Listing reinstatement",
                    link: "/services/account-suspension-reinstatement/amazon-listing-reinstatement",
                  },
                  {
                    title: "Account suspension",
                    link: "/services/account-suspension-reinstatement",
                  },
                  {
                    title: "PPC Advertising audit",
                    link: "/services/other-services/advertising-audit",
                  },
                  {
                    title: "Brand name change",
                    link: "/services/listing-optimization/amazon-brand-name-change",
                  },
                  {
                    title: "Troubleshooting hours",
                    link: "/services/other-services/amazon-troubleshooting",
                  },
                  {
                    title: "UPC to GS1 change",
                    link: "/services/listing-optimization/listing-optimization/upc-change-gs1-amazon",
                  },
                ].map((item) => (
                  <Link
                    to={item.link}
                    key={item.title}
                    className="flex items-center gap-3  hover:bg-gray-200/60 px-2 py-1.5 rounded-sm"
                  >
                    {item.title === "Troubleshooting" && <ArrowIcon />}
                    <p
                      className={`hover:underline ${item.title === "Troubleshooting" ? "font-bold " : ""}`}
                    >
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Column 4 */}
              <div className="space-y-3 pl-6">
                {[
                  {
                    title: "Other services",
                    link: "/services/other-services",
                    isHeading: true,
                  },
                  {
                    title: "Amazon DSP",
                    link: "/amazon-dsp",
                  },
                  {
                    title: "Trademark registration",
                    link: "/services/trademark-registration",
                  },
                  {
                    title: "Vendor Central full service",
                    link: "/services/other-services/vendor-central",
                  },
                  {
                    title: "Walmart Account Audit",
                    link: "/services/other-services/walmart-account-audit",
                    isNew: true,
                  },
                  {
                    title: "Walmart Advertising Audit",
                    link: "/services/other-services/walmart-advertising-audit",
                    isNew: true,
                  },
                ].map((item) => (
                  <Link
                    key={item.title}
                    to={item.link}
                    className="flex items-center gap-3 hover:bg-gray-200/60 px-2 py-1.5 rounded-sm"
                  >
                    {item.isHeading && <ArrowIcon />}

                    <p
                      className={`hover:underline cursor-pointer ${
                        item.isHeading ? "font-bold text-base" : ""
                      }`}
                    >
                      {item.title}
                    </p>

                    {item.isNew && (
                      <span className="text-red-500 text-xs font-bold">
                        NEW
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu (same as before) */}
      {mobileOpen && (
        <div className="md:hidden px-4 py-4 space-y-2">
          {[...bottomNav, ...topNav].map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="block py-2"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
