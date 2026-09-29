import React, { useState } from "react";
import AchievementsData from "../data/achievements";
import { FaAward, FaBookOpen, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <section id="achievements" className="py-20 bg-[#121318] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-golden text-xs md:text-sm font-bold tracking-widest uppercase mb-2 bg-golden/10 px-3.5 py-1 rounded-full border border-golden/20"
          >
            Honors & Publications
          </span>
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1100"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Achievements & <span className="text-golden">Research</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-golden to-amber-500 rounded-full mt-3"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AchievementsData.map((item) => {
            const isPub = item.type.toLowerCase().includes("publication");
            return (
              <div
                key={item.id}
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                onClick={() => setSelectedAchievement(item)}
                className="p-6 rounded-2xl bg-[#181922]/90 border border-white/10 hover:border-golden/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer group shadow-xl shadow-black/30 hover:shadow-golden/10"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-golden/15 border border-golden/30 text-golden text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-white group-hover:text-golden transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-golden mt-6 pt-4 border-t border-white/5 group-hover:translate-x-1 transition-transform">
                  {isPub ? <FaBookOpen className="text-sm" /> : <FaAward className="text-sm" />}
                  <span>Inspect Credentials &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedAchievement && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setSelectedAchievement(null)}
        >
          <div
            className="bg-[#181922] border-2 border-golden/50 text-white rounded-2xl max-w-xl w-full p-7 relative shadow-2xl shadow-golden/20 animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAchievement(null)}
              aria-label="Close dialog"
              className="absolute top-5 right-5 text-slate-400 hover:text-white text-2xl p-1.5 rounded-full hover:bg-white/10 transition-colors"
            >
              <FaTimes />
            </button>

            <span className="bg-golden/20 text-golden border border-golden/30 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
              {selectedAchievement.type}
            </span>

            <h3 className="text-2xl font-black text-white leading-tight mb-2">
              {selectedAchievement.title}
            </h3>

            <p className="text-xs font-mono text-golden mb-4">
              Issued / Published: {selectedAchievement.badge}
            </p>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedAchievement.summary}
            </p>

            {selectedAchievement.details && (
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 text-xs text-slate-300 space-y-2">
                {selectedAchievement.details.map((detail, idx) => (
                  <p key={idx} className="leading-relaxed">
                    • {detail}
                  </p>
                ))}
              </div>
            )}

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedAchievement(null)}
                className="px-5 py-2 rounded-full text-xs font-bold text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                Close
              </button>
              {selectedAchievement.link && selectedAchievement.link !== "#" && (
                <a
                  href={selectedAchievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-slate-950 bg-golden hover:bg-golden-light shadow-md shadow-golden/20 transition-all"
                >
                  <span>Verify Online</span>
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
