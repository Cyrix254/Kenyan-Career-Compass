import { useState, useMemo, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, MessageCircle, GraduationCap, BookOpen, Award, Wrench,
  ChevronDown, TrendingUp, TrendingDown, Minus, Zap,
  Calendar, Briefcase, BookOpenCheck, DollarSign
} from "lucide-react";
import { coursesData, clusterTypes, type ClusterType, type Course } from "@/data/coursesData";
import { getMarketTrend, type MarketTrendType } from "@/data/marketTrends";
import ConsultationModal from "./ConsultationModal";

const clusterIcons: Record<ClusterType, typeof GraduationCap> = {
  Degree: GraduationCap,
  Diploma: BookOpen,
  Certificate: Award,
  Artisan: Wrench,
};

const clusterColors: Record<ClusterType, string> = {
  Degree: "bg-sky text-primary-foreground",
  Diploma: "bg-accent text-accent-foreground",
  Certificate: "bg-green-600 text-primary-foreground",
  Artisan: "bg-navy-light text-primary-foreground",
};

const trendConfig = {
  booming: { icon: Zap, label: "Booming", color: "text-green-600 bg-green-100" },
  rising: { icon: TrendingUp, label: "Rising", color: "text-sky bg-blue-100" },
  stable: { icon: Minus, label: "Stable", color: "text-accent bg-amber-100" },
  declining: { icon: TrendingDown, label: "Declining", color: "text-destructive bg-red-100" },
};

const CourseCard = memo(({ course, onConsult }: { course: Course; onConsult: (course: Course) => void }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = clusterIcons[course.cluster];
  const trend = getMarketTrend(course.name);
  const trendInfo = trend ? trendConfig[trend.direction] : null;

  return (
    <div className="group rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-2">
          <h4 className="font-display text-base font-bold text-foreground leading-tight">
            {course.name}
          </h4>
          <span
            className={`flex-shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${clusterColors[course.cluster]}`}
          >
            {course.cluster}
          </span>
        </div>
        <div className="mb-3 space-y-1.5 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon size={14} className="text-accent" />
            <span>
              Min. Grade: <strong className="text-foreground">{course.overallGrade}</strong>
            </span>
          </div>
          <p className="text-xs leading-relaxed">{course.subjectRequirements}</p>
        </div>

        {/* Trend badge + salary */}
        {trend && trendInfo && (
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${trendInfo.color}`}>
              <trendInfo.icon size={12} />
              {trendInfo.label}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
              <DollarSign size={11} />
              {trend.salaryRange}
            </span>
          </div>
        )}

        <div className="flex items-center gap-2">
          <button
            onClick={() => onConsult(course)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-green-600 px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-green-700"
          >
            <MessageCircle size={13} />
            Seek Guidance
          </button>
          {trend && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary"
            >
              Market Trends
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          )}
        </div>
      </div>

      {/* Expandable Trends Panel */}
      <AnimatePresence>
        {expanded && trend && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t border-border bg-muted/30 px-5 py-4 space-y-4">
              {/* Past 5 Years */}
              <div>
                <div className="mb-1.5 flex items-center gap-1.5">
                  <Calendar size={13} className="text-accent" />
                  <h5 className="text-xs font-bold text-foreground uppercase tracking-wide">
                    Past 5 Years (2019–2024)
                  </h5>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {trend.pastTrend}
                </p>
              </div>

              {/* Next 5 Years */}
              <div>
                <div className="mb-1.5 flex items-center gap-1.5">
                  <Briefcase size={13} className="text-accent" />
                  <h5 className="text-xs font-bold text-foreground uppercase tracking-wide">
                    Next 5 Years (2025–2030)
                  </h5>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {trend.futureTrend}
                </p>
              </div>

              {/* What to Expect */}
              <div>
                <div className="mb-1.5 flex items-center gap-1.5">
                  <BookOpenCheck size={13} className="text-accent" />
                  <h5 className="text-xs font-bold text-foreground uppercase tracking-wide">
                    What to Expect During Study
                  </h5>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {trend.studyExpectation}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

CourseCard.displayName = "CourseCard";

const ITEMS_PER_PAGE = 12;

const Courses = () => {
  const [search, setSearch] = useState("");
  const [activeCluster, setActiveCluster] = useState<ClusterType | "All">("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filtered = useMemo(() => {
    let result = coursesData;
    if (activeCluster !== "All") {
      result = result.filter((c) => c.cluster === activeCluster);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.cluster.toLowerCase().includes(q) ||
          c.overallGrade.toLowerCase().includes(q)
      );
    }
    return result;
  }, [search, activeCluster]);

  const visibleCourses = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setVisibleCount(ITEMS_PER_PAGE);
  }, []);

  const handleCluster = useCallback((c: ClusterType | "All") => {
    setActiveCluster(c);
    setVisibleCount(ITEMS_PER_PAGE);
  }, []);

  return (
    <section id="courses" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-2 font-display text-3xl font-bold text-foreground md:text-5xl">
            Explore <span className="text-gradient-gold">Courses</span>
          </h2>
          <p className="text-muted-foreground">
            Browse {coursesData.length}+ courses across all KUCCPS clusters — with market trends & salary data
          </p>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-accent" />
        </motion.div>

        {/* Search & Filter */}
        <div className="mx-auto mb-8 max-w-3xl space-y-4">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search courses by name, cluster, or grade..."
              className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {(["All", ...clusterTypes] as const).map((c) => (
              <button
                key={c}
                onClick={() => handleCluster(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${activeCluster === c
                  ? "gold-gradient text-accent-foreground shadow"
                  : "bg-card text-muted-foreground border border-border hover:bg-secondary"
                  }`}
              >
                {c} {c !== "All" && `(${coursesData.filter((x) => x.cluster === c).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCourses.map((course) => (
            <CourseCard key={course.id} course={course} onConsult={setSelectedCourse} />
          ))}
        </div>

        {visibleCourses.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">
            No courses found. Try adjusting your search or filter.
          </p>
        )}

        {visibleCount < filtered.length && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setVisibleCount((v) => v + ITEMS_PER_PAGE)}
              className="rounded-full border border-border bg-card px-8 py-3 font-semibold text-foreground transition-all hover:bg-secondary"
            >
              Load More ({filtered.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>

      <ConsultationModal
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        courseName={selectedCourse?.name || ""}
      />
    </section>
  );
};

export default Courses;
