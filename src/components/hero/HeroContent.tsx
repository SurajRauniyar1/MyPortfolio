import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function HeroContent() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400 backdrop-blur-md"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
        Backend Engineer • AI Engineer • Full Stack Developer
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-8 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl"
      >
        Building
        <br />

        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
          Intelligent Software
        </span>

        <br />

        That Solves
        <br />

        Real Problems.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-8 max-w-xl text-lg leading-8 text-gray-400"
      >
        I'm{" "}
        <span className="font-semibold text-white">
          Suraj Rauniyar
        </span>
        , an M.Tech Computer Science student at NIT Meghalaya focused on
        building scalable backend systems, AI-powered applications, and
        production-ready software.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        {/* Projects */}
        <a
          href="#projects"
          className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-600/40"
        >
          Explore Projects

          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        {/* Resume */}
        <a
          href="./Suraj_Rauniyar_Professional_CV.pdf"
          download="Suraj-Rauniyar-Resume.pdf"
          className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10"
        >
          <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />

          Download Resume
        </a>
      </motion.div>
    </div>
  );
}