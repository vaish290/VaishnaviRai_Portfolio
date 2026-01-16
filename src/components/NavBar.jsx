import React, { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-cyan-300">
        
        {/* Logo */}
        <div className="text-lg font-bold">
          Vaishnavi Rai
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-cyan-300 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col gap-4 px-6 py-6 bg-black/60 text-cyan-300 text-sm font-semibold">
          <a href="#home" onClick={() => setOpen(false)} className="hover:text-white">Home</a>
          <a href="#projects" onClick={() => setOpen(false)} className="hover:text-white">Projects</a>
          <a href="#experience" onClick={() => setOpen(false)} className="hover:text-white">Experience</a>
          <a href="#about" onClick={() => setOpen(false)} className="hover:text-white">About</a>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
