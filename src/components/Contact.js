import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import SocialHandles from "./SocialHandles";
import ContactData from "../data/contact";

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFallback, setSubmissionFallback] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const subject = formData.get("subject") || "Portfolio Inquiry";
    const message = formData.get("message");

    setIsSubmitting(true);
    setSubmissionFallback(null);
    const toastId = toast.loading("Sending message to Sanjay...");

    let sent = false;

    // 1. Try Web3Forms if an access key is provided in contact.js
    if (ContactData.web3formsKey) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: ContactData.web3formsKey,
            name,
            email,
            subject: `[Portfolio] ${subject} - from ${name}`,
            message,
          }),
        });
        const data = await res.json();
        if (data.success) {
          sent = true;
        }
      } catch (err) {
        console.warn("Web3Forms attempt error:", err);
      }
    }

    // 2. Try FormSubmit AJAX gateway
    if (!sent) {
      try {
        const res = await fetch(`https://formsubmit.co/ajax/${ContactData.email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            _subject: `[Portfolio] ${subject} - from ${name}`,
            message,
            _captcha: "false",
            _template: "table",
          }),
        });

        if (res.ok) {
          const rawText = await res.text();
          if (rawText.includes('"success":"true"') || rawText.includes('"message":')) {
            sent = true;
          }
        }
      } catch (err) {
        console.warn("FormSubmit attempt error:", err);
      }
    }

    setIsSubmitting(false);

    if (sent) {
      toast.update(toastId, {
        render: "Message delivered successfully to Sanjay!",
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
      e.target.reset();
      setSubmissionFallback(null);
    } else {
      // Graceful fallback: DO NOT force Windows mail app popup.
      // Instead, present convenient 1-click web options (Gmail Web, WhatsApp, Mail)
      toast.update(toastId, {
        render: "Server gateway busy. Choose your instant 1-click option below!",
        type: "info",
        isLoading: false,
        autoClose: 6000,
      });

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        ContactData.email
      )}&su=${encodeURIComponent(`[Portfolio] ${subject} - from ${name}`)}&body=${encodeURIComponent(
        `Hi Sanjay,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
      )}`;

      const whatsappText = encodeURIComponent(
        `Hi Sanjay,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
      );
      const whatsappUrl = `https://wa.me/918072286139?text=${whatsappText}`;

      const mailtoUrl = `mailto:${ContactData.email}?subject=${encodeURIComponent(
        `[Portfolio] ${subject} - from ${name}`
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

      setSubmissionFallback({
        name,
        gmailUrl,
        whatsappUrl,
        mailtoUrl,
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#121318] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-golden text-xs md:text-sm font-bold tracking-widest uppercase mb-2 bg-golden/10 px-3.5 py-1 rounded-full border border-golden/20"
          >
            Initiate Contact
          </span>
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1100"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Let's <span className="text-golden">Collaborate</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-golden to-amber-500 rounded-full mt-3"></div>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Left: Direct Channels */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Direct Channels */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#181922]/90 border border-white/10 space-y-4 shadow-xl shadow-black/30 text-left">
              <div className="mb-2">
                <span className="text-golden text-xs font-bold uppercase tracking-wider">Get in Touch</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Direct Inquiries</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Reach out for AI/ML engineering roles, intelligent vision pipelines, IoT telemetry, or technical collaboration.
                </p>
              </div>
              <a
                href={`mailto:${ContactData.email}`}
                className="flex items-center gap-4 text-left p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-golden/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-golden/10 border border-golden/30 flex items-center justify-center text-golden text-lg group-hover:scale-110 transition-transform">
                  <FaEnvelope />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email</span>
                  <p className="text-sm font-semibold text-white group-hover:text-golden transition-colors truncate">
                    {ContactData.email}
                  </p>
                </div>
              </a>

              {ContactData.phone && (
                <a
                  href={`tel:${ContactData.phone}`}
                  className="flex items-center gap-4 text-left p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-golden/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-golden/10 border border-golden/30 flex items-center justify-center text-golden text-lg group-hover:scale-110 transition-transform">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Phone</span>
                    <p className="text-sm font-semibold text-white group-hover:text-golden transition-colors">
                      {ContactData.phone}
                    </p>
                  </div>
                </a>
              )}

              <div className="flex items-center gap-4 text-left p-3.5 rounded-xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-golden/10 border border-golden/30 flex items-center justify-center text-golden text-lg">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Base</span>
                  <p className="text-sm font-semibold text-white">
                    {ContactData.address}
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex flex-col items-center">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">Social Profiles</span>
                <SocialHandles />
              </div>
            </div>
          </div>

          {/* Right: Modern Luxury Form */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="lg:col-span-7 p-8 rounded-2xl bg-[#181922]/90 border border-white/10 shadow-2xl shadow-black/40 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-sm text-slate-400 mb-6">
                Have a project inquiry, research collaboration, or opportunity? Fill out the details below.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#121318] rounded-xl border border-white/10 focus:border-golden focus:ring-1 focus:ring-golden text-white p-3.5 outline-none transition-all placeholder:text-slate-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-[#121318] rounded-xl border border-white/10 focus:border-golden focus:ring-1 focus:ring-golden text-white p-3.5 outline-none transition-all placeholder:text-slate-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="e.g. AI Engineering Opportunity / Project Inquiry"
                    className="w-full bg-[#121318] rounded-xl border border-white/10 focus:border-golden focus:ring-1 focus:ring-golden text-white p-3.5 outline-none transition-all placeholder:text-slate-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Describe your project, role, or collaboration inquiry..."
                    className="w-full bg-[#121318] rounded-xl border border-white/10 focus:border-golden focus:ring-1 focus:ring-golden text-white p-3.5 outline-none transition-all placeholder:text-slate-500 text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-bold text-slate-950 bg-golden hover:bg-golden-light disabled:opacity-50 py-3.5 px-8 rounded-full text-base transition-all duration-300 shadow-lg shadow-golden/25 hover:shadow-golden/40 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FaPaperPlane className="text-sm" />
                  <span>{isSubmitting ? "Dispatching..." : "Dispatch Message"}</span>
                </button>

                {/* Instant 1-Click Fallback Card */}
                {submissionFallback && (
                  <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-[#14151b] border border-golden/40 shadow-xl text-left animate-fadeIn">
                    <div className="flex items-center gap-2 text-golden text-sm font-bold mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-golden animate-ping"></span>
                      <span>1-Click Instant Dispatch</span>
                    </div>
                    <p className="text-xs text-slate-300 mb-3.5 leading-relaxed">
                      Your message has been pre-formatted for direct delivery! Select your preferred channel below to send it to Sanjay instantly:
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      <a
                        href={submissionFallback.gmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-all shadow-md shadow-red-950/40 hover:scale-105"
                      >
                        <SiGmail className="text-sm" />
                        <span>Send via Web Gmail</span>
                      </a>
                      <a
                        href={submissionFallback.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-md shadow-emerald-950/40 hover:scale-105"
                      >
                        <FaWhatsapp className="text-sm" />
                        <span>Send via WhatsApp</span>
                      </a>
                      <a
                        href={submissionFallback.mailtoUrl}
                        className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 font-semibold text-xs transition-all"
                      >
                        <FaEnvelope className="text-xs text-golden" />
                        <span>Mail Client</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Direct Alternative Shortcuts */}
                <div className="pt-2 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2 border-t border-white/5">
                  <span>Direct fast channels:</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(ContactData.email)}&su=${encodeURIComponent("Portfolio Collaboration Inquiry")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-300 hover:text-golden transition-colors font-medium"
                    >
                      <SiGmail className="text-red-400 text-xs" />
                      <span>Gmail Web</span>
                    </a>
                    <span className="text-white/20">•</span>
                    <a
                      href={`https://wa.me/918072286139?text=${encodeURIComponent("Hi Sanjay, I visited your portfolio and would like to connect!")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-300 hover:text-golden transition-colors font-medium"
                    >
                      <FaWhatsapp className="text-emerald-400 text-xs" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
