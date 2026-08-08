import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  Medal,
  Star,
} from "lucide-react";

const education = [
  {
    degree: "M.Tech Computer Science & Engineering",
    institution: "National Institute of Technology Meghalaya",
    period: "2025 — 2027",
    cgpa: "8.33",
    achievement: "ICCR Full Scholarship",
  },
  {
    degree: "B.Tech CSE — Big Data Analytics",
    institution: "SRM Institute of Science & Technology",
    period: "2020 — 2024",
    cgpa: "8.6",
    achievement: "COMPEX Full Scholarship",
  },
];

const achievements = [
  {
    title: "ICCR Full Scholarship",
    description: "Awarded for M.Tech at NIT Meghalaya.",
    icon: Award,
  },
  {
    title: "COMPEX Full Scholarship",
    description: "Awarded for B.Tech at SRM University.",
    icon: Medal,
  },
  {
    title: "Student Ambassador",
    description: "Student Ambassador at SRM University.",
    icon: Star,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-sm uppercase tracking-[0.35em] text-blue-400">
            Academics & Achievements
          </span>

          <h2 className="mt-5 text-5xl font-black">
            Education That Drives My Work
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            A strong academic foundation in computer science, supported by
            competitive scholarships and academic achievements.
          </p>
        </motion.div>

        {/* Education */}
        <div className="grid gap-8 lg:grid-cols-2">
          {education.map((item, index) => {
            return (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-blue-500/5"
              >
                {/* Glow */}
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-500/20" />

                <div className="relative">

                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10">
                      <GraduationCap className="h-7 w-7 text-blue-400" />
                    </div>

                    <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-gray-400">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-bold leading-tight">
                    {item.degree}
                  </h3>

                  <p className="mt-3 text-gray-400">
                    {item.institution}
                  </p>

                  {/* CGPA */}
                  <div className="mt-8 flex items-end justify-between border-t border-white/10 pt-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                        CGPA
                      </p>

                      <p className="mt-2 text-4xl font-black text-white">
                        {item.cgpa}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        Achievement
                      </p>

                      <p className="mt-2 font-semibold text-blue-400">
                        {item.achievement}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold">
              Scholarships & Recognition
            </h3>

            <p className="mt-2 text-gray-400">
              Academic opportunities and recognition earned throughout my
              education.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>

                  <h4 className="mt-5 text-lg font-bold">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}