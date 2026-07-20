import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectsData from "../data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI & ML", "Full-Stack", "IoT & Automation"];

  const filteredProjects = activeCategory === "All"
    ? ProjectsData
    : ProjectsData.filter(project => project.category === activeCategory);

  return (
    <section className="text-gray-600 body-font">
      <div className="px-3 py-5 mx-auto text-center sm:mx-6 md:mx-12 md:pt-5 md:mt-5 xl:mx-40">
        <div
          id="projects"
          className="flex flex-wrap w-full flex-col items-center text-center"
        >
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-gray-900">
            Projects
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange"
          >
            My Works & Innovations
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-6 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-dark-orange text-white shadow-md transform scale-105"
                  : "bg-slate-100 text-gray-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-4 md:gap-x-6 lg:gap-x-4 lg:gap-y-6 xl:gap-y-10 xl:gap-x-6 mt-4">
          {filteredProjects.map((project) => (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="false"
              key={project.id}
              className="group relative flex flex-col flex-wrap h-80 w-[95%] mx-auto shadow-md md:shadow-lg rounded-xl overflow-hidden bg-gradient-to-br from-darkblue to-slate-900"
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-80 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-40"
                onError={(e) => {
                  e.target.style.display = 'none'; // Falls back to gradient if image fails
                }}
              />
              {/* Default Title Card Overlay (fades out on hover) */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-darkblue/95 via-darkblue/60 to-transparent p-5 text-left transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                <span className="text-xs font-bold text-dark-orange tracking-widest uppercase">
                  {project.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight mt-1">
                  {project.name}
                </h3>
              </div>

              {/* Overlay with details */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-5 bg-darkblue/95 md:bg-darkblue/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                <span className="text-xs font-semibold text-dark-orange tracking-widest uppercase mb-1">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {project.name}
                </h3>
                <p className="px-2 text-sm text-gray-200 leading-relaxed max-w-xs mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                  {project?.icons?.map((Icon, index) => (
                    <div className="rounded-full bg-white/10 p-1.5 text-white text-2xl" key={index} title={Icon.name}>
                      <Icon />
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 justify-center items-center text-xl mt-2">
                  <a
                    className="text-darkblue text-lg bg-white hover:bg-dark-orange hover:text-white transition-colors duration-300 rounded-full p-2.5"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View GitHub Repository"
                  >
                    <FaGithub />
                  </a>
                  {project.demo && project.demo !== "#" && (
                    <a
                      className="text-darkblue text-lg bg-white hover:bg-dark-orange hover:text-white transition-colors duration-300 rounded-full p-2.5"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Live Demo"
                    >
                      <FaExternalLinkAlt className="p-[1px]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
