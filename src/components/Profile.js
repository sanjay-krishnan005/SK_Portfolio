import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import SocialHandles from "./SocialHandles";
import ProfileData from "../data/profile";
import Wave from "./Wave";

const Profile = () => {
  return (
    <section
      id="home"
      className="text-gray-600 bg-darkblue body-font pt-20 lg:pt-28 pb-0 relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-between"
    >
      <div className="container mx-auto px-5 py-4 md:py-8 lg:py-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl w-full my-auto">
        {/* Left Side (Texts & Actions) */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-grow order-2 lg:order-1 max-w-2xl">
          {/* Professional Tagline */}
          <span
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-golden text-xs md:text-sm font-bold tracking-widest uppercase mb-2 bg-golden/10 px-3.5 py-1.5 rounded-full border border-golden/30"
          >
            AI Engineer & Developer
          </span>
          
          {/* Main Greeting */}
          <h1
            data-aos="zoom-in-up"
            data-aos-duration="1200"
            data-aos-once="false"
            className="title-font text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-3"
          >
            Hello, I am <br className="hidden sm:inline" />
            <span className="text-dark-orange">{ProfileData.name}</span>
          </h1>

          {/* Typing Role */}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1200"
            data-aos-once="false"
            className="text-xl md:text-2xl text-slate-300 font-semibold mb-4 min-h-[40px] flex items-center"
          >
            <span>Specialized in&nbsp;</span>
            <span className="text-white border-b-2 border-dark-orange pb-0.5 font-bold">
              <Typewriter
                words={ProfileData.professions}
                loop={false}
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </div>

          {/* Punchy Bio Statement */}
          <p
            data-aos="zoom-in-up"
            data-aos-duration="1400"
            data-aos-once="false"
            className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 font-normal max-w-xl"
          >
            {ProfileData.bio}
          </p>

          {/* Visual Highlight Badges */}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="flex flex-wrap gap-2.5 mb-8 justify-center lg:justify-start"
          >
            {ProfileData.highlights?.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-golden"></span>
                <span>{item.value}</span>
              </span>
            ))}
          </div>

          {/* Buttons Group */}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="flex flex-wrap gap-4 justify-center lg:justify-start w-full mb-6"
          >
            <button className="inline-flex font-semibold text-slate-900 bg-golden hover:bg-golden-light border-2 border-golden py-3 px-8 focus:outline-none transition-all duration-300 rounded-full text-base shadow-lg shadow-golden/30 hover:scale-105">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={750}
              >
                Hire Me
              </Link>
            </button>
            <a href={`${process.env.PUBLIC_URL}${ProfileData.resume}`} target="_blank" rel="noreferrer">
              <button className="inline-flex font-semibold text-golden hover:text-light-black bg-transparent hover:bg-golden border-2 border-golden py-3 px-8 focus:outline-none transition-all duration-300 rounded-full text-base hover:scale-105 shadow-md shadow-golden/10 cursor-pointer">
                Get Resume
              </button>
            </a>
          </div>

          {/* Social Icons Aligned Cleanly */}
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-once="false"
            className="border-t border-slate-700/50 pt-5 w-full flex flex-col items-center lg:items-start"
          >
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Connect with me</span>
            <SocialHandles />
          </div>
        </div>

        {/* Right Side (Profile Image Frame & Hero Anchor) */}
        <div
          id="hero-profile-anchor"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="false"
          className="flex-shrink-0 order-1 lg:order-2 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto relative group"
        >
          {/* Decorative Offset Glow and Shadow backdrops */}
          <div className="absolute inset-0 bg-gradient-to-tr from-golden to-amber-600 rounded-[2.5rem] rotate-6 opacity-30 group-hover:rotate-12 transition-transform duration-500 blur-xl"></div>
          <div className="absolute inset-0 bg-golden/20 rounded-[2.5rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>

          {/* Invisible sizing anchor (TravellingProfileImage renders the visual image across all screen sizes) */}
          <div className="w-full h-full rounded-[2.5rem] overflow-hidden border-2 border-golden/80 shadow-2xl shadow-golden/20 relative z-10 bg-slate-900 invisible">
            <img
              className="w-full h-full object-cover object-center"
              alt={ProfileData.name}
              src={ProfileData.img}
            />
          </div>
        </div>
      </div>
      <Wave />
    </section>
  );
};

export default Profile;
