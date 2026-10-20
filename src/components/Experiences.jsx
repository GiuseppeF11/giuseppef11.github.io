import { experiences } from "../data/experiences";
import { sortByEndDateDesc } from "../utils/dateUtils";
import TimelineCard from "./shared/TimelineCard";

const Experiences = () => {
  const sorted = sortByEndDateDesc(experiences);

  return (
    <ol className="timeline">
      {sorted.map((experience, index) => (
        <TimelineCard key={index} item={experience} />
      ))}
    </ol>
  );
};

export default Experiences;
