import React, { useState } from "react";
import AchievementsData from "../data/achievements";
import { FaAward, FaBookOpen, FaTimes } from "react-icons/fa";

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <section className="text-gray-600 body-font py-8 bg-white">
      <div className="p-4 mx-auto md:p-5 md:mx-20 lg:mx-32 xl:mx-56">
        <div
          id="achievements"
          className="flex flex-wrap w-full mb-4 flex-col justify-center text-center md:mb-7"
        >
          <h1 className="sm:text-4xl text-3xl font-medium mb-2 text-gray-900">
            Achievements & Publications
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange "
          >
            My Recognitions & Research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 md:mt-8">
          {AchievementsData.map((item, index) => {
            const isPub = item.type.toLowerCase().includes("publication");
            return (
              <div
                key={item.id}
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-once="false"
                onClick={() => setSelectedAchievement(item)}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-dark-orange/10 text-dark-orange text-xs font-semibold px-2.5 py-1 rounded-full">
                      {item.type}
                    </span>
                    <span className="text-gray-400 text-xs font-medium bg-gray-200/50 px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-dark-orange mt-5 hover:underline">
                  {isPub ? <FaBookOpen /> : <FaAward />}
                  <span>View Details</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedAchievement && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div
            className="bg-white rounded-2xl max-w-xl w-full p-6 relative shadow-2xl border-t-8 border-dark-orange animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FaTimes />
            </button>

            <div className="mb-4">
              <span className="bg-dark-orange/10 text-dark-orange text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {selectedAchievement.type}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-2.5 leading-snug">
                {selectedAchievement.title}
              </h2>
              <p className="text-sm font-semibold text-gray-500 mt-1">
                {selectedAchievement.organization} &bull; {selectedAchievement.badge}
              </p>
            </div>

            <hr className="border-gray-200 my-4" />

            <div className="space-y-3">
              <h4 className="font-bold text-gray-800 text-md">Key Highlights:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base">
                {selectedAchievement.details.map((detail, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setSelectedAchievement(null)}
                className="bg-black text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
