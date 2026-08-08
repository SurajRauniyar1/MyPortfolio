import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Building2,
} from "lucide-react";

const timeline = [
  {
    year: "2020",
    title: "B.Tech CSE (Big Data Analytics)",
    company: "SRM Institute of Science & Technology",
    icon: GraduationCap,
  },
  {
    year: "2024",
    title: "Government IT Service",
    company: "Bagmati Municipality, Nepal",
    icon: Building2,
  },
  
  {
    year: "2025 - Present",
    title: "M.Tech Computer Science",
    company: "National Institute of Technology Meghalaya",
    icon: GraduationCap,
  },
  {
    year: "2025",
    title: "Web Development Intern",
    company: "Ransh Innovations",
    icon: Briefcase,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center mb-20">

          <span className="text-sm uppercase tracking-[0.35em] text-blue-400">
            Experience & Education
          </span>

          <h2 className="mt-5 text-5xl font-black">
            My Journey
          </h2>

        </div>

        <div className="relative">

          <div className="absolute left-6 top-0 h-full w-[2px] bg-blue-500/20" />

          <div className="space-y-12">

            {timeline.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative flex gap-8"
                >

                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                    <Icon size={22} />
                  </div>

                  <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-blue-500 hover:bg-blue-500/10">

                    <span className="text-blue-400 font-semibold">
                      {item.year}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-gray-400">
                      {item.company}
                    </p>

                  </div>

                </motion.div>
              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
}