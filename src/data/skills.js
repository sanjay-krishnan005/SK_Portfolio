import { FaPython, FaJava, FaGitAlt, FaGithub, FaAws, FaReact, FaNodeJs, FaDatabase, FaMicrochip } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiOpencv,
  SiFastapi,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiPandas,
  SiNumpy,
  SiGooglecloud,
  SiSupabase,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiNvidia,
  SiRaspberrypi,
  SiJupyter,
  SiGooglecolab,
  SiStreamlit
} from "react-icons/si";
import { TbNetwork } from "react-icons/tb";

const SkillsData = [
  // AI & ML
  {
    name: "PyTorch",
    category: "AI & ML",
    icon: SiPytorch,
    color: "#EE4C2C",
  },
  {
    name: "OpenCV",
    category: "AI & ML",
    icon: SiOpencv,
    color: "#5C3EE8",
  },
  {
    name: "TensorFlow",
    category: "AI & ML",
    icon: SiTensorflow,
    color: "#FF6F00",
  },
  {
    name: "Keras",
    category: "AI & ML",
    icon: SiKeras,
    color: "#D00000",
  },
  {
    name: "Scikit-Learn",
    category: "AI & ML",
    icon: SiScikitlearn,
    color: "#F7931E",
  },
  {
    name: "Pandas",
    category: "AI & ML",
    icon: SiPandas,
    color: "#E70488",
  },
  {
    name: "NumPy",
    category: "AI & ML",
    icon: SiNumpy,
    color: "#4DABCF",
  },

  // Programming
  {
    name: "Python",
    category: "Programming",
    icon: FaPython,
    color: "#3776AB",
  },
  {
    name: "SQL",
    category: "Programming",
    icon: FaDatabase,
    color: "#F59E0B",
  },
  {
    name: "TypeScript",
    category: "Programming",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    category: "Programming",
    icon: IoLogoJavascript,
    color: "#F7DF1E",
  },
  {
    name: "Java",
    category: "Programming",
    icon: FaJava,
    color: "#EA2D2E",
  },

  // Development
  {
    name: "FastAPI",
    category: "Development",
    icon: SiFastapi,
    color: "#009688",
  },
  {
    name: "React",
    category: "Development",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    category: "Development",
    icon: SiNextdotjs,
    color: "#FFFFFF", // High-contrast white for dark theme
  },
  {
    name: "Node.js",
    category: "Development",
    icon: FaNodeJs,
    color: "#339933",
  },
  {
    name: "Express.js",
    category: "Development",
    icon: SiExpress,
    color: "#CBD5E1", // High-contrast silver for dark theme
  },
  {
    name: "Tailwind CSS",
    category: "Development",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },

  // Cloud & Backend
  {
    name: "AWS",
    category: "Cloud & DB",
    icon: FaAws,
    color: "#FF9900",
  },
  {
    name: "Google Cloud",
    category: "Cloud & DB",
    icon: SiGooglecloud,
    color: "#4285F4",
  },
  {
    name: "Supabase",
    category: "Cloud & DB",
    icon: SiSupabase,
    color: "#3ECF8E",
  },
  {
    name: "Firebase",
    category: "Cloud & DB",
    icon: SiFirebase,
    color: "#FFCA28",
  },
  {
    name: "PostgreSQL",
    category: "Cloud & DB",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "MySQL",
    category: "Cloud & DB",
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "SQLite",
    category: "Cloud & DB",
    icon: SiSqlite,
    color: "#00A2ED",
  },

  // IoT & Edge AI
  {
    name: "NVIDIA Jetson",
    category: "IoT & Edge",
    icon: SiNvidia,
    color: "#76B900",
  },
  {
    name: "Raspberry Pi",
    category: "IoT & Edge",
    icon: SiRaspberrypi,
    color: "#C51A4A",
  },
  {
    name: "MQTT",
    category: "IoT & Edge",
    icon: TbNetwork,
    color: "#F59E0B",
  },
  {
    name: "Sensors & Telemetry",
    category: "IoT & Edge",
    icon: FaMicrochip,
    color: "#D4AF37",
  },

  // Tools
  {
    name: "Git",
    category: "Tools",
    icon: FaGitAlt,
    color: "#F05032",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: FaGithub,
    color: "#FFFFFF",
  },
  {
    name: "Jupyter",
    category: "Tools",
    icon: SiJupyter,
    color: "#F37626",
  },
  {
    name: "Google Colab",
    category: "Tools",
    icon: SiGooglecolab,
    color: "#F9AB00",
  },
  {
    name: "Streamlit",
    category: "Tools",
    icon: SiStreamlit,
    color: "#FF4B4B",
  },
];

export default SkillsData;
