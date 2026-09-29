import React, { useEffect, useState, useRef } from "react";
import ProfileData from "../data/profile";

const TravellingProfileImage = () => {
  const [coords, setCoords] = useState(null);
  const rafId = useRef(null);

  useEffect(() => {
    const updatePosition = () => {
      const heroSlot = document.getElementById("hero-profile-anchor");
      const aboutSlot = document.getElementById("about-profile-anchor");

      if (!heroSlot || !aboutSlot) {
        rafId.current = requestAnimationFrame(updatePosition);
        return;
      }

      const heroRect = heroSlot.getBoundingClientRect();
      const aboutRect = aboutSlot.getBoundingClientRect();

      // Calculate progress between Hero and About
      const heroCenterPageY = heroRect.top + window.scrollY;
      const aboutCenterPageY = aboutRect.top + window.scrollY;
      const targetScroll = Math.max(1, aboutCenterPageY - heroCenterPageY - 100);

      const rawProgress = window.scrollY / targetScroll;
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      // Smoothstep easing for silky acceleration and deceleration
      const ease = progress * progress * (3 - 2 * progress);

      const isMobile = window.innerWidth < 768;
      const maxRotate = isMobile ? 3 : 6;

      // Coordinate interpolation
      let left, top, width, height, rotate;

      if (progress < 1) {
        left = heroRect.left + (aboutRect.left - heroRect.left) * ease;
        top = heroRect.top + (aboutRect.top - heroRect.top) * ease;
        width = heroRect.width + (aboutRect.width - heroRect.width) * ease;
        height = heroRect.height + (aboutRect.height - heroRect.height) * ease;
        rotate = maxRotate * (1 - ease);
      } else {
        // When progress >= 1, stick directly to aboutSlot live coordinates
        // so it scrolls naturally with the About section
        left = aboutRect.left;
        top = aboutRect.top;
        width = aboutRect.width;
        height = aboutRect.height;
        rotate = 0;
      }

      setCoords({
        left,
        top,
        width,
        height,
        rotate,
        progress,
        isMobile,
        visible: top + height > -250 && top < window.innerHeight + 250,
      });

      rafId.current = requestAnimationFrame(updatePosition);
    };

    rafId.current = requestAnimationFrame(updatePosition);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!coords || !coords.visible) {
    return null;
  }

  // Calculate badge opacity: fades in as image reaches About section
  const badgeOpacity = Math.max(0, Math.min(1, (coords.progress - 0.4) / 0.5));

  return (
    <div
      style={{
        position: "fixed",
        left: `${coords.left}px`,
        top: `${coords.top}px`,
        width: `${coords.width}px`,
        height: `${coords.height}px`,
        transform: `rotate(${coords.rotate}deg)`,
        transformOrigin: "center center",
        zIndex: 35,
        pointerEvents: "none",
        willChange: "transform, left, top, width, height",
      }}
      className="transition-transform duration-75 ease-out select-none group"
    >
      {/* Decorative Golden Glow Backdrop with dynamic pulsation */}
      <div className="absolute inset-0 bg-gradient-to-tr from-golden/30 via-golden/10 to-amber-600/30 rounded-[2.5rem] blur-xl opacity-80 pointer-events-none"></div>

      {/* Main Image Squircle Container */}
      <div className="w-full h-full rounded-[2.5rem] overflow-hidden border-2 border-golden/80 shadow-2xl shadow-golden/25 relative z-10 bg-[#181924]">
        <img
          src={ProfileData.img}
          alt={ProfileData.name}
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181924] via-transparent to-transparent opacity-60"></div>

        {/* Floating Identity Status Pill that emerges when arriving at About */}
        <div
          style={{ opacity: badgeOpacity }}
          className={`absolute bottom-3 sm:bottom-5 inset-x-3 sm:inset-x-5 p-2.5 sm:p-3.5 rounded-2xl bg-[#121318]/90 backdrop-blur-md border border-white/10 shadow-lg text-left transition-opacity duration-300 pointer-events-auto`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
            <span className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider truncate">
              {ProfileData.name}
            </span>
          </div>
          <p className="text-[10px] sm:text-[11px] text-golden font-semibold truncate">
            AI Engineer & Machine Learning Specialist
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravellingProfileImage;
