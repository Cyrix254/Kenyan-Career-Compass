import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const highlights = [
  {
    quote:
      "I had a D+ and thought my life was over. Student Hub Kenya showed me amazing certificate and artisan programs. Today I'm a certified solar technician earning well!",
    name: "James M.",
    location: "Nakuru",
  },
  {
    quote:
      "The KUCCPS process was so confusing until I found this platform. The admins guided me through every step. I'm now pursuing a Diploma in Clinical Medicine!",
    name: "Aisha K.",
    location: "Mombasa",
  },
  {
    quote:
      "Student Hub Kenya didn't just help me choose a course — they helped me believe in myself. The digital skills classes gave me freelancing opportunities even before campus!",
    name: "Peter O.",
    location: "Kisumu",
  },
  {
    quote:
      "I was lost after Form Four. Thanks to the WhatsApp community, I met mentors who understood my situation. I'm now studying Software Engineering on a scholarship!",
    name: "Mercy W.",
    location: "Nairobi",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % highlights.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + highlights.length) % highlights.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-2 font-display text-3xl font-bold text-foreground md:text-5xl">
            Student <span className="text-gradient-gold">Stories</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-accent" />
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm md:p-12"
            >
              <p className="mb-6 font-body text-lg leading-relaxed text-muted-foreground italic">
                "{highlights[current].quote}"
              </p>
              <p className="font-display text-base font-bold text-foreground">
                {highlights[current].name}
              </p>
              <p className="text-sm text-accent">
                {highlights[current].location}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 rounded-full border border-border bg-card p-2 shadow-sm transition-colors hover:bg-secondary md:-translate-x-12"
            aria-label="Previous story"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 rounded-full border border-border bg-card p-2 shadow-sm transition-colors hover:bg-secondary md:translate-x-12"
            aria-label="Next story"
          >
            <ChevronRight size={20} className="text-foreground" />
          </button>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {highlights.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current
                    ? "w-8 bg-accent"
                    : "w-2 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to story ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
