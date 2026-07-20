import React, { useState } from "react";
import { ExperienceData, EducationData } from "../data/experience";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const displayData = activeTab === "experience" 
    ? [...ExperienceData].reverse() 
    : [...EducationData].reverse();

  return (
    <section className="py-6 px-3 bg-white mt-4 md:mt-7">
      <div className="mx-auto max-w-6xl">
        <div id="experience" className="flex flex-col text-center mb-6 w-full ">
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-2">
            Experience & Education
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg mx-auto leading-relaxed font-medium text-dark-orange text-center"
          >
            My Professional Journey & Academic Background
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("experience")}
            className={`pb-2 px-4 font-bold border-b-2 transition-all duration-300 text-lg ${
              activeTab === "experience"
                ? "border-dark-orange text-dark-orange"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`pb-2 px-4 font-bold border-b-2 transition-all duration-300 text-lg ${
              activeTab === "education"
                ? "border-dark-orange text-dark-orange"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            Education
          </button>
        </div>

        {/* Timeline */}
        <div className="flex flex-col md:grid grid-cols-9 mx-auto text-blue-50">
          {displayData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const title = item.title || item.degree;
            const organization = item.company || item.institution;
            const duration = item.duration;
            const cgpaBadge = item.cgpa ? (
              <span className="ml-2 bg-dark-orange/10 text-dark-orange text-xs px-2 py-0.5 rounded font-semibold">
                {item.cgpa}
              </span>
            ) : null;

            return isLeft ? (
              <div
                key={index}
                className="flex flex-row-reverse md:contents text-start"
              >
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1200"
                  data-aos-once="false"
                  className="bg-slate-100 text-gray-700 col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-md w-full"
                >
                  <div className="flex items-center justify-between flex-wrap gap-1 mb-1">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">
                      {title}
                    </h3>
                    {cgpaBadge}
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between font-medium w-full gap-2 mb-3">
                    <h4 className="text-base text-gray-500">{organization}</h4>
                    <p className="text-sm text-dark-orange font-semibold">
                      {duration}
                    </p>
                  </div>
                  <div className="flex w-fit">
                    <ul className="pl-4 list-disc leading-relaxed text-sm md:text-[15px] font-medium text-gray-600 space-y-1">
                      {item.description?.map((desc, dIdx) => (
                        <li key={dIdx}>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-3 md:mr-10">
                  <div className="h-full w-4 flex items-center justify-center">
                    <div className="h-full w-[3px] bg-dark-orange/50"></div>
                  </div>
                  <div className="w-4 h-4 absolute top-4 rounded-full bg-dark-orange shadow">
                    <div className="h-full w-full bg-dark-orange/30 animate-pulse scale-150 rounded-full"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={index} className="flex md:contents text-start">
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-3 md:mr-10">
                  <div className="h-full w-4 flex items-center justify-center">
                    <div className="h-full w-[3px] bg-dark-orange/50"></div>
                  </div>
                  <div className="w-4 h-4 absolute top-4 rounded-full bg-dark-orange shadow">
                    <div className="h-full w-full bg-dark-orange/30 animate-pulse scale-150 rounded-full"></div>
                  </div>
                </div>
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1200"
                  data-aos-once="false"
                  className="bg-slate-100 text-gray-700 col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-md w-full"
                >
                  <div className="flex items-center justify-between flex-wrap gap-1 mb-1">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">
                      {title}
                    </h3>
                    {cgpaBadge}
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between font-medium w-full gap-2 mb-3">
                    <h4 className="text-base text-gray-500">{organization}</h4>
                    <p className="text-sm text-dark-orange font-semibold">
                      {duration}
                    </p>
                  </div>
                  <div className="flex w-fit">
                    <ul className="pl-4 list-disc leading-relaxed text-sm md:text-[15px] font-medium text-gray-600 space-y-1">
                      {item.description?.map((desc, dIdx) => (
                        <li key={dIdx}>
                          {desc}
                        </li>
                      ))}
                    </ul>
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

export default Experience;
