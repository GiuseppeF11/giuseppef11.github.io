import { studies } from "../data/studies";
import { sortByEndDateDesc } from "../utils/dateUtils";
import TimelineCard from "./shared/TimelineCard";

const Studies = () => {
  const sorted = sortByEndDateDesc(studies);

  return (
    <ol className="timeline">
      {sorted.map((study, index) => (
        <TimelineCard key={index} item={study} />
      ))}
    </ol>
  );
};

export default Studies;
