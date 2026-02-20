import { motion } from "framer-motion";
import { Heart, Target } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 font-display text-3xl font-bold text-foreground md:text-5xl">
            About <span className="text-gradient-gold">Us</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-accent" />
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          {/* Letter to Students */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                <Heart className="text-accent" size={20} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Dear Form Four Leaver,
              </h3>
            </div>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Congratulations on completing your KCSE! We know this period of
                waiting for placement can feel uncertain and overwhelming. But
                hear us — <strong className="text-foreground">your grade does not define your destiny</strong>.
              </p>
              <p>
                Whether you scored an A or a D, there is a clear, achievable
                pathway waiting for you in Kenya's education system. From
                degrees to artisan courses, every grade has a door that opens
                to a fulfilling career.
              </p>
              <p>
                We created <strong className="text-foreground">Student Hub Kenya</strong> because
                we believe no student should miss an opportunity due to lack of
                information. We're here to walk with you — every step of the
                way.
              </p>
              <p className="font-semibold text-foreground italic">
                — With love, the Student Hub Team 💛
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                <Target className="text-accent" size={20} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Our Mission
              </h3>
            </div>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Student Hub Kenya is dedicated to empowering Kenyan students
                with the information and guidance they need to make confident,
                informed decisions about their tertiary education.
              </p>
              <p>
                We simplify the complex KUCCPS course selection process by
                providing clear course requirements, cluster groupings, and
                one-on-one guidance through our admin team.
              </p>
              <p>
                Our platform bridges the gap between KCSE results and
                university/college placement, ensuring every student finds the
                right course that matches their grades, interests, and career
                aspirations.
              </p>
              <ul className="space-y-2">
                {[
                  "Free KUCCPS course guidance",
                  "Personalized admin support via WhatsApp",
                  "150+ courses with clear requirements",
                  "KUCCPS Course Application Services",
                  "HELB & HEF Scholarship Application Services",
                  "KRA PIN Application & Registration",
                  "Digital skills training for the modern world",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
