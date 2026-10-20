import "./Card.css";
import "./Timeline.css";
import { MdOutlineArrowOutward } from "react-icons/md";

const IN_PROGRESS = "In corso";

// Iniziali dell'ente quando manca il logo: "Università di Catania" → "UC", "Timeflow Srl" → "T"
function initials(name) {
  return name
    .replace(/['"]/g, "")
    .split(/\s+/)
    .filter((w) => /^\p{Lu}/u.test(w) && !/^(srl|s\.r\.l\.|spa)$/i.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

function TimelineCard({ item }) {
  const current = item.end === IN_PROGRESS;

  const openUrl = () => {
    if (item.url) window.open(item.url, "_blank", "noreferrer");
  };

  return (
    <li className={`timeline-item${current ? " timeline-item--current" : ""}`} data-aos="fade-up">
      <span className="timeline-dot" aria-hidden="true" />

      <div
        role={item.url ? "link" : undefined}
        tabIndex={item.url ? 0 : undefined}
        aria-label={item.url ? `${item.title} — ${item.agency}` : undefined}
        onClick={openUrl}
        onKeyDown={(e) => e.key === "Enter" && openUrl()}
        className={`card timeline-card${item.url ? "" : " timeline-card--static"}`}
      >
        <p className="timeline-date">
          <time>{item.start}</time>
          <span aria-hidden="true"> — </span>
          <time className={current ? "timeline-date--current" : undefined}>{item.end}</time>
        </p>

        <div className="timeline-head">
          <div className="timeline-logo" aria-hidden="true">
            {item.logo ? <img src={item.logo} alt="" loading="lazy" /> : initials(item.agency)}
          </div>
          <div className="min-w-0">
            <h3 className="title timeline-title">
              {item.title}
              {item.url && (
                <MdOutlineArrowOutward className="timeline-arrow" aria-hidden="true" />
              )}
            </h3>
            <p className="timeline-agency">{item.agency}</p>
          </div>
        </div>

        {item.details && <p className="timeline-details">{item.details}</p>}

        {item.documentations.length > 0 && (
          <div className="documentations flex flex-wrap gap-3 mb-3">
            {item.documentations.map((doc, i) => (
              <a
                key={i}
                target="_blank"
                href={doc.url}
                rel="noreferrer"
                className="link whitespace-nowrap text-sm flex items-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <doc.Icon aria-hidden="true" /> {doc.name}
              </a>
            ))}
          </div>
        )}

        {item.categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.categories.map((category, i) => (
              <span className="badge whitespace-nowrap text-xs" key={i}>
                {category}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

export default TimelineCard;
