import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Cpu,
  Award,
} from "lucide-react";
import hero from "../../assets/hero.png";

const timeline = [
  {
    year: "2020",
    title: "Started B.Tech",
    subtitle: "SRM Institute of Science & Technology",
    icon: GraduationCap,
  },
  {
    year: "2024",
    title: "Government IT Service",
    subtitle: "Bagmati Municipality, Nepal",
    icon: Briefcase,
  },
  {
    year: "2024",
    title: "Web Development Intern",
    subtitle: "Ransh Innovations",
    icon: Briefcase,
  },
  {
    year: "2025",
    title: "M.Tech CSE",
    subtitle: "NIT Meghalaya",
    icon: GraduationCap,
  },
  {
    year: "Present",
    title: "Building AI Products",
    subtitle: "Backend • AI • Full Stack",
    icon: Cpu,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          <span className="text-blue-400 uppercase tracking-[0.35em] text-sm">
            About Me
          </span>

          <h2 className="mt-5 text-5xl font-black">
            My Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400 text-lg">
            From a Computer Science student to building AI-powered
            backend systems, my focus has always been creating
            software that solves real-world problems.
          </p>

        </motion.div>

        <div className="grid gap-20 lg:grid-cols-2">

          {/* Timeline */}

          <div className="space-y-8">

            {timeline.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-blue-500/40 transition"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/15">
                    <Icon className="text-blue-400" />
                  </div>

                  <div>
                    <p className="text-sm text-blue-400">
                      {item.year}
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-gray-400">
                      {item.subtitle}
                    </p>
                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >

            <div className="relative">

              <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-3xl" />

              <img
                src={hero}
                alt="Suraj Rauniyar"
                className="relative w-[420px] rounded-3xl border border-white/10"
              />

            </div>

            <div className="mt-10 grid w-full grid-cols-2 gap-5">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">

                <h3 className="text-4xl font-bold text-blue-400">
                  3+
                </h3>

                <p className="mt-2 text-gray-400">
                  Major Projects
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">

                <Award className="mx-auto text-yellow-400" />

                <h3 className="mt-3 text-4xl font-bold">
                  2
                </h3>

                <p className="mt-2 text-gray-400">
                  Scholarships
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}