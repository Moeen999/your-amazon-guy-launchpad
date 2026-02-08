import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-main section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <span className="text-xl font-heading font-bold">
            your<span className="text-accent">amazon</span>guy
          </span>
          <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed">
            Full-service Amazon agency helping brands scale revenue, optimize listings, and dominate the marketplace.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/40">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/services" className="hover:text-accent transition-colors">PPC Management</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Listing Optimization</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Account Management</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Product Launch</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/40">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/results" className="hover:text-accent transition-colors">Case Studies</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/40">Get Started</h4>
          <p className="text-sm text-primary-foreground/70 mb-4">Ready to grow your Amazon business?</p>
          <Link
            to="/contact"
            className="inline-block gradient-cta text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold shadow-cta hover:opacity-90 transition-opacity"
          >
            Book a Free Call
          </Link>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-navy-light text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} youramazonguy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
