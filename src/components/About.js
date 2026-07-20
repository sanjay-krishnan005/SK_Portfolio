import React from "react";
import { Link } from "react-scroll";
import AboutData from "../data/about";
import ProfileData from "../data/profile";
import { FaBrain, FaLaptopCode, FaChartBar, FaMicrochip } from "react-icons/fa";

const About = () => {
  return (
    <section className="body-font">
      <div className="p-5 mt-3 mx-auto md:mt-5 md:mx-10 lg:mx-16">
        <div id="about" className="flex flex-col text-center w-full mb-3">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            About Me
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg mx-auto leading-relaxed font-medium text-dark-orange text-center"
          >
            Why hire me?
          </p>
        </div>
        <div className="mx-auto flex lg:flex-row flex-col items-center justify-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="lg:max-w-lg sm:w-2/3 lg:w-1/2 w-full mb-10 md:mb-0"
          >
            <img
              className="object-cover object-center pointer-events-none rounded backdrop-contrast-200 backdrop-brightness-200"
              alt="About Sanjay"
              src={AboutData.image}
            />
          </div>
          <div className="lg:w-1/2 justify-center lg:p-5 xl:p-7 md:p-5 flex flex-col items-center text-justify">
            {AboutData.description?.map((item, index) => (
              <p
                key={index}
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="false"
                className="font-medium text-gray-700 text-lg lg:text-base xl:text-xl leading-loose xl:leading-8 mb-4"
              >
                {item}
              </p>
            ))}
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
              className="mt-7 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
            >
              <button className="inline-flex font-medium text-white bg-black border-2 border-black py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Hire Me
                </Link>
              </button>
              <a href={ProfileData.resume} target="_blank" rel="noreferrer">
                <button className="inline-flex font-medium text-white bg-dark-orange border-2 border-dark-orange py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Services & Expertise Section (Horizontal Layout with Icons) */}
        <div className="mt-16 border-t border-gray-200 pt-12 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2 justify-center md:justify-start">
            <span className="w-1.5 h-6 bg-dark-orange rounded-full"></span>
            Services & Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AboutData.services?.map((service, index) => {
              const icons = [FaBrain, FaLaptopCode, FaChartBar, FaMicrochip];
              const IconComponent = icons[index] || FaBrain;
              return (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="bg-slate-50 border border-slate-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center md:items-start text-center md:text-left"
                >
                  <div className="text-dark-orange text-4xl mb-4 bg-orange-100/50 p-3 rounded-lg w-fit">
                    <IconComponent />
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
