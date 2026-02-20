import { motion } from "framer-motion";
import { MessageCircle, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import admin1 from "@/assets/admin1.jpg";
import admin2 from "@/assets/admin2.jpg";

const admins = [
  {
    name: "Cyrix Ray",
    role: "Academic Support Coordinator",
    image: admin1,
    whatsapp: "https://wa.me/254114998416",
  },
  {
    name: "Dennis Mwachi",
    role: "Academic Support Coordinator",
    image: admin2,
    whatsapp: "https://wa.me/254790954203",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Kenyan university campus"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 navy-gradient opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 font-display text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
            Your Future Starts{" "}
            <span className="text-gradient-gold">Here</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70 md:text-xl">
            Navigating KUCCPS course selection, university applications, and
            career guidance — all in one place.
          </p>
        </motion.div>

        {/* Admin Cards */}
        <div className="mx-auto mb-12 grid max-w-3xl gap-6 md:grid-cols-2">
          {admins.map((admin, i) => (
            <motion.div
              key={admin.name}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              className="glass-card group rounded-2xl p-1"
            >
              <div className="overflow-hidden rounded-xl bg-card">
                <img
                  src={admin.image}
                  alt={admin.name}
                  className="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {admin.name}
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    {admin.role}
                  </p>
                  <a
                    href={admin.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-green-700"
                  >
                    <MessageCircle size={16} />
                    Contact Admin
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <a
            href="https://chat.whatsapp.com/CCkCYrmoMeT0yTrQxjm9gt"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105"
          >
            <Users size={22} />
            Join WhatsApp Community
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
