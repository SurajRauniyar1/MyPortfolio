import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <span className="text-sm uppercase tracking-[0.35em] text-blue-400">
            Contact
          </span>

          <h2 className="mt-5 text-5xl font-black">
            Let's Build Something Great
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            I'm always interested in backend engineering,
            AI development, internships and full-time opportunities.
          </p>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-2"
        >

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <h3 className="text-3xl font-bold">
              Get in Touch
            </h3>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" />
                <span>your.email@example.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-blue-400" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400" />
                <span>Meghalaya, India</span>
              </div>

            </div>

            <div className="mt-10 flex gap-4">

              <a
                href="https://github.com/SurajRauniyar1"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 p-4 transition hover:border-blue-500"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/10 p-4 transition hover:border-blue-500"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </div>

          <form className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <input
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-black/20 p-4 outline-none focus:border-blue-500"
            />

            <input
              placeholder="Your Email"
              className="w-full rounded-xl border border-white/10 bg-black/20 p-4 outline-none focus:border-blue-500"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-xl border border-white/10 bg-black/20 p-4 outline-none focus:border-blue-500"
            />

            <button
              className="w-full rounded-xl bg-blue-600 py-4 font-semibold transition hover:bg-blue-500"
            >
              Send Message
            </button>

          </form>

        </motion.div>

      </div>
    </section>
  );
}