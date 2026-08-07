import { motion } from "framer-motion";
import Aurora from "./Aurora";
import HeroContent from "./HeroContent";
import FloatingTech from "./FloatingTech";
import HeroStats from "./HeroStats";
import Container from "../common/Container";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <Aurora />

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <HeroContent />
            <HeroStats />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <FloatingTech />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs uppercase tracking-[0.3em]">
            Scroll
          </span>

          <div className="flex h-10 w-6 justify-center rounded-full border border-white/20">
            <div className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}