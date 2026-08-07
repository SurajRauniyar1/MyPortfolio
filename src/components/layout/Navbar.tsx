import { useEffect, useState } from "react";
import { Github, Linkedin, Menu } from "lucide-react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import NavLink from "./NavLink";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
              className="rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10"
            >
              <Github size={18} />
            </a>

            <a
              href="#"
              className="rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10"
            >
              <Linkedin size={18} />
            </a>

          </div>

          <button
            className="rounded-xl border border-white/10 bg-white/5 p-3 lg:hidden"
          >
            <Menu size={20} />
          </button>

        </div>
      </Container>
    </header>
  );
}