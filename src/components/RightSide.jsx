import { useRef, useState, useEffect } from "react";
import "./RightSide.css";
import About from "./About";
import Projects from "./Projects";
import Experiences from "./Experiences";
import Studies from "./Studies";
import Contact from "./Contact";
import { MdArrowForward, MdChevronLeft, MdChevronRight } from "react-icons/md";

const SECTION_ORDER = ["about", "experiences", "studies", "projects", "contact"];

const RightSide = ({ mobileSection = "about", onSectionChange }) => {
  const touchX = useRef(0);
  const touchY = useRef(0);
  const prevSectionRef = useRef(mobileSection);

  // Direzione calcolata sincronamente durante il render
  let slideDir = "";
  if (prevSectionRef.current !== mobileSection) {
    const prevIdx = SECTION_ORDER.indexOf(prevSectionRef.current);
    const currIdx = SECTION_ORDER.indexOf(mobileSection);
    slideDir = currIdx > prevIdx ? "left" : "right";
    prevSectionRef.current = mobileSection;
  }

  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 2500);
    return () => clearTimeout(t);
  }, []);

  const handleTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
    touchY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const dx = touchX.current - e.changedTouches[0].clientX;
    const dy = touchY.current - e.changedTouches[0].clientY;
    if (Math.abs(dx) <= Math.abs(dy) || Math.abs(dx) < 50) return;
    setShowHint(false);
    const idx = SECTION_ORDER.indexOf(mobileSection);
    const len = SECTION_ORDER.length;
    if (dx > 0) onSectionChange(SECTION_ORDER[(idx + 1) % len]);
    if (dx < 0) onSectionChange(SECTION_ORDER[(idx - 1 + len) % len]);
  };

  const show = (id) => mobileSection === id ? "" : "hidden lg:block";

  return (
    <div
      className="right-side lg:pt-14 max-lg:pb-20"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {/* Wrapper animato — key forza re-mount a ogni cambio sezione, lg:contents trasparente su desktop */}
      <div key={mobileSection} className={`lg:contents${slideDir ? ` section-slide-${slideDir}` : ""}`}>

        {/* ABOUT */}
        <section className={`about color-gray max-lg:mb-10 lg:mb-16 lg:pt-5 ${show("about")}`} id="about">
          <h2 data-aos="fade-up" className="section-heading">Chi sono</h2>
          <div className="max-md:px-5">
            <About />
          </div>
        </section>

        {/* EXPERIENCES */}
        <section className={`experiences max-lg:mb-10 lg:mb-16 lg:pt-5 ${show("experiences")}`} id="experiences">
          <h2 data-aos="fade-up" className="section-heading">Esperienze</h2>
          <div className="max-md:px-5">
            <Experiences />
            <div className="py-6 flex items-center justify-center md:justify-start">
              <a
                data-aos="fade-up"
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
        <section className={`studies max-lg:mb-10 lg:mb-16 lg:pt-5 ${show("studies")}`} id="studies">
          <h2 data-aos="fade-up" className="section-heading">Formazione</h2>
          <div className="max-md:px-5">
            <Studies />
          </div>
        </section>

        {/* PROJECTS */}
        <section className={`projects max-lg:mb-10 lg:mb-16 lg:pt-5 ${show("projects")}`} id="projects">
          <h2 data-aos="fade-up" className="section-heading">Progetti</h2>
          <div className="max-md:px-5">
            <Projects />
            <div className="mt-6 mb-16 flex items-center justify-center md:justify-start">
              <a
                data-aos="fade-up"
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
        <section className={`contact max-lg:mb-10 mb-20 lg:pt-5 ${show("contact")}`} id="contact">
          <h2 data-aos="fade-up" className="section-heading">Contattami</h2>
          <div className="max-md:px-5">
            <Contact />
          </div>
        </section>

      </div>

      {showHint && (
        <>
          <div className="swipe-hint-arrow swipe-hint-arrow--left lg:hidden">
            <MdChevronLeft />
          </div>
          <div className="swipe-hint-arrow swipe-hint-arrow--right lg:hidden">
            <MdChevronRight />
          </div>
        </>
      )}

    </div>
  );
};

export default RightSide;
