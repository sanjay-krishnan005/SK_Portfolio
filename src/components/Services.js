import React, { useState } from "react";
import { Link } from "react-scroll";
import ServicesData from "../data/services";
import { FaArrowRight, FaTimes, FaCheckCircle } from "react-icons/fa";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-14 sm:py-20 lg:py-24 bg-[#121318] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Clean, Simple Header matching user's reference */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3"
          >
            Services
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-slate-400 text-base sm:text-lg font-medium"
          >
            Services that I offer as a freelancer
          </p>
        </div>

        {/* On mobile: Horizontal thumb-swipe snap carousel; on desktop (lg+): 4-column grid */}
        <div className="flex lg:grid lg:grid-cols-4 gap-5 overflow-x-auto lg:overflow-visible pb-4 pt-2 snap-x snap-mandatory no-scrollbar -mx-5 px-5 lg:mx-0 lg:px-0 items-stretch">
          {ServicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                data-aos="zoom-in-up"
                data-aos-duration="900"
                data-aos-delay={index * 100}
                onClick={() => setSelectedService(service)}
                className="w-[270px] sm:w-[300px] lg:w-auto flex-shrink-0 snap-center h-[330px] sm:h-[370px] lg:h-[400px] rounded-2xl bg-[#181926]/90 border border-white/5 hover:border-golden/50 transition-all duration-300 hover:-translate-y-2 p-6 sm:p-8 flex flex-col justify-between items-center text-center group shadow-xl shadow-black/40 hover:shadow-golden/10 cursor-pointer relative overflow-hidden"
              >
                {/* Subtle Hover Glow Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-golden/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                {/* Top Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/10 group-hover:border-golden/40 group-hover:bg-golden/10 flex items-center justify-center text-golden text-2xl sm:text-3xl group-hover:scale-110 transition-all duration-300 mt-4 sm:mt-6 relative z-10">
                  <Icon />
                </div>

                {/* Center Title */}
                <div className="my-auto px-2 relative z-10">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-golden transition-colors leading-snug">
                    {service.title}
                  </h3>
                  {service.specialty && (
                    <span className="inline-block mt-2 text-xs font-semibold text-slate-400 group-hover:text-slate-300 transition-colors">
                      {service.specialty}
                    </span>
                  )}
                </div>

                {/* Bottom View More Link */}
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-golden hover:text-golden-light font-semibold text-sm group-hover:gap-3 transition-all mb-2 sm:mb-4 relative z-10"
                >
                  <span>View More</span>
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex lg:hidden items-center justify-center gap-2 mt-3 text-xs text-slate-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-golden animate-pulse"></span>
          <span>Swipe cards to explore all services &rarr;</span>
        </div>
      </div>

      {/* Lightweight Detail Modal when user clicks "View More" */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-[#181924] border border-golden/40 text-white rounded-2xl max-w-lg w-full p-8 relative shadow-2xl shadow-golden/20 animate-zoom-in text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              aria-label="Close dialog"
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl p-1.5 rounded-full hover:bg-white/10 transition-colors"
            >
              <FaTimes />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-golden/10 border border-golden/30 text-golden text-2xl flex items-center justify-center flex-shrink-0">
                {React.createElement(selectedService.icon)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedService.title}
                </h3>
                <span className="text-xs font-semibold text-golden uppercase tracking-wider">
                  {selectedService.specialty}
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedService.description}
            </p>

            {selectedService.deliverables && (
              <div className="mb-6 bg-white/5 rounded-xl p-4 border border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-golden mb-3">
                  Key Deliverables
                </h4>
                <div className="space-y-2">
                  {selectedService.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <FaCheckCircle className="text-golden flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={750}
              onClick={() => setSelectedService(null)}
              className="cursor-pointer inline-flex items-center justify-center font-bold text-slate-950 bg-golden hover:bg-golden-light py-3 px-8 rounded-full text-sm transition-all shadow-lg shadow-golden/20 hover:scale-[1.02] w-full"
            >
              Inquire for this Service &rarr;
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
