import { motion } from "framer-motion";
import { Server } from "lucide-react";
import {
  SiFastapi,
  SiReact,
  SiDocker,
  SiPostgresql,
  SiPython,
  SiTensorflow,
} from "react-icons/si";

const status = [
  "Backend Online",
  "AI Ready",
  "PostgreSQL Connected",
  "Docker Running",
];

const tech = [
  { name: "FastAPI", icon: SiFastapi },
  { name: "React", icon: SiReact },
  { name: "Python", icon: SiPython },
  { name: "Docker", icon: SiDocker },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PostgreSQL", icon: SiPostgresql },
];

export default function FloatingTech() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="hidden lg:block"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-2xl shadow-blue-900/20">

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-blue-400">
              Engineering Dashboard
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              System Status
            </h3>
          </div>

          <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
        </div>

        <div className="mt-8 space-y-4">
          {status.map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span>{item}</span>
              </div>

              <span className="text-sm text-green-400">
                Active
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Core Stack
          </p>

          <div className="grid grid-cols-2 gap-3">
            {tech.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10"
              >
                <Icon className="h-5 w-5 text-blue-400" />

                <span className="text-sm font-medium">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600/20 to-violet-600/20 p-5">

          <div className="flex items-center gap-3">
            <Server className="text-blue-400" />

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-blue-300">
                Featured Project
              </p>

              <h4 className="mt-1 text-xl font-bold">
                AI Developer Assistant
              </h4>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-300">
            FastAPI • React • PostgreSQL • Docker • LLM
          </p>

        </div>

      </div>
    </motion.div>
  );
}