import "./About.css";
import { abouts } from "../data/about";

/**
 * Parsa il testo e sostituisce le frasi indicate in `links` con:
 * - <a href target_blank> per URL reali
 * - <span class="highlight"> per url:"#" (enfasi visiva, non cliccabile)
 * Gestisce correttamente frasi multi-parola.
 */
function renderText(text, links) {
  if (!links.length) return text;

  const sorted = links
    .map((l) => ({ ...l, index: text.indexOf(l.word) }))
    .filter((l) => l.index !== -1)
    .sort((a, b) => a.index - b.index);

  const segments = [];
  let cursor = 0;

  for (const { word, url, index } of sorted) {
    if (index > cursor)
      segments.push(text.slice(cursor, index));

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

  if (cursor < text.length)
    segments.push(text.slice(cursor));

  return segments;
}

const About = () => (
  <>
    <div className="mb-10">
      {abouts.map((about, i) => (
        <p key={i} data-aos="fade-up">
          {renderText(about.text, about.links)}
        </p>
      ))}
    </div>

  </>
);

export default About;
