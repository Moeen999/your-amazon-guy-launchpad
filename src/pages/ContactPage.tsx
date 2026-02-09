import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, Briefcase, BookOpen, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import CTASection from "@/components/CTASection";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "", listingLink: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you by the next business day." });
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "", listingLink: "" });
  };

  return (
    <>
      <section className="bg-background">
        <div className="container-main px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left - Contact info */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
                Contact us
              </h1>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We're available Monday to Friday, from 9:00 AM to 5:00 PM EST. Reach us by phone and email, or send us a message using the contact form.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Phone: </span>
                    <span className="font-semibold text-foreground">+1 470-623-1951</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Email: </span>
                    <span className="font-semibold text-foreground">sales@myamazonpartners.com</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-muted-foreground mb-4">For specific concerns, we are also available through:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-accent">●</span>
                    <div>
                      <div className="font-semibold text-foreground text-sm flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" /> Careers
                      </div>
                      <div className="text-sm text-muted-foreground">jobs@myamazonpartners.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent">●</span>
                    <div>
                      <div className="font-semibold text-foreground text-sm flex items-center gap-1.5">
                        <BookOpen className="h-3.5 w-3.5" /> Amazon courses
                      </div>
                      <div className="text-sm text-muted-foreground">courses@myamazonpartners.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent">●</span>
                    <div>
                      <div className="font-semibold text-foreground text-sm flex items-center gap-1.5">
                        <Headphones className="h-3.5 w-3.5" /> Coaching calls
                      </div>
                      <div className="text-sm text-muted-foreground">coaching@myamazonpartners.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <p className="text-sm text-muted-foreground mb-6">
                Tell us about your Amazon concern, and we'll get back to you by the next business day.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">First name*</label>
                    <Input
                      required
                      maxLength={100}
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Last name*</label>
                    <Input
                      required
                      maxLength={100}
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email*</label>
                  <Input
                    required
                    type="email"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone number*</label>
                  <Input
                    required
                    type="tel"
                    maxLength={20}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">How can we help you?*</label>
                  <Textarea
                    required
                    maxLength={1000}
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Amazon Listing Link</label>
                  <Input
                    maxLength={500}
                    value={form.listingLink}
                    onChange={(e) => setForm({ ...form, listingLink: e.target.value })}
                    placeholder="https://amazon.com/dp/..."
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  By clicking Submit, you agree to our Privacy Policy and Terms & Conditions.
                </p>
                <Button type="submit" variant="cta" size="lg">
                  Submit <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service cards below contact */}
      <section className="bg-section-alt section-padding border-t border-border">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/services" className="group bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-shadow">
              <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors">Account reinstatement</h3>
              <p className="text-sm text-muted-foreground mt-2">Get back to selling with account reinstatement service.</p>
              <span className="text-sm font-semibold text-accent mt-3 inline-block">Reinstate my account →</span>
            </Link>
            <Link to="/services" className="group bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-shadow">
              <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors">Listing Optimization</h3>
              <p className="text-sm text-muted-foreground mt-2">Get an end-to-end listing optimization to boost your sales.</p>
              <span className="text-sm font-semibold text-accent mt-3 inline-block">Optimize my listing →</span>
            </Link>
            <Link to="/services" className="group bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-shadow">
              <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors">Full Service Management</h3>
              <p className="text-sm text-muted-foreground mt-2">Let our Amazon experts handle everything for your brand.</p>
              <span className="text-sm font-semibold text-accent mt-3 inline-block">Get started →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
