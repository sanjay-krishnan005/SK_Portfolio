import React from "react";
import CertificationsData from "../data/certifications";
import { TbCertificate } from "react-icons/tb";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-[#121318] text-slate-100 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-golden text-xs md:text-sm font-bold tracking-widest uppercase mb-2 bg-golden/10 px-3.5 py-1 rounded-full border border-golden/20"
          >
            Verified Credentials
          </span>
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1100"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Certifications & <span className="text-golden">Licensing</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-golden to-amber-500 rounded-full mt-3"></div>
        </div>

        {/* Credentials Grid - Compact Minimalist on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
          {CertificationsData.map((cert, index) => {
            return (
              <div
                key={index}
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className="p-3.5 sm:p-7 rounded-xl sm:rounded-2xl bg-[#181922]/90 border border-white/10 hover:border-golden/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-lg shadow-black/20 text-left"
              >
                <div className="flex items-start gap-3 sm:gap-4 text-left">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-golden/10 border border-golden/30 flex items-center justify-center text-golden text-base sm:text-2xl flex-shrink-0 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-golden/20 transition-all mt-0.5">
                    <TbCertificate />
                  </div>
                  <div className="text-left flex-grow">
                    <h3 className="font-bold text-sm sm:text-lg md:text-xl text-white group-hover:text-golden transition-colors leading-tight text-left">
                      {cert.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-0.5 sm:mt-1 text-left">
                      {cert.issuer}
                    </p>
                    <span className="inline-block text-[10px] sm:text-[11px] text-golden mt-1 sm:mt-1.5 font-mono tracking-wider bg-golden/10 border border-golden/20 px-2 py-0.5 rounded">
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-6 pt-2.5 sm:pt-4 border-t border-white/5 text-left justify-start">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="bg-white/5 border border-white/10 text-slate-300 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-full text-left"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
