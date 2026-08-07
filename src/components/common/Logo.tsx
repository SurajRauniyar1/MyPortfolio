import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.a
      href="#home"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="group flex items-center gap-4"
    >
      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/25 transition-all duration-300 group-hover:shadow-blue-500/50">

        <span className="text-lg font-extrabold tracking-wider text-white">
          SR
        </span>

        <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      </div>

      <div>

        <h1 className="text-lg font-bold tracking-wide text-white transition-colors group-hover:text-blue-400">
          Suraj Rauniyar
        </h1>

        <p className="text-xs tracking-[0.25em] uppercase text-gray-400">
          Backend • AI Engineer
        </p>

      </div>
    </motion.a>
  );
}