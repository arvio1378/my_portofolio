import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg2/80 backdrop-blur-md shadow-md px-6 sm:px-10 py-4 flex justify-between items-center font-bold">
      {/* Logo */}
      <h1 className="text-2xl sm:text-3xl bg-gradient-to-r from-amber-500 to-amber-700 text-transparent bg-clip-text">
        Arvio Abe Suhendar
      </h1>

      {/* Menu Desktop */}
      <ul className="hidden md:flex gap-8 lg:gap-12 text-lg">
        <li>
          <a
            href="#about"
            className="relative group"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="relative group"
          >
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="relative group"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-bg2/95 backdrop-blur-md shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg">
            <li>
              <a
                href="#about"
                className="hover:text-amber-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-amber-600"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-amber-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
