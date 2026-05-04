import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Experiences.css";
import { experiences } from "../data/experiences";
import { sortByEndDateDesc } from "../utils/dateUtils";
import TimelineCard from "./shared/TimelineCard";

const Experiences = () => {
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

  const sorted = sortByEndDateDesc(experiences);

  return (
    <>
      {sorted.map((experience, index) => (
        <TimelineCard
          key={index}
          item={experience}
          index={index}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          isDesktop={isDesktop}
        />
      ))}
    </>
  );
};

export default Experiences;
