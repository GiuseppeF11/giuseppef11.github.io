import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { projects } from "../data/projects";

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    const handleChange = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <>
      {projects.map((project, index) => (
        <div data-aos="fade-up" key={index}>
          <a
            target="blank"
            href={project.link}
            className={`card grid grid-flow-col gap-5 my-5 p-8 transition-all duration-300 ${
              isDesktop && hoveredIndex !== null && hoveredIndex !== index
                ? "brightness-50"
                : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="col-span-3 pt-2 max-xl:hidden h-28">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="col-span-4">
              <h3 className="title color-white text-lg font-bold h-10 flex items-center mb-1 gap-1 max-md:justify-center lg:justify-start">
                {project.name.length > 30
                  ? `${project.name.slice(0, 30)}...`
                  : project.name}{" "}
                <span className="text-sm icon">
                  <MdOutlineArrowOutward />
                </span>
              </h3>
              <p className="text-sm mb-3">{project.description}</p>
              <div className="documentations flex flex-wrap text-center gap-3 mb-3 max-md:justify-center lg:justify-start">
                {project.documentations.map((doc, i) => (
                  <a
                    target="blank"
                    href={doc.url}
                    className="link whitespace-nowrap text-sm flex items-center gap-2"
                    key={i}
                  >
                    <FaLink /> {doc.name}
                  </a>
                ))}
              </div>
              <div className="categories flex flex-wrap text-center gap-3 my-5 max-md:justify-center lg:justify-start">
                {project.categories.map((category, i) => (
                  <span className="badge whitespace-nowrap text-xs" key={i}>
                    {category}
                  </span>
                ))}
              </div>

              <div className="col-span-2 pt-2 h-40 xl:hidden flex max-md:justify-center lg:justify-start">
                <img src={project.image} alt={project.name} />
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}

export default Projects;
