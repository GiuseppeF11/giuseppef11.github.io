import "./RightSide.css";
import About from "./About";
import Projects from "./Projects";
import Experiences from "./Experiences";
import Studies from "./Studies";
import Contact from "./Contact";
import { MdArrowForward } from "react-icons/md";

const RightSide = () => {
  return (
    <div className="right-side lg:pt-14">

      {/* ABOUT */}
      <section className="about color-gray max-lg:mb-10 lg:mb-16 lg:pt-5" id="about">
        <h1 data-aos="fade-right" className="section-heading">Chi sono</h1>
        <div className="max-md:px-5">
          <About />
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="experiences max-lg:mb-10 lg:mb-16 lg:pt-5" id="experiences">
        <h1 data-aos="fade-right" className="section-heading">Esperienze</h1>
        <div className="max-md:px-5">
          <Experiences />
          <div className="py-6 flex items-center justify-center md:justify-start">
            <a
              data-aos="fade-right"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/giuseppe-failla-96a759194/"
              className="view-more title color-white text-lg font-bold flex items-center gap-1"
            >
              <span className="text max-md:text-sm">Scopri di più</span>
              <MdArrowForward className="icon" />
            </a>
          </div>
        </div>
      </section>

      {/* STUDIES */}
      <section className="studies max-lg:mb-10 lg:mb-16 lg:pt-5" id="studies">
        <h1 data-aos="fade-right" className="section-heading">Formazione</h1>
        <div className="max-md:px-5">
          <Studies />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects max-lg:mb-10 lg:mb-16 lg:pt-5" id="projects">
        <h1 data-aos="fade-right" className="section-heading">Progetti</h1>
        <div className="max-md:px-5">
          <Projects />
          <div className="mt-6 mb-16 flex items-center justify-center md:justify-start">
            <a
              data-aos="fade-right"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/GiuseppeF11?tab=repositories"
              className="view-more title color-white text-lg font-bold flex items-center gap-1"
            >
              <span>{"Vedi l'archivio completo"}</span>
              <MdArrowForward className="icon" />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact max-lg:mb-10 mb-20 lg:pt-5" id="contact">
        <h1 data-aos="fade-left" className="section-heading">Contattami</h1>
        <div className="max-md:px-5">
          <Contact />
        </div>
      </section>

    </div>
  );
};

export default RightSide;