import { useState, useEffect } from "react";
import "./Projects.css";
import "./shared/Card.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import { projects } from "../data/projects";

const FILTER_TAGS = ["Tutti", "React.js", "Vue.js", "Laravel", "JavaScript", "HTML", "CSS", "Docker", "AWS", "Claude"];

function Projects() {
  const [search, setSearch] = useState("");
  const [activeTags, setActiveTags] = useState([]);
  const [modal, setModal] = useState(null);

  const toggleTag = (tag) => {
    if (tag === "Tutti") { setActiveTags([]); return; }
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Chiude il modal con Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setModal(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = projects.filter((p) => {
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
        <span className="search-icon">🔍</span>
        <input
          className="proj-search-input"
          placeholder="Cerca per nome, descrizione o tecnologia…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button className="search-clear" onClick={() => setSearch("")}>
            ✕
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
            <div className="proj-empty-icon">🔭</div>
            Nessun progetto trovato per questa ricerca.
          </div>
        )}
        {filtered.map((project, index) => (
          <div
            key={index}
            className="proj-card card card--bg"
            style={{ '--tc-bg': `url(${project.image})` }}
            data-aos="fade-up"
            data-aos-delay={index * 40}
            onClick={() => setModal(project)}
          >
            <div className="proj-card-year">{project.date}</div>
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

      {/* ── Modal ── */}
      {modal && (
        <div className="proj-modal-backdrop" onClick={() => setModal(null)}>
          <div
            className="proj-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="proj-modal-img-wrap">
              <img
                src={modal.image}
                alt={modal.name}
                className="proj-modal-img"
              />
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
                        ⌥ {doc.name}
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
                  ↗ Visita progetto
                </a>
                <button
                  className="proj-modal-btn-close"
                  onClick={() => setModal(null)}
                >
                  ✕ Chiudi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;