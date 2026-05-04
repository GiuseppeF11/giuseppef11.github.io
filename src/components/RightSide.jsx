import "./RightSide.css";
import About from "./About";
import Projects from "./Projects";
import Experiences from "./Experiences";
import Studies from "./Studies";
import Contact from "./Contact";
import { MdArrowForward } from "react-icons/md";

const RightSide = () => {
  return (
    <>
      <div className="right-side lg:pt-14">
        {/* ABOUT */}
        <section className="about color-gray max-lg:mb-8 lg:mb-16 lg:pt-5" id="about">
          <h1 data-aos="fade-right" className="text-white text-4xl font-bold mb-4">
            Chi sono
          </h1>
          <About />
        </section>

        {/* STUDIES */}
        <section className="studies lg:mb-16 lg:pt-5" id="studies">
          <h1 data-aos="fade-right" className="text-white text-4xl font-bold mb-4">
            Formazione
          </h1>
          <Studies />
        </section>

        {/* EXPERIENCES */}
        <section className="experiences lg:mb-16 lg:pt-5" id="experiences">
          <h1 data-aos="fade-right" className="text-white text-4xl font-bold mb-4">
            Esperienze
          </h1>
          <Experiences />
          <div className="py-6 flex items-center max-md:justify-center">
            <a
              data-aos="fade-right"
              target="blank"
              href="https://www.linkedin.com/in/giuseppe-failla-96a759194/"
              className="view-more title color-white text-lg font-bold flex items-center gap-1"
            >
              <span className="text max-md:text-sm">Scopri di più</span>
              <MdArrowForward className="icon" />
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects lg:mb-16 lg:pt-5" id="projects">
          <h1 data-aos="fade-right" className="text-white text-4xl font-bold mb-4">
            Progetti
          </h1>
          <Projects />
          <div className="mt-4 mb-16 flex items-center max-md:justify-center">
            <a
              data-aos="fade-right"
              target="blank"
              href="https://github.com/GiuseppeF11?tab=repositories"
              className="view-more title color-white text-lg font-bold flex items-center gap-1"
            >
              <span>{"Vedi l'archivio completo"}</span>
              <MdArrowForward className="icon" />
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact mb-20 lg:pt-5" id="contact">
          <h1 data-aos="fade-left" className="text-white text-4xl font-bold mb-4">
            Contattami
          </h1>
          <Contact />
        </section>
      </div>
    </>
  );
};

export default RightSide;
