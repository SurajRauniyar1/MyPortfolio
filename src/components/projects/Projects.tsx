import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AI Developer Assistant",
    description:
      "Production-ready AI assistant with FastAPI, React, PostgreSQL, Docker and LLM integration.",
    stack: [
      "FastAPI",
      "React",
      "Docker",
      "PostgreSQL",
      "LLM",
    ],
    live: "#",
    github: "https://github.com/SurajRauniyar1",
  },

  {
    title: "AI News Aggregator",
    description:
      "AI-powered news platform featuring authentication, bookmarks, AI summaries, chat and user profiles.",
    stack: [
      "React",
      "FastAPI",
      "JWT",
      "PostgreSQL",
    ],
    live: "#",
    github: "https://github.com/SurajRauniyar1",
  },

  {
    title: "Brain Tumor Detection",
    description:
      "Deep learning system using CNN, EfficientNet and Vision Transformers for MRI classification.",
    stack: [
      "TensorFlow",
      "CNN",
      "ViT",
      "Python",
    ],
    live: "#",
    github: "https://github.com/SurajRauniyar1",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <span className="text-sm uppercase tracking-[0.35em] text-blue-400">
            Projects
          </span>

          <h2 className="mt-5 text-5xl font-black">
            Featured Work
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:bg-blue-500/10"
            >

              <div className="flex items-center justify-between">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <ArrowUpRight
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </div>

              <p className="mt-5 leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {project.stack.map((item) => (

                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm"
                  >
                    {item}
                  </span>

                ))}

              </div>

              <div className="mt-10 flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition hover:border-blue-500"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="rounded-xl bg-blue-600 px-5 py-3 transition hover:bg-blue-500"
                >
                  Live Demo
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}