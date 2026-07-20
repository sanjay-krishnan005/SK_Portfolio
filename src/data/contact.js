import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const ContactData = {
  phone: "+91 8072286139",
  email: "sanjaykrishnan437@gmail.com",
  address: "Chennai, Tamil Nadu, India",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/SanjayKrishnanS",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sanjay-krishnan-s",
      icon: FaLinkedin,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/918072286139",
      icon: FaWhatsapp,
    },
  ],
  // EmailJS Credentials - replace these with your own keys from https://www.emailjs.com
  emailjs: {
    serviceId: "service_9inzcz7",     // Replace with your Service ID
    templateId: "template_lg8ahdf",   // Replace with your Template ID
    publicKey: "_8hE7B_7PzOSTxPxm",    // Replace with your Public Key
  },
};

export default ContactData;
