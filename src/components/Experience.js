import React, { useState } from "react";
import { ExperienceData, EducationData } from "../data/experience";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const displayData =
    activeTab === "experience"
      ? [...ExperienceData].reverse()
      : [...EducationData].reverse();

  return (
    <section id="experience" className="py-20 bg-[#121318] text-slate-100 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-golden text-xs md:text-sm font-bold tracking-widest uppercase mb-2 bg-golden/10 px-3.5 py-1 rounded-full border border-golden/20"
          >
            Career Trajectory
          </span>
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1100"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Experience & <span className="text-golden">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-golden to-amber-500 rounded-full mt-3"></div>
        </div>

        {/* Tab Selection */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex justify-center gap-3 mb-16"
        >
          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
              activeTab === "experience"
                ? "bg-golden text-slate-950 shadow-lg shadow-golden/20 scale-105"
                : "bg-white/5 border border-white/10 text-slate-300 hover:border-golden/40 hover:text-white"
            }`}
          >
            <FaBriefcase className="text-sm" />
            <span>Work Experience</span>
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
              activeTab === "education"
                ? "bg-golden text-slate-950 shadow-lg shadow-golden/20 scale-105"
                : "bg-white/5 border border-white/10 text-slate-300 hover:border-golden/40 hover:text-white"
            }`}
          >
            <FaGraduationCap className="text-base" />
            <span>Education</span>
          </button>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Center Glowing Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-golden via-golden/40 to-transparent"></div>

          {/* Left Glowing Vertical Line for Mobile */}
          <div className="md:hidden absolute left-4 sm:left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-golden via-golden/40 to-golden/10"></div>

          <div className="flex flex-col gap-8 sm:gap-10">
            {displayData.map((item, index) => {
              const isEven = index % 2 === 0;
              const title = item.title || item.degree;
              const organization = item.company || item.institution;
              const duration = item.duration;

              return (
                <div
                  key={index}
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                  className={`relative flex flex-col md:flex-row items-center w-full pl-9 sm:pl-14 md:pl-0 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Mobile Milestone Node Point */}
                  <div className="md:hidden absolute left-4 sm:left-6 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-[#121318] border-2 border-golden flex items-center justify-center shadow-lg shadow-golden/40 z-10">
                    <div className="w-2 h-2 rounded-full bg-golden animate-ping opacity-75"></div>
                    <div className="absolute w-2 h-2 rounded-full bg-golden"></div>
                  </div>

                  {/* Content Card - Strictly text-left */}
                  <div className="w-full md:w-[46%] text-left">
                    <div className="p-4 sm:p-7 rounded-xl sm:rounded-2xl bg-[#181922]/90 border border-white/10 hover:border-golden/50 transition-all duration-300 shadow-xl shadow-black/30 hover:-translate-y-1 group text-left">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-3">
                        <span className="text-[10px] sm:text-xs font-bold text-golden bg-golden/10 border border-golden/20 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                          {duration}
                        </span>
                        {item.cgpa && (
                          <span className="text-[10px] sm:text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 sm:px-2.5 py-0.5 rounded-full">
                            {item.cgpa}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-golden transition-colors leading-tight mb-1 text-left">
                        {title}
                      </h3>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-400 mb-3 sm:mb-4 text-left">
                        {organization}
                      </h4>

                      {/* Custom Aligned Bullet Points */}
                      <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed text-left">
                        {item.description?.map((desc, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 sm:gap-2.5 text-left">
                            <span className="w-1.5 h-1.5 rounded-full bg-golden mt-1.5 sm:mt-2 flex-shrink-0"></span>
                            <span className="leading-relaxed text-left flex-grow">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Desktop Center Node Indicator */}
                  <div className="hidden md:flex w-[8%] justify-center items-center my-4 md:my-0">
                    <div className="w-6 h-6 rounded-full bg-[#121318] border-2 border-golden flex items-center justify-center shadow-lg shadow-golden/40 z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-golden animate-pulse"></div>
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block w-full md:w-[46%]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
