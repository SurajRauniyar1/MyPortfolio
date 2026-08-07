import { motion } from "framer-motion";

const stats = [
  {
    value: "3+",
    label: "Flagship Projects",
  },
  {
    value: "40+",
    label: "Technologies",
  },
  {
    value: "2",
    label: "Scholarships",
  },
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.8,
        duration: 0.7,
      }}
      className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3"
    >
      {stats.map((item) => (
        <div
          key={item.label}
          className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-blue-500/10"
        >
          <h2 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-extrabold text-transparent">
            {item.value}
          </h2>

          <p className="mt-3 text-sm font-medium text-gray-400 transition group-hover:text-gray-200">
            {item.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}