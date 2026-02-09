import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const topNav = [
  { label: "Resources", path: "/results" },
  { label: "Contact Us", path: "/contact" },
];

const bottomNav = [
  { label: "Services", path: "/services" },
  { label: "Case Studies", path: "/results" },
  { label: "Testimonials", path: "/results#testimonials" },
  { label: "About Us", path: "/about" },
  { label: "Coaching", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Top bar */}
      <div className="border-b border-border">
        <div className="container-main flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
          <Link to="/" className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              <div className="w-1 h-6 bg-red-accent rounded-sm" />
              <div className="w-1 h-6 bg-accent rounded-sm" />
              <div className="w-1 h-6 bg-accent rounded-sm" />
            </div>
            <span className="text-xl font-heading font-bold text-foreground ml-1">
              My Amazon Partners
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {topNav.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="cta" size="sm">
              <Link to="/contact">Fast Quote</Link>
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Bottom nav - desktop */}
      <div className="hidden md:block">
        <div className="container-main flex items-center gap-8 px-4 sm:px-6 lg:px-8 h-12">
          {bottomNav.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === item.path ? "text-accent" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-sm font-medium text-red-accent hover:text-red-accent/80 transition-colors"
          >
            Free Audit
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {[...bottomNav, ...topNav].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block py-2.5 text-sm font-medium transition-colors ${
                  location.pathname === item.path ? "text-accent" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-red-accent"
            >
              Free Audit
            </Link>
            <Button asChild variant="cta" size="sm" className="w-full mt-2">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Fast Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
