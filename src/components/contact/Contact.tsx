import { useForm, ValidationError } from "@formspree/react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FORM_ID = "meajeano";

export default function Contact() {
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return (
      <section id="contact" className="py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-12 text-center backdrop-blur-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
              <Send className="text-green-400" />
            </div>

            <h2 className="mt-6 text-3xl font-bold">
              Message Sent Successfully
            </h2>

            <p className="mt-4 text-gray-400">
              Thanks for reaching out. I&apos;ll get back to you as soon as
              possible.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-blue-400">
            Contact
          </span>

          <h2 className="mt-5 text-5xl font-black">
            Let&apos;s Build Something Great
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Have a project, opportunity, or idea? Send me a message.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <h3 className="text-3xl font-bold">
              Get in Touch
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              I&apos;m open to opportunities involving backend engineering,
              AI development, full-stack development, and interesting
              software projects.
            </p>

            <div className="mt-10 space-y-6">

              <a
                href="mailto:rauniyarsuraj667@gmail.com"
                className="flex items-center gap-4 text-gray-300 transition hover:text-blue-400"
              >
                <Mail className="text-blue-400" />
                <span>rauniyarsuraj667@gmail.com</span>
              </a>

              <a
                href="tel:+917397281804"
                className="flex items-center gap-4 text-gray-300 transition hover:text-blue-400"
              >
                <Phone className="text-blue-400" />
                <span>+91 7397281804</span>
              </a>

              <div className="flex items-center gap-4 text-gray-300">
                <MapPin className="text-blue-400" />
                <span>India</span>
              </div>

            </div>

            <div className="mt-10 flex gap-4">

              <a
                href="https://github.com/SurajRauniyar1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/suraj-rauniyar-b66967238/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="space-y-5">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-2 text-sm text-red-400"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-2 text-sm text-red-400"
                />
              </div>

              {state.errors && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={state.submitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {state.submitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
}