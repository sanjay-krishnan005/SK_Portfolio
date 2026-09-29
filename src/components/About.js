import React from "react";
import { Link } from "react-scroll";
import AboutData from "../data/about";
import { FaArrowRight } from "react-icons/fa";

const About = () => {

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-[#121318] text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <span
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-golden text-xs md:text-sm font-bold tracking-widest uppercase mb-2 bg-golden/10 px-3.5 py-1 rounded-full border border-golden/20"
          >
            Core Philosophy & Expertise
          </span>
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1100"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            About <span className="text-golden">My Work</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-golden to-amber-500 rounded-full mt-3"></div>
        </div>

        {/* Two-Column Layout: Left Profile Image, Right Minimal Info & Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left: Profile Image Destination Slot (Docking zone for TravellingProfileImage) */}
          <div
            className="lg:col-span-5 flex justify-center w-full mb-6 lg:mb-0"
          >
            <div
              id="about-profile-anchor"
              className="relative w-44 h-52 sm:w-60 sm:h-72 md:w-80 md:h-[400px] lg:w-full lg:max-w-sm lg:h-[440px] rounded-3xl lg:rounded-[2.5rem] group mx-auto"
            >
              {/* Outer Golden Glow backdrop placeholder */}
              <div className="absolute inset-0 bg-gradient-to-tr from-golden/20 via-golden/5 to-amber-600/20 rounded-[2.5rem] blur-2xl opacity-60"></div>

              {/* Invisible sizing anchor */}
              <div className="relative rounded-[2.5rem] overflow-hidden bg-[#181924] border-2 border-golden/40 shadow-2xl shadow-black/60 h-full w-full invisible">
                <div className="h-full w-full bg-slate-900"></div>
              </div>
            </div>
          </div>

          {/* Right: Only About Me Details Text & The Two Buttons */}
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="lg:col-span-7 flex flex-col justify-center text-left py-4"
          >
            <div className="text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-golden mb-2 bg-golden/10 px-3.5 py-1 rounded-full border border-golden/20 inline-block">
                {AboutData.heading || "About Me"}
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mt-3 mb-4">
                {AboutData.tagline}
              </h3>

              <div className="space-y-4 mb-8 text-left">
                {AboutData.paragraphs?.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal text-left"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* The Two Buttons */}
              <div className="flex flex-wrap items-center gap-4 text-left pt-2">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={750}
                  className="cursor-pointer inline-flex items-center gap-2 font-bold text-slate-950 bg-golden hover:bg-golden-light py-3 px-8 rounded-full text-sm transition-all duration-300 shadow-lg shadow-golden/20 hover:scale-105"
                >
                  <span>Start a Collaboration</span>
                  <FaArrowRight className="text-xs" />
                </Link>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={750}
                  className="cursor-pointer inline-flex items-center gap-2 font-semibold text-slate-300 hover:text-golden border border-white/10 hover:border-golden/40 bg-white/5 py-3 px-7 rounded-full text-sm transition-all hover:scale-105"
                >
                  <span>View Projects &darr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
