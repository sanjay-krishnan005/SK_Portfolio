import { BiLogoReact, BiLogoTailwindCss, BiLogoMongodb } from "react-icons/bi";
import { TbDatabase, TbNetwork } from "react-icons/tb";
import {
  SiExpress,
  SiTensorflow,
  SiPytorch,
  SiFastapi,
  SiRaspberrypi,
  SiOpencv,
  SiOpenai,
  SiScikitlearn,
  SiPandas,
  SiNumpy
} from "react-icons/si";
import { FaBrain, FaPython } from "react-icons/fa";

const ProjectsData = [
  // 1. Intelligence & Monitoring Platform
  {
    id: "1",
    name: "Intelligence & Monitoring Platform",
    category: "AI & IoT",
    image: "/projects/waste_monitoring.jpg",
    icons: [FaPython, SiPytorch, SiOpencv, TbNetwork, SiRaspberrypi],
    description: "An AI + IoT platform for real-time monitoring, classification, and operational intelligence, combining computer vision (YOLO/OpenCV), telemetry, edge devices, and analytics.",
    github: "https://github.com/sanjay-krishnan005/waste_management_platform",
    demo: "#",
  },
  // 2. Grant Applier AI Automation
  {
    id: "2",
    name: "Grant Applier AI Automation",
    category: "AI & Automation",
    image: "/projects/grant_applier.jpg",
    icons: [FaPython, SiOpenai, FaBrain, SiFastapi],
    description: "An automated workflow for grant discovery, eligibility analysis, and application preparation, utilizing LLM workflows, data handling, and browser automation to streamline submission pipelines.",
    github: "https://github.com/sanjay-krishnan005/grant_ai_agent",
    demo: "#",
  },
  // 3. Aquifer Ground Water Level Intelligence
  {
    id: "3",
    name: "Aquifer Ground Water Level Intelligence",
    category: "AI & Data Science",
    image: "/projects/aquifer_intelligence.jpg",
    icons: [FaPython, SiFastapi, BiLogoReact, TbDatabase],
    description: "An environmental intelligence platform integrating NASA, NOAA, and USGS data with deep learning models, GIS mapping, and interactive forecasting for groundwater fluctuation analysis.",
    github: "https://github.com/sanjay-krishnan005",
    demo: "http://aquifer-intelligence-platform.onrender.com",
  },
  // 4. AI Inspection Platform
  {
    id: "4",
    name: "AI Inspection Platform",
    category: "AI & ML",
    image: "/projects/ai_inspection.jpg",
    icons: [FaPython, SiOpencv, SiPytorch, FaBrain],
    description: "An intelligent quality inspection and defect detection platform utilizing computer vision algorithms for automated industrial visual assessments and fault identification.",
    github: "https://github.com/sanjay-krishnan005/AI_Inspection_Platform",
    demo: "#",
  },
  // 5. Automated Payroll System
  {
    id: "5",
    name: "Automated Payroll System",
    category: "Full-Stack",
    image: "/projects/payroll_system.jpg",
    icons: [BiLogoReact, BiLogoTailwindCss, SiExpress, BiLogoMongodb],
    description: "A secure financial platform automating employee payroll calculations, deductions, payslip generation, and reporting workflows.",
    github: "https://github.com/sanjay-krishnan005/FASTAPI_PAYROLE_GENERATOR",
    demo: "#",
  },
  // 6. CRM Connect Application
  {
    id: "6",
    name: "CRM Connect Application",
    category: "Full-Stack",
    image: "/projects/project-9.png",
    icons: [BiLogoReact, BiLogoTailwindCss, SiFastapi, TbDatabase],
    description: "A full-featured Customer Relationship Management (CRM) application with client pipeline tracking, automated lead capturing, and performance analytics.",
    github: "https://github.com/sanjay-krishnan005/CRM_Application",
    demo: "#",
  },
  // 7. Explainable AI Learning Platform
  {
    id: "7",
    name: "Explainable AI Learning Platform",
    category: "AI & ML",
    image: "/projects/explainable_ai.jpg",
    icons: [FaPython, SiTensorflow, FaBrain],
    description: "An interactive dashboard designed to demystify complex neural network outputs and explain decisions visually using cutting-edge Explainable AI (XAI) methodologies.",
    github: "https://github.com/sanjay-krishnan005/XAM.AI-Project",
    demo: "#",
  },
  // 8. SPICO Intelligent AI Chatbot
  {
    id: "8",
    name: "SPICO Intelligent AI Chatbot",
    category: "AI & ML",
    image: "/projects/spico_chatbot.jpg",
    icons: [FaPython, SiFastapi, FaBrain],
    description: "A custom conversational agent leveraging NLP pipelines and transformer models to deliver domain-specific smart query responses with low latency.",
    github: "https://github.com/sanjay-krishnan005/SPICO-AI",
    demo: "#",
  },
  // 9. Image Classification CIFAR-10
  {
    id: "9",
    name: "Image Classification CIFAR-10",
    category: "AI & ML",
    image: "/projects/project-6.png",
    icons: [FaPython, SiTensorflow, FaBrain],
    description: "A deep Convolutional Neural Network (CNN) classifier built on the CIFAR-10 dataset with feature extraction, data augmentation, and interactive prediction visualizations.",
    github: "https://github.com/sanjay-krishnan005/image-classification-cifar10-datsets",
    demo: "#",
  },
  // 10. Loan Approval Prediction
  {
    id: "10",
    name: "Loan Approval Prediction",
    category: "AI & ML",
    image: "/projects/project-1.jpg",
    icons: [FaPython, SiScikitlearn, TbDatabase],
    description: "A predictive machine learning model evaluating applicant credit history, income profiles, and risk parameters to automate loan eligibility assessment.",
    github: "https://github.com/sanjay-krishnan005/loan-approval-prediction",
    demo: "#",
  },
  // 11. Music Recommender System
  {
    id: "11",
    name: "Music Recommender System",
    category: "AI & Data Science",
    image: "/projects/project-8.jpg",
    icons: [FaPython, SiScikitlearn, FaBrain],
    description: "A machine-learning recommendation engine utilizing acoustic feature similarity and collaborative filtering to deliver tailored song and playlist suggestions.",
    github: "https://github.com/sanjay-krishnan005/music_recommender_sys",
    demo: "#",
  },
  // 12. Customer Sales Analysis
  {
    id: "12",
    name: "Customer Sales Analysis",
    category: "AI & Data Science",
    image: "/projects/project-2.png",
    icons: [FaPython, SiPandas, SiNumpy, TbDatabase],
    description: "An end-to-end data analytics pipeline examining transaction patterns, customer segmentation, churn propensity, and revenue forecasting metrics.",
    github: "https://github.com/sanjay-krishnan005/customer_sales_analysis",
    demo: "#",
  },
];

export default ProjectsData;
