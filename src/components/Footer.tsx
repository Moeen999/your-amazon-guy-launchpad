import { Link } from "react-router-dom";
import { Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-background border-t border-border">
    {/* Email subscribe */}
    <div className="border-b border-border">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-10 text-center">
        <h3 className="text-xl font-heading font-bold text-foreground mb-4">Subscribe for Email Updates</h3>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Type your name"
            className="h-10 px-4 rounded-md border border-input bg-background text-sm w-full sm:w-auto flex-1"
          />
          <input
            type="email"
            placeholder="Type your email"
            className="h-10 px-4 rounded-md border border-input bg-background text-sm w-full sm:w-auto flex-1"
          />
          <button
            type="submit"
            className="h-10 px-6 rounded-md bg-accent text-accent-foreground text-sm font-semibold hover:bg-amber-hover transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>

    <div className="container-main px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-1.5 mb-4">
            <div className="flex gap-0.5">
              <div className="w-1 h-5 bg-red-accent rounded-sm" />
              <div className="w-1 h-5 bg-accent rounded-sm" />
              <div className="w-1 h-5 bg-accent rounded-sm" />
            </div>
            <span className="text-lg font-heading font-bold text-foreground ml-1">My Amazon Partners</span>
          </div>
          <div className="flex gap-3 mb-4">
            <a href="#" className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity">
              <Linkedin size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity">
              <Youtube size={14} />
            </a>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><MapPin size={14} /> Atlanta, GA</div>
            <div className="flex items-center gap-2"><Phone size={14} /> +1 470-623-1951</div>
            <div className="flex items-center gap-2"><Mail size={14} /> sales@myamazonpartners.com</div>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-foreground mb-4 text-sm">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground transition-colors">Full Service Management</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-colors">Search Engine Optimization (SEO)</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-colors">Advertising Management (PPC)</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-colors">Listing Optimization</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-colors">Design</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-colors">Account Suspension</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-colors">Trademark Registration</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-foreground mb-4 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/results" className="hover:text-foreground transition-colors">Case Studies</Link></li>
            <li><Link to="/results" className="hover:text-foreground transition-colors">Testimonials</Link></li>
            <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-foreground mb-4 text-sm">Get Started</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Ready to grow your Amazon business? Get a free listing audit today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-bold hover:bg-amber-hover transition-colors"
          >
            Get a Free Audit
          </Link>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} My Amazon Partners. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
