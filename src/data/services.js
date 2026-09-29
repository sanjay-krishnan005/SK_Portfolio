import { FaBrain, FaCode, FaRobot, FaPencilAlt } from "react-icons/fa";

const ServicesData = [
  {
    id: "ml",
    title: "Machine Learning",
    icon: FaBrain,
    specialty: "Predictive Models & Pipelines",
    description: "Architecting end-to-end machine learning pipelines, deep learning models, and computer vision systems with high benchmarked accuracy. From exploratory data analysis to model deployment.",
    deliverables: [
      "Custom Deep Learning & Neural Architectures",
      "Computer Vision & YOLO Object Detection",
      "Predictive Analytics & Recommendation Engines",
      "Model Quantization & Production Inference"
    ]
  },
  {
    id: "web",
    title: "Web Development",
    icon: FaCode,
    specialty: "Full-Stack & High-Speed APIs",
    description: "Building production-grade web applications and scalable REST/WebSocket microservices. Connecting modern React frontends with high-throughput FastAPI and PostgreSQL backends.",
    deliverables: [
      "Modern React / Next.js Responsive Frontends",
      "High-Performance FastAPI & Express Backends",
      "Database Architecture (PostgreSQL, MongoDB)",
      "Interactive Real-Time Dashboards & Analytics"
    ]
  },
  {
    id: "education",
    title: "Education & Guidance",
    icon: FaPencilAlt,
    specialty: "Technical Mentorship & Roadmaps",
    description: "Providing 1-on-1 technical mentoring, machine learning code reviews, and structured project guidance for students, researchers, and aspiring AI engineers.",
    deliverables: [
      "AI/ML Conceptual Guidance & Debugging",
      "Project Architecture & Code Reviews",
      "Career Roadmaps & Portfolio Strategy",
      "Hands-on Python, PyTorch & Web Development"
    ]
  },
  {
    id: "genai",
    title: "Generative AI & LLM Engineering",
    icon: FaRobot,
    specialty: "Autonomous Agents & RAG",
    description: "Developing intelligent autonomous agents, Retrieval-Augmented Generation (RAG) systems, and workflow automations powered by modern LLMs to eliminate repetitive manual operations.",
    deliverables: [
      "Custom LLM Agents & Task Automation",
      "RAG Pipelines with Vector Databases (FAISS/Pinecone)",
      "Headless Browser Automations (Playwright/Selenium)",
      "Intelligent Chatbots & Enterprise Assistants"
    ]
  },
];

export default ServicesData;

