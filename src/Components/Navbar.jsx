import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About Me", url: "about" },
    { name: "Skills", url: "skills" },
    { name: "Work Experience", url: "experiance" },
    { name: "Projects", url: "projects" },
    { name: "Contact Me", url: "contact" },
  ];

  const handleScroll = (id) => {
    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false); // close mobile menu after click
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-lg px-6 py-4 transition-all duration-300">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleScroll("home")}
          className="text-black text-xl font-bold"
        >
          SAN
          <span className="bg-black text-white px-1 rounded shadow">KET</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {navLinks.map(({ name, url }) => (
            <button
              key={url}
              onClick={() => handleScroll(url)}
              className="text-gray-800 hover:text-purple-600 transition duration-200 ease-in-out"
            >
              {name}
            </button>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="transition transform duration-300 hover:scale-110"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 mt-4">
          {navLinks.map(({ name, url }) => (
            <button
              key={url}
              onClick={() => handleScroll(url)}
              className="text-left text-gray-800 hover:text-purple-600 px-2 py-1 transition duration-200 ease-in-out"
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
