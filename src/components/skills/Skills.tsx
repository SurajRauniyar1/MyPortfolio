import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Brain,
  Wrench,
} from "lucide-react";

const skills = [
  {
    title: "Languages",
    icon: Code2,
    tech: ["C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: Code2,
    tech: ["React", "Vite", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    tech: ["FastAPI", "Node.js", "Express", "REST APIs", "JWT"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    tech: [
      "LLMs",
      "RAG",
      "TensorFlow",
      "CNN",
      "Vision Transformer",
      "EfficientNet",
    ],
  },
  {
    title: "Database",
    icon: Database,
    tech: ["PostgreSQL", "MongoDB", "SQLAlchemy"],
  },
  {
    title: "Tools",
    icon: Wrench,
    tech: ["Docker", "Git", "GitHub", "Linux", "Postman"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <span className="text-sm uppercase tracking-[0.35em] text-blue-400">
            Skills
          </span>

          <h2 className="mt-5 text-5xl font-black">
            Technologies I Work With
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {skills.map((skill, index) => {

            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-blue-500/10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/15">
                  <Icon className="text-blue-400" />
                </div>

                <h3 className="mb-6 text-2xl font-bold">
                  {skill.title}
                </h3>

                <div className="flex flex-wrap gap-3">

                  {skill.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm transition hover:border-blue-500 hover:bg-blue-500/10"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}