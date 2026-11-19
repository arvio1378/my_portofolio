import Navbar from "./components/navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function app() {
  return (
    <div className="text-[#987070]">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  )
}