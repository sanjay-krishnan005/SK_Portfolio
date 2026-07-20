import React from "react";
import CertificationsData from "../data/certifications";
import { TbCertificate } from "react-icons/tb";

const Certifications = () => {
  return (
    <section className="text-gray-600 body-font bg-whitesmoke py-6">
      <div className="p-4 mx-auto md:p-5 md:mx-20 lg:mx-32 xl:mx-56">
        <div
          id="certifications"
          className="flex flex-wrap w-full mb-4 flex-col justify-center text-center md:mb-7"
        >
          <h1 className="sm:text-4xl text-3xl font-medium mb-2 text-gray-900">
            Certifications
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange "
          >
            My Professional Credentials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 md:mt-8">
          {CertificationsData.map((cert, index) => {
            return (
              <div
                key={index}
                data-aos="zoom-in-up"
                data-aos-duration="1200"
                data-aos-once="false"
                className="bg-white rounded-xl shadow-md border-t-4 border-dark-orange p-5 flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg text-dark-orange text-3xl">
                    <TbCertificate />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg md:text-xl text-gray-900 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mt-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{cert.date}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="bg-slate-100 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-md"
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
