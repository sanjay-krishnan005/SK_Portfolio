import React from "react";

const Wave = () => {
  return (
    <div className="w-full overflow-hidden leading-none relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        className="w-full h-16 sm:h-20 md:h-24 lg:h-28"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
          <linearGradient id="gold-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="gold-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E5C258" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#B89628" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <g className="waves">
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="0"
            fill="url(#gold-gradient-1)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="3"
            fill="url(#gold-gradient-2)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="6"
            fill="#121318"
            fillOpacity="0.95"
          />
        </g>
      </svg>
    </div>
  );
};

export default Wave;