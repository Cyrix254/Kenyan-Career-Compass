import { motion } from "framer-motion";
import { Code, Palette, TrendingUp, Bot, MessageCircle } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript, React, and modern frameworks to build real-world websites and web applications.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Master Canva, Adobe Photoshop & Illustrator. Create logos, posters, social media graphics, and brand identity.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "SEO, social media marketing, Google Ads, email campaigns — grow brands and businesses online.",
  },
  {
    icon: Bot,
    title: "Artificial Intelligence",
    description:
      "Understand AI tools like ChatGPT, prompt engineering, automation, and how AI is transforming every industry.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const DigitalSkills = () => {
  return (
    <section id="skills" className="section-padding navy-gradient">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 font-display text-3xl font-bold text-primary-foreground md:text-5xl">
            Digital <span className="text-gradient-gold">Skills</span>
          </h2>
          <p className="text-primary-foreground/60">
          Alongside our guidance and resource hub, we offer Professional Digital Training. We realized that many students have the passion but lack the technical "edge" that employers demand.
           By including essential digital courses in our service catalog, we ensure that every student who uses our platform leaves not just with a plan, but with a specialized skill set.
          </p>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-accent" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={item}
              className="group rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                <skill.icon className="text-accent" size={24} />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-primary-foreground">
                {skill.title}
              </h3>
              <p className="text-sm leading-relaxed text-primary-foreground/60">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://wa.me/254114998416?text=Hi!%20I%27d%20like%20to%20enquire%20about%20digital%20skills%20classes."
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient inline-flex items-center gap-2 rounded-full px-8 py-3 font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle size={18} />
            Enquire About Classes
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalSkills;
