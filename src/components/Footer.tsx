import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        <div>
          <h2 className="text-xl font-bold">
            Suraj Rauniyar
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Backend Engineer • AI Engineer
          </p>
        </div>

        <div className="flex gap-5">

          <a
            href="https://github.com/SurajRauniyar1"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={22} />
          </a>

          <a href="#">
            <FaLinkedin size={22} />
          </a>

        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Suraj Rauniyar
        </p>

      </div>
    </footer>
  );
}