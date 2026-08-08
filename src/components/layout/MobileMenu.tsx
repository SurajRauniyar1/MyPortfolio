import { X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  "Home",
  "About",
  "Projects",
  "Experience",
  "Skills",
  "Achievements",
  "Contact",
];

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close mobile menu"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Mobile Menu */}
      <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto border-l border-white/10 bg-[#030712] p-6 shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-white">
              Suraj Rauniyar
            </p>

            <p className="mt-1 text-xs uppercase tracking-widest text-gray-500">
              Backend • AI Engineer
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-blue-500 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-12 flex flex-col gap-2">
          {links.map((link) => {
            const sectionId = link
              .toLowerCase()
              .replace(/\s+/g, "-");

            return (
              <a
                key={link}
                href={`#${sectionId}`}
                onClick={onClose}
                className="rounded-xl px-4 py-4 text-lg font-medium text-gray-300 transition-all duration-300 hover:bg-blue-500/10 hover:pl-6 hover:text-white"
              >
                {link}
              </a>
            );
          })}
        </nav>

        {/* Social Links */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gray-500">
            Connect
          </p>

          <div className="flex gap-3">
            <a
              href="https://github.com/SurajRauniyar1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              aria-label="GitHub"
              className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-blue-500 hover:bg-blue-500/10"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/suraj-rauniyar-b66967238/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              aria-label="LinkedIn"
              className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-blue-500 hover:bg-blue-500/10"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}