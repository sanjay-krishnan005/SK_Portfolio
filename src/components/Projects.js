import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";
import ProjectsData from "../data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = [
    "All",
    "AI & IoT",
    "AI & Automation",
    "AI & Data Science",
    "AI & ML",
    "Full-Stack",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? ProjectsData
      : ProjectsData.filter((project) => project.category === activeCategory);

  // When "All" is selected and showAll is false, show top 6 prioritized projects
  const displayedProjects =
    activeCategory === "All" && !showAll
      ? filteredProjects.slice(0, 6)
      : filteredProjects;

  return (
    <section id="projects" className="py-14 sm:py-20 lg:py-24 bg-[#121318] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <span
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-golden text-xs md:text-sm font-bold tracking-widest uppercase mb-2 bg-golden/10 px-3.5 py-1 rounded-full border border-golden/20"
          >
            Engineering Portfolio
          </span>
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1100"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Featured <span className="text-golden">Innovations</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-golden to-amber-500 rounded-full mt-3"></div>
        </div>

        {/* Category Tabs */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-golden text-slate-950 shadow-lg shadow-golden/20 scale-105"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:border-golden/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Showcase: Horizontal swipe snap on mobile, 3-column grid on desktop */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 pt-2 snap-x snap-mandatory no-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              data-aos="zoom-in-up"
              data-aos-duration="900"
              className="w-[280px] sm:w-[320px] md:w-auto flex-shrink-0 snap-center rounded-2xl overflow-hidden bg-[#181922]/90 border border-white/10 hover:border-golden/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl shadow-black/40 hover:shadow-golden/10"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image.startsWith("http") ? project.image : `${process.env.PUBLIC_URL}${project.image}`}
                    alt={project.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `${process.env.PUBLIC_URL}/projects/waste_monitoring.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181922] via-[#181922]/40 to-transparent"></div>
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 text-[10px] font-bold text-slate-950 bg-golden/90 px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 pt-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-golden transition-colors leading-snug mb-2.5">
                    {project.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Icons */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {project?.icons?.map((Icon, idx) => (
                      <div
                        key={idx}
                        className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 text-sm"
                        title={Icon.name}
                      >
                        <Icon />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="p-6 pt-0 border-t border-white/5 mt-auto flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-golden transition-colors"
                >
                  <FaGithub className="text-base" />
                  <span>Source Code</span>
                </a>

                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 bg-golden hover:bg-golden-light px-3 py-1.5 rounded-full transition-all shadow-md shadow-golden/20"
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-3 text-xs text-slate-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-golden animate-pulse"></span>
          <span>Swipe cards to explore projects &rarr;</span>
        </div>

        {/* Show More / Show Less Toggle Button (Only when "All" is active and there are > 6 projects) */}
        {activeCategory === "All" && filteredProjects.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 font-bold text-slate-900 bg-golden hover:bg-golden-light py-3 px-8 rounded-full text-sm transition-all duration-300 shadow-lg shadow-golden/20 hover:scale-105"
            >
              <span>{showAll ? "Show Less" : `View All ${filteredProjects.length} Projects`}</span>
              {showAll ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
