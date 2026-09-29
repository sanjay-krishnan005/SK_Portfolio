import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Navlinks from "../data/navlinks";
import ProfileData from "../data/profile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#121318]/85 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto py-3 px-5 sm:px-8 flex flex-row justify-between items-center">
        {/* Brand Name (Only Name, SK removed) */}
        <Link
          spy={true}
          smooth={true}
          offset={-100}
          duration={750}
          to="home"
          className="flex flex-col text-left cursor-pointer group"
        >
          <span className="text-lg md:text-xl font-extrabold tracking-tight text-white group-hover:text-golden transition-colors">
            {ProfileData.name}
          </span>
          <span className="text-[11px] text-golden uppercase tracking-widest font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            AI Engineer
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {Navlinks.map((item) => {
            return (
              <Link
                key={item.title}
                spy={true}
                smooth={true}
                offset={-80}
                duration={750}
                to={item.link}
                activeClass="text-golden font-semibold"
                className="cursor-pointer text-slate-300 hover:text-golden transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-golden hover:after:w-full after:transition-all after:duration-300"
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`${process.env.PUBLIC_URL}${ProfileData.resume}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center font-bold text-slate-950 bg-golden hover:bg-golden-light transition-all duration-300 shadow-md shadow-golden/20 hover:shadow-golden/40 hover:scale-105 py-2.5 px-6 rounded-full text-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-golden transition-colors"
          >
            {isMenuOpen ? (
              <MdClose className="h-6 w-6" />
            ) : (
              <BiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="min-h-screen fixed inset-x-0 top-[60px] z-50 bg-[#121318]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 lg:hidden animate-fade-in">
            <nav className="flex flex-col gap-5 text-lg font-medium text-left">
              {Navlinks.map((item) => {
                return (
                  <Link
                    key={item.title}
                    onClick={() => setIsMenuOpen(false)}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={750}
                    to={item.link}
                    className="cursor-pointer text-slate-300 hover:text-golden transition-colors py-2 border-b border-white/5"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>
            <a
              href={`${process.env.PUBLIC_URL}${ProfileData.resume}`}
              target="_blank"
              rel="noreferrer"
              className="text-slate-950 bg-golden hover:bg-golden-light font-bold py-3 px-8 rounded-full text-base text-center shadow-lg shadow-golden/30 mt-4"
            >
              Download Resume
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
