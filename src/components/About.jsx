import "./About.css";
import "./shared/Card.css";
import "./shared/Timeline.css";
import { abouts } from "../data/about";

const PARAGRAPHS_META = [
  { label: "Chi sono"               },
  { label: "Consulenza assicurativa" },
  { label: "Formazione"              },
  { label: "Timeflow Srl"            },
  { label: "MET-EVOLUTION", current: true },
  { label: "Obiettivi"               },
];

function renderText(text, links) {
  if (!links.length) return text;

  const sorted = links
    .map((l) => ({ ...l, index: text.indexOf(l.word) }))
    .filter((l) => l.index !== -1)
    .sort((a, b) => a.index - b.index);

  const segments = [];
  let cursor = 0;

  for (const { word, url, index } of sorted) {
    if (index > cursor) segments.push(text.slice(cursor, index));

    if (url && url !== "#") {
      segments.push(
        <a key={index} href={url} target="_blank" rel="noreferrer" className="about-link">
          {word}
        </a>
      );
    } else {
      segments.push(
        <span key={index} className="about-highlight">{word}</span>
      );
    }
    cursor = index + word.length;
  }

  if (cursor < text.length) segments.push(text.slice(cursor));
  return segments;
}

const About = () => (
  <ol className="timeline">
    {abouts.map((about, i) => {
      const meta = PARAGRAPHS_META[i] ?? {};
      return (
        <li
          key={i}
          className={`timeline-item${meta.current ? " timeline-item--current" : ""}`}
          data-aos="fade-up"
        >
          <span className="timeline-dot" aria-hidden="true" />
          <div className="card timeline-card timeline-card--static">
            <div className="timeline-head">
              <div className="timeline-logo about-marker" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="min-w-0">
                <h3 className="timeline-title">{meta.label}</h3>
                {meta.current && (
                  <span className="about-current-chip">In corso</span>
                )}
              </div>
            </div>
            <p className="timeline-details about-text">
              {renderText(about.text, about.links)}
            </p>
          </div>
        </li>
      );
    })}
  </ol>
);

export default About;
