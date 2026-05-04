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
      const threshold = window.innerHeight * 0.25;
      let current = sections[0].id;

      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="routes-list max-lg:hidden">
      {sections.map((section) => (
        <a
          key={section.id}
          onClick={() => handleClick(section.id)}
          className={`route flex items-center ${activeSection === section.id ? "active" : ""}`}
          style={{ cursor: "pointer" }}
        >
          <div className="line" />
          <span>{section.name}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
