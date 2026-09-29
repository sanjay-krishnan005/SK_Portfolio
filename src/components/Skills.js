import React from "react";
import SkillsData from "../data/skills";
import { FaBrain, FaServer, FaCloud, FaMicrochip } from "react-icons/fa";

const Skills = () => {
  const domains = [
    {
      title: "Core AI, Deep Learning & Computer Vision",
      tagline: "Neural network architectures, computer vision pipelines & model training",
      badge: "Core Specialty",
      icon: FaBrain,
      filterKeys: ["AI & ML"],
    },
    {
      title: "Full-Stack AI Integration & High-Speed APIs",
      tagline: "Scalable REST APIs, reactive frontends & responsive user interfaces",
      badge: "Production Ready",
      icon: FaServer,
      filterKeys: ["Programming", "Development"],
    },
    {
      title: "Cloud Infrastructure & Database Architecture",
      tagline: "Cloud computing, persistent storage & distributed data pipelines",
      badge: "Cloud Native",
      icon: FaCloud,
      filterKeys: ["Cloud & DB"],
    },
    {
      title: "Edge AI, IoT Telemetry & Developer Tooling",
      tagline: "Embedded microcomputers, hardware sensor integration & MLOps tools",
      badge: "Edge Deployments",
      icon: FaMicrochip,
      filterKeys: ["IoT & Edge", "Tools"],
    },
  ];

  const track1Skills = SkillsData.slice(0, 14);
  const track2Skills = SkillsData.slice(14);

  return (
    <section id="skills" className="py-14 sm:py-20 lg:py-24 bg-[#121318] text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <span
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-golden text-xs md:text-sm font-bold tracking-widest uppercase mb-2 bg-golden/10 px-3.5 py-1 rounded-full border border-golden/20"
          >
            Technical Ecosystem
          </span>
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1100"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Skills & <span className="text-golden">Architecture</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-golden to-amber-500 rounded-full mt-3"></div>
        </div>

        {/* Automatic Skills Logo Horizontal Mover */}
        <div className="mb-10 sm:mb-14 relative overflow-hidden py-3 bg-[#181922]/50 border-y border-white/5 rounded-2xl shadow-inner">
          {/* Gradient Edge Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#121318] to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#121318] to-transparent z-10"></div>

          {/* Track 1: Gliding Left */}
          <div className="flex gap-3 sm:gap-4 whitespace-nowrap animate-marquee py-1.5">
            {[...track1Skills, ...track1Skills].map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={`t1-${idx}`}
                  className="flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-golden/40 transition-all shrink-0 group/logo shadow-sm cursor-default hover:bg-golden/10"
                >
                  {Icon && (
                    <Icon
                      style={{ color: skill.color }}
                      className="text-lg sm:text-xl transition-transform duration-300 group-hover/logo:scale-125"
                    />
                  )}
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover/logo:text-white">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Track 2: Gliding Right (Reverse) */}
          <div className="flex gap-3 sm:gap-4 whitespace-nowrap animate-marquee-reverse py-1.5">
            {[...track2Skills, ...track2Skills].map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={`t2-${idx}`}
                  className="flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-golden/40 transition-all shrink-0 group/logo shadow-sm cursor-default hover:bg-golden/10"
                >
                  {Icon && (
                    <Icon
                      style={{ color: skill.color }}
                      className="text-lg sm:text-xl transition-transform duration-300 group-hover/logo:scale-125"
                    />
                  )}
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover/logo:text-white">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* DOMAIN ARCHITECTURE BENTO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {domains.map((domain, dIdx) => {
            const Icon = domain.icon;
            const domainSkills = SkillsData.filter((skill) =>
              domain.filterKeys.includes(skill.category)
            );

            return (
              <div
                key={dIdx}
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className="p-5 sm:p-7 rounded-2xl bg-[#181922]/90 border border-white/10 hover:border-golden/50 transition-all duration-300 shadow-xl shadow-black/40 hover:-translate-y-1.5 group flex flex-col justify-between text-left"
              >
                <div className="text-left">
                  {/* Domain Header */}
                  <div className="flex items-center justify-between gap-2 mb-3 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-golden/10 border border-golden/30 flex items-center justify-center text-golden text-lg group-hover:scale-110 transition-transform">
                        <Icon />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-golden bg-golden/10 border border-golden/20 px-2.5 py-0.5 rounded-full">
                        {domain.badge}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {domainSkills.length} Technologies
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-golden transition-colors leading-snug mb-1 text-left">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 text-left">
                    {domain.tagline}
                  </p>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-2.5 text-left justify-start">
                    {domainSkills.map((skill, sIdx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={sIdx}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-golden/40 hover:bg-golden/10 transition-all duration-200 cursor-pointer group/item"
                        >
                          {SkillIcon && (
                            <SkillIcon
                              style={{ color: skill.color }}
                              className="text-base group-hover/item:scale-110 transition-transform"
                            />
                          )}
                          <span className="text-xs font-semibold text-slate-200 group-hover/item:text-white">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
