import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import { abouts } from "../data/about";
import { technologies } from "../data/skills";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="mb-10">
        {abouts.map((about, i) => (
          <p key={i} data-aos="fade-up">
            {about.text.split(" ").map((word, j) => {
              const link = about.links.find((link) => link.word === word);
              return link ? (
                <a key={j}> {word} </a>
              ) : (
                <span key={j}>{word} </span>
              );
            })}
          </p>
        ))}
      </div>

      <div data-aos="fade-up">
        <h2 className="text-white font-bold text-lg my-5">
          Competenze e Strumenti
        </h2>
        <div className="flex flex-wrap text-center gap-3 max-md:justify-center">
          {technologies.map((category, i) => (
            <span className="badge whitespace-nowrap text-xs" key={i}>
              {category}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
