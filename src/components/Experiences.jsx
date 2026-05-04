import { useState, useEffect } from "react";
import "./Experiences.css";
import { experiences } from "../data/experiences";
import { sortByEndDateDesc } from "../utils/dateUtils";
import TimelineCard from "./shared/TimelineCard";

const Experiences = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
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
