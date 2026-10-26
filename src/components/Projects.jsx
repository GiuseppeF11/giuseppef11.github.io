import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Projects.css";
import "./shared/Card.css";
import { MdOutlineArrowOutward, MdSearch, MdClose, MdSearchOff, MdOutlineMenuBook } from "react-icons/md";
import { projects } from "../data/projects";

const FILTER_TAGS = ["Tutti", "React.js", "Vue.js", "Laravel", "JavaScript", "HTML", "CSS", "Docker", "AWS", "Claude"];

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Anteprima animata: WebM (più leggero) con fallback MP4, il poster resta visibile finché carica
function ProjectVideo({ video, poster, className, controls = false }) {
  return (
    <video
      className={className}
      poster={poster}
      autoPlay={!controls}
      controls={controls}
      muted
      loop
      playsInline
      aria-hidden={!controls}
    >
      <source src={video.webm} type="video/webm" />
      <source src={video.mp4} type="video/mp4" />
    </video>
  );
}

function Projects() {
  const [search, setSearch] = useState("");
  const [activeTags, setActiveTags] = useState([]);
  const [modal, setModal] = useState(null);
  // Il video della card viene montato (e scaricato) solo al passaggio del mouse
  const [previewing, setPreviewing] = useState(null);

  const startPreview = (project) => {
    if (project.video && !reducedMotion()) setPreviewing(project.name);
  };

  const toggleTag = (tag) => {
    if (tag === "Tutti") { setActiveTags([]); return; }
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setModal(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modal]);

  const endYear = (date) => parseInt(date.split(" - ").pop());
  const sorted = [...projects].sort((a, b) => endYear(b.date) - endYear(a.date));

  const filtered = sorted.filter((p) => {
    const matchTag = activeTags.length === 0 || activeTags.some((t) => p.categories.includes(t));
    const q = search.toLowerCase().trim();
    const matchSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.categories.some((c) => c.toLowerCase().includes(q));
    return matchTag && matchSearch;
  });

  return (
    <>
      {/* ── Barra di ricerca ── */}
      <div className="proj-search-row" data-aos="fade-up">
        <span className="search-icon" aria-hidden="true"><MdSearch /></span>
        <input
          className="proj-search-input"
          aria-label="Cerca progetti"
          placeholder="Cerca per nome, descrizione o tecnologia…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button className="search-clear" aria-label="Cancella ricerca" onClick={() => setSearch("")}>
            <MdClose aria-hidden="true" />
          </button>
        )}
      </div>

      {/* ── Filtri tag ── */}
      <div className="proj-filter-bar" data-aos="fade-up">
        {FILTER_TAGS.map((t) => (
          <button
            key={t}
            className={`proj-filter-btn ${t === "Tutti" ? activeTags.length === 0 ? "active" : "" : activeTags.includes(t) ? "active" : ""}`}
            onClick={() => toggleTag(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ── Contatore risultati ── */}
      <div className="proj-results-info" data-aos="fade-up">
        <span className="proj-results-dot" />
        <span>
          {filtered.length} progett{filtered.length === 1 ? "o" : "i"}
          {activeTags.length > 0 ? ` in ${activeTags.join(", ")}` : ""}
          {search ? ` per "${search}"` : ""}
        </span>
      </div>

      {/* ── Grid ── */}
      <div className="proj-grid">
        {filtered.length === 0 && (
          <div className="proj-empty" data-aos="fade-up">
            <MdSearchOff className="proj-empty-icon" aria-hidden="true" />
            Nessun progetto trovato per questa ricerca.
          </div>
        )}
        {filtered.map((project, index) => (
          <div
            key={index}
            className="proj-card card"
            data-aos="fade-up"
            data-aos-delay={index * 40}
            role="button"
            tabIndex={0}
            aria-label={`Apri dettagli: ${project.name}`}
            onClick={() => setModal(project)}
            onKeyDown={(e) => e.key === "Enter" && setModal(project)}
            onMouseEnter={() => startPreview(project)}
            onMouseLeave={() => setPreviewing(null)}
            onFocus={() => startPreview(project)}
            onBlur={() => setPreviewing(null)}
          >
            <div className="proj-card-thumb">
              <img
                src={project.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="proj-card-img"
              />
              {previewing === project.name && (
                <ProjectVideo
                  video={project.video}
                  poster={project.image}
                  className="proj-card-img proj-card-video"
                />
              )}
              <div className="proj-card-year">{project.date}</div>
            </div>
            <div className="proj-card-body">
              <h3 className="proj-card-name title">
                {project.name.length > 30
                  ? `${project.name.slice(0, 30)}…`
                  : project.name}
                <span className="proj-card-arrow">
                  <MdOutlineArrowOutward />
                </span>
              </h3>
              <p className="proj-card-desc">{project.description}</p>
              <div className="proj-card-tags">
                {project.categories.map((cat, i) => (
                  <span key={i} className="badge whitespace-nowrap text-xs">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Modal (portal → document.body, bypassa transform degli antenati) ── */}
      {modal && createPortal(
        <div className="proj-modal-backdrop" onClick={() => setModal(null)}>
          <div
            className="proj-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="proj-modal-img-wrap">
              {modal.video ? (
                <ProjectVideo
                  video={modal.video}
                  poster={modal.image}
                  className="proj-modal-img"
                  controls={reducedMotion()}
                />
              ) : (
                <img
                  src={modal.image}
                  alt={modal.name}
                  className="proj-modal-img"
                />
              )}
              <div className="proj-modal-img-overlay" />
            </div>
            <div className="proj-modal-body">
              <h2 className="proj-modal-name">{modal.name}</h2>
              <p className="proj-modal-meta">
                {modal.date} · {modal.categories.join(", ")}
              </p>
              <p className="proj-modal-desc">{modal.description}</p>
              <div className="proj-modal-tags">
                {modal.categories.map((cat, i) => (
                  <span key={i} className="badge whitespace-nowrap text-xs">
                    {cat}
                  </span>
                ))}
              </div>
              {modal.documentations.length > 0 && (
                <div className="proj-modal-docs">
                  <p className="proj-modal-docs-title">Librerie e strumenti</p>
                  <div className="proj-modal-docs-list">
                    {modal.documentations.map((doc, i) => (
                      <a
                        key={i}
                        href={doc.url}
                        target="_blank"
                        rel="noreferrer"
                        className="link whitespace-nowrap text-sm flex items-center gap-2"
                      >
                        <MdOutlineMenuBook aria-hidden="true" /> {doc.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
              <div className="proj-modal-actions">
                <a
                  href={modal.link}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-modal-btn-primary"
                >
                  <MdOutlineArrowOutward aria-hidden="true" /> Visita progetto
                </a>
                <button
                  className="proj-modal-btn-close"
                  onClick={() => setModal(null)}
                >
                  <MdClose aria-hidden="true" /> Chiudi
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Projects;