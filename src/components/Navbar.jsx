import { useEffect, useState } from "react";
import "./Navbar.css";

const sections = [
  { id: "about", name: "Chi sono" },
  { id: "experiences", name: "Esperienze" },
  { id: "studies", name: "Formazione" },
  { id: "projects", name: "Progetti" },
  { id: "contact", name: "Contattami" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      // Se siamo in fondo alla pagina, attiva sempre l'ultima sezione
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 80;
      if (nearBottom) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      const threshold = window.innerHeight * 0.25;
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="routes-list max-lg:hidden" aria-label="Sezioni">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(e) => handleClick(e, section.id)}
          aria-current={activeSection === section.id ? "true" : undefined}
          className={`route flex items-center ${activeSection === section.id ? "active" : ""}`}
        >
          <div className="route-line" />
          <span>{section.name}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
