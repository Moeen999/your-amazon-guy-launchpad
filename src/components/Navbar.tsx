import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Results", path: "/results" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-navy-light">
      <nav className="container-main flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-heading font-bold text-primary-foreground">
            your<span className="text-accent">amazon</span>guy
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === item.path
                  ? "text-accent"
                  : "text-primary-foreground/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="cta" size="sm">
            <Link to="/contact">Book a Call</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-navy-light">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-primary-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="cta" size="sm" className="w-full mt-2">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Book a Call
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
