import { BiLogoReact, BiLogoTailwindCss, BiLogoMongodb } from "react-icons/bi";
import { TbBrandNextjs, TbDatabase } from "react-icons/tb";
import { SiExpress, SiTensorflow, SiPytorch, SiFastapi, SiRaspberrypi, SiArduino } from "react-icons/si";
import { FaBrain, FaPython, FaMicrochip, FaWifi } from "react-icons/fa";

const ProjectsData = [
  {
    id: "1",
    name: "Explainable AI Learning Platform",
    category: "AI & ML",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
    icons: [FaPython, SiTensorflow, FaBrain],
    description: "An interactive dashboard designed to demystify complex neural network outputs and explain decisions visually using XAI methodologies.",
    github: "https://github.com/SanjayKrishnanS",
    demo: "#",
  },
  {
    id: "2",
    name: "Aquafier Intelligence Platform",
    category: "AI & ML",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=600&auto=format&fit=crop",
    icons: [FaPython, SiPytorch, TbDatabase],
    description: "An intelligent platform utilizing deep learning and telemetry data for analyzing aquifer sustainability and forecasting groundwater fluctuations.",
    github: "https://github.com/SanjayKrishnanS",
    demo: "#",
  },
  {
    id: "3",
    name: "Advanced CNN Image Classifier",
    category: "AI & ML",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=600&auto=format&fit=crop",
    icons: [FaPython, SiTensorflow, FaBrain],
    description: "A high-accuracy Convolutional Neural Network model designed for advanced multi-class image classification and feature map visualization.",
    github: "https://github.com/SanjayKrishnanS",
    demo: "#",
  },
  {
    id: "4",
    name: "SPICO Intelligent AI Chatbot",
    category: "AI & ML",
    image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=600&auto=format&fit=crop",
    icons: [FaPython, SiFastapi, FaBrain],
    description: "A custom conversational agent leveraging NLP pipelines and transformer models to deliver domain-specific smart query responses.",
    github: "https://github.com/SanjayKrishnanS",
    demo: "#",
  },
  {
    id: "5",
    name: "Automated Payroll System",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
    icons: [BiLogoReact, BiLogoTailwindCss, SiExpress, BiLogoMongodb],
    description: "A secure financial platform automating employee payroll calculations, tax deductions, payslip generation, and bank transfers.",
    github: "https://github.com/SanjayKrishnanS",
    demo: "#",
  },
  {
    id: "6",
    name: "Gamified Loyalty Platform",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
    icons: [TbBrandNextjs, BiLogoTailwindCss, SiFastapi, TbDatabase],
    description: "An interactive customer engagement platform using gamification mechanics, rewards logs, and user progression metrics to drive retention.",
    github: "https://github.com/SanjayKrishnanS",
    demo: "#",
  },
  {
    id: "7",
    name: "IoT Smart Bin Management",
    category: "IoT & Automation",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=600&auto=format&fit=crop",
    icons: [FaMicrochip, FaWifi, SiRaspberrypi, SiArduino],
    description: "A real-time smart waste monitoring and route optimization platform connecting ultrasonic sensor-enabled physical bins to a central dashboard.",
    github: "https://github.com/SanjayKrishnanS",
    demo: "#",
  },
];

export default ProjectsData;
