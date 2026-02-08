import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <>
      <section className="gradient-hero section-padding">
        <div className="container-main text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground">
            Let's Grow Your Amazon Business
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Book a free strategy call or send us a message. We respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-background section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                    <Input
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <Input
                      required
                      type="email"
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Company / Brand Name</label>
                  <Input
                    maxLength={100}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your Brand"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <Textarea
                    required
                    maxLength={1000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your Amazon business and goals..."
                  />
                </div>
                <Button type="submit" variant="cta" size="lg">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-cta flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Email Us</div>
                    <div className="text-muted-foreground text-sm">hello@youramazonguy.com</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-cta flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Call Us</div>
                    <div className="text-muted-foreground text-sm">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-cta flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Location</div>
                    <div className="text-muted-foreground text-sm">United States (Remote)</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-section-alt rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-foreground mb-2">Book a Free Strategy Call</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Schedule a 30-minute call with one of our Amazon growth experts. No obligations, just actionable insights.
                </p>
                <Button variant="cta" size="sm" className="w-full">
                  Schedule Your Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
