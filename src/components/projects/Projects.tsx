import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import aiAssistant from "../../assets/projects/ai-assistant.svg";
import newsAggregator from "../../assets/projects/news-aggregator.svg";
import brainTumor from "../../assets/projects/brain-tumor.png";

const projects = [
    {
        title: "AI Developer Assistant",
        status: "Production Ready",
        image: aiAssistant,
        description:
            "Production-ready AI developer assistant featuring authentication, AI chat, Docker deployment, PostgreSQL and scalable FastAPI architecture.",
        stack: [
            "FastAPI",
            "React",
            "PostgreSQL",
            "Docker",
            "JWT",
            "LLM",
        ],
        live: "https://ai-developer-assistant-frontend-kiz.vercel.app/",
        github:
            "https://github.com/SurajRauniyar1/ai-developer-assistant-backend",
    },
    {
        title: "AI News Aggregator",
        status: "Production Ready",
        image: newsAggregator,
        description:
            "AI-powered news platform with authentication, AI summaries, bookmarks, reading history, user profile and chat.",
        stack: [
            "React",
            "FastAPI",
            "PostgreSQL",
            "JWT",
            "Tailwind",
        ],
        live: "https://at-news-frontend.vercel.app/",
        github:
            "https://github.com/SurajRauniyar1/Ai-News-Backend",
    },
    {
        title: "Brain Tumor Detection",
        status: "Research Project",
        image: brainTumor,
        description:
            "Deep learning system comparing CNN, EfficientNet and Vision Transformer for multi-class MRI brain tumor classification.",
        stack: [
            "Python",
            "TensorFlow",
            "CNN",
            "EfficientNet",
            "ViT",
        ],
        live: "",
        github:
            "https://github.com/SurajRauniyar1/Brain_Tumor_Detection_CNN_Efficeint_Hybrid_transformer",
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
                        Featured Projects
                    </span>

                    <h2 className="mt-4 text-5xl font-black">
                        Things I've Built
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
                        Production-ready backend systems, AI-powered applications and
                        deep learning projects built using modern technologies.
                    </p>

                </div>

                <div className="grid gap-10 lg:grid-cols-3">

                    {projects.map((project, index) => (

                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                        >

                            <div className="relative overflow-hidden">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-56 w-full object-cover transition duration-500 hover:scale-110"
                                />

                                <div className="absolute left-4 top-4 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                                    {project.status}
                                </div>

                            </div>

                            <div className="p-7">

                                <div className="flex items-center justify-between">

                                    <h3 className="text-2xl font-bold">
                                        {project.title}
                                    </h3>

                                    <ArrowUpRight className="text-blue-400" />

                                </div>

                                <p className="mt-5 leading-7 text-gray-400">
                                    {project.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">

                                    {project.stack.map((tech) => (

                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm"
                                        >
                                            {tech}
                                        </span>

                                    ))}

                                </div>

                                <div className="mt-8 flex gap-3">

                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold transition hover:bg-blue-500"
                                        >
                                            Live Demo
                                        </a>
                                    )}

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 transition hover:border-blue-500"
                                    >
                                        <FaGithub />
                                        GitHub
                                    </a>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}