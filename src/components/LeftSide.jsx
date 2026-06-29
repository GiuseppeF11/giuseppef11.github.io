import "./LeftSide.css";
import Navbar from "./Navbar";
import { technologies } from "../data/skills";

const LeftSide = () => (
  <>
    <section className="container pt-14 md:pt-20 max-md:px-5">

      {/* Nome e ruolo */}
      <div className="tracking-wider max-md:text-center">
        <h1
          data-aos="fade-up"
          className="max-lg:text-4xl lg:text-5xl font-bold mb-3"
        >
          Giuseppe Failla
        </h1>
        <p data-aos="fade-up" className="role color-water">
          Full-Stack Developer
        </p>
      </div>

      {/* Carosello skill */}
      <div data-aos="fade-up" className="skills-carousel">
        <div className="carousel-track">
          {[...technologies, ...technologies].map((tech, i) => (
            <span className="badge whitespace-nowrap text-xs flex-shrink-0" key={i}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Navbar sezioni — solo desktop */}
      <div data-aos="fade-up">
        <Navbar />
      </div>

    </section>
  </>
);

export default LeftSide;
