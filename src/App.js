import "./App.css";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import ScrollToTopButton from "./components/ScrollToTop";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import TravellingProfileImage from "./components/TravellingProfileImage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App min-h-screen bg-[#121318] text-slate-100 selection:bg-golden selection:text-slate-950">
      <Navbar />
      <TravellingProfileImage />
      <Profile />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
