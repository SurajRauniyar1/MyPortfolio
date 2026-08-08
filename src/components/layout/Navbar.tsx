import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Container from "../common/Container";
import Logo from "../common/Logo";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

const links = [
  "Home",
  "About",
  "Projects",
  "Experience",
  "Skills",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/50 backdrop-blur-2xl shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Logo />

            <nav className="hidden items-center gap-10 lg:flex">
              {links.map((item) => (
                <NavLink key={item} title={item} />
              ))}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <a
                href="https://github.com/SurajRauniyar1"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/suraj-rauniyar-b66967238/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10"
              >
                <FaLinkedin size={18} />
              </a>
            </div>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-white transition hover:border-blue-500 lg:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}