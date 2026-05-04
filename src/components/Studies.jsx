import { useState, useEffect } from "react";
import { studies } from "../data/studies";
import { sortByEndDateDesc } from "../utils/dateUtils";
import TimelineCard from "./shared/TimelineCard";

const Studies = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    const handleChange = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const sorted = sortByEndDateDesc(studies);

  return (
    <>
      {sorted.map((study, index) => (
        <TimelineCard
          key={index}
          item={study}
          index={index}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          isDesktop={isDesktop}
        />
      ))}
    </>
  );
};

export default Studies;
