import React from "react";
import ContactData from "../data/contact";

const SocialHandles = () => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      data-aos-once="false"
      className="flex flex-wrap gap-3 my-3 justify-center"
    >
      {ContactData?.links?.map((link, index) => (
        <a
          key={index}
          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-golden hover:border-golden/50 hover:bg-golden/10 flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 shadow-sm"
          href={link.url}
          target="_blank"
          rel="noreferrer"
          aria-label="Social Link"
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
};

export default SocialHandles;
