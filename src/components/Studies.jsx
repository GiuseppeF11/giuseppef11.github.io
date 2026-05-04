import { studies } from "../data/studies";
import { sortByEndDateDesc } from "../utils/dateUtils";
import TimelineCard from "./shared/TimelineCard";

const Studies = () => {
  const sorted = sortByEndDateDesc(studies);

  return (
    <>
      {sorted.map((study, index) => (
        <TimelineCard key={index} item={study} />
      ))}
    </>
  );
};

export default Studies;
