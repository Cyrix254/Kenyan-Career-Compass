import { useState, useMemo, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { Search, MessageCircle, GraduationCap, BookOpen, Award, Wrench } from "lucide-react";
import { coursesData, clusterTypes, type ClusterType, type Course } from "@/data/coursesData";

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

const CourseCard = memo(({ course }: { course: Course }) => {
  const Icon = clusterIcons[course.cluster];
  return (
    <div className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
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
      <a
        href="https://wa.me/254700000000"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-lg bg-green-600 px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-green-700"
      >
        <MessageCircle size={13} />
        Seek Guidance
      </a>
    </div>
  );
});

CourseCard.displayName = "CourseCard";

const ITEMS_PER_PAGE = 12;

const Courses = () => {
  const [search, setSearch] = useState("");
  const [activeCluster, setActiveCluster] = useState<ClusterType | "All">("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

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
            Browse {coursesData.length}+ courses across all KUCCPS clusters
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
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  activeCluster === c
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
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
    </section>
  );
};

export default Courses;
