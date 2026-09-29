import React from "react";
import ProfileData from "../data/profile";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e0f13] border-t border-white/5 py-8 text-center text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-slate-200 font-bold text-base">{ProfileData.name}</span>
          <span className="text-golden font-semibold">| AI Engineer</span>
        </div>

        <p className="text-xs text-slate-400">
          Designed & Built with <span className="text-golden font-bold">Precision & Intelligence</span> &bull; &copy; {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;