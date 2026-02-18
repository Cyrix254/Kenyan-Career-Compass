import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding navy-gradient">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 font-display text-3xl font-bold text-primary-foreground md:text-5xl">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-primary-foreground/60">
            Have questions? We'd love to hear from you.
          </p>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-accent" />
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              required
              className="w-full rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              required
              className="w-full rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              required
              className="w-full rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="gold-gradient inline-flex items-center gap-2 rounded-full px-8 py-3 font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105"
            >
              <Send size={16} />
              {submitted ? "Message Sent! ✓" : "Send Message"}
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              { icon: MapPin, label: "Nairobi, Kenya" },
              { icon: Phone, label: "+254 700 000 000" },
              { icon: Mail, label: "info@studenthubkenya.co.ke" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 text-primary-foreground/80"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                  <item.icon className="text-accent" size={18} />
                </div>
                <span className="text-sm">{item.label}</span>
              </div>
            ))}

            <div className="pt-4">
              <p className="mb-3 text-sm font-semibold text-primary-foreground/60">
                Follow Us
              </p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/5 text-primary-foreground/60 transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-sm text-primary-foreground/40">
            © 2026 Student Hub Kenya. All rights reserved. Built with 💛 for
            Kenyan students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
