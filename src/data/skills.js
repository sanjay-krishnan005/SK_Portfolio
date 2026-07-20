import { FaPython, FaJava, FaGitAlt, FaGithub, FaAws, FaReact, FaBrain, FaDatabase } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiTensorflow, SiPytorch, SiScikitlearn, SiOpenai, SiOpencv, SiNextdotjs, SiFastapi, SiExpress, SiTailwindcss, SiPandas, SiNumpy, SiPowerbi, SiGooglecloud } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const SkillsData = [
  // Languages
  {
    name: "Python",
    category: "Languages",
    icon: FaPython,
    color: "#3776AB",
  },
  {
    name: "JavaScript",
    category: "Languages",
    icon: IoLogoJavascript,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    category: "Languages",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "SQL",
    category: "Languages",
    icon: FaDatabase,
    color: "#003B57",
  },
  {
    name: "Java",
    category: "Languages",
    icon: FaJava,
    color: "#007396",
  },

  // AI & ML
  {
    name: "TensorFlow",
    category: "AI & ML",
    icon: SiTensorflow,
    color: "#FF6F00",
  },
  {
    name: "PyTorch",
    category: "AI & ML",
    icon: SiPytorch,
    color: "#EE4C2C",
  },
  {
    name: "Scikit-Learn",
    category: "AI & ML",
    icon: SiScikitlearn,
    color: "#F7931E",
  },
  {
    name: "NLP",
    category: "AI & ML",
    icon: FaBrain,
    color: "#9C27B0",
  },
  {
    name: "LLMs",
    category: "AI & ML",
    icon: SiOpenai,
    color: "#10A37F",
  },
  {
    name: "Computer Vision",
    category: "AI & ML",
    icon: SiOpencv,
    color: "#5C3EE8",
  },

  // Full-Stack
  {
    name: "React",
    category: "Full-Stack",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    category: "Full-Stack",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "React Native",
    category: "Full-Stack",
    icon: TbBrandReactNative,
    color: "#61DAFB",
  },
  {
    name: "FastAPI",
    category: "Full-Stack",
    icon: SiFastapi,
    color: "#009688",
  },
  {
    name: "Express",
    category: "Full-Stack",
    icon: SiExpress,
    color: "#000000",
  },
  {
    name: "Tailwind CSS",
    category: "Full-Stack",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },

  // Data & Tools
  {
    name: "Pandas",
    category: "Data & Tools",
    icon: SiPandas,
    color: "#150458",
  },
  {
    name: "NumPy",
    category: "Data & Tools",
    icon: SiNumpy,
    color: "#013243",
  },
  {
    name: "Power BI",
    category: "Data & Tools",
    icon: SiPowerbi,
    color: "#F2C811",
  },
  {
    name: "Git",
    category: "Data & Tools",
    icon: FaGitAlt,
    color: "#F05032",
  },
  {
    name: "GitHub",
    category: "Data & Tools",
    icon: FaGithub,
    color: "#1817C6",
  },
  {
    name: "AWS",
    category: "Data & Tools",
    icon: FaAws,
    color: "#232F3E",
  },
  {
    name: "GCP",
    category: "Data & Tools",
    icon: SiGooglecloud,
    color: "#4285F4",
  },
];

export default SkillsData;
