import { useEffect } from "react";
import RightSide from "./components/RightSide.jsx";
import LeftSide from "./components/LeftSide.jsx";
import "./App.css";

function App() {
  useEffect(() => {
    // Controlla se il dispositivo corrente è un PC (con puntatore preciso)
    const isDesktop = window.matchMedia("(pointer: fine)").matches;

    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      // Considera lo scroll della pagina per avere le coordinate corrette
      const x = e.clientX + window.scrollX;
      const y = e.clientY + window.scrollY;

      // Imposta la posizione del gradiente direttamente in pixel
      document.documentElement.style.setProperty(
        "--gradient-position-x",
        `${x}px`
      );
      document.documentElement.style.setProperty(
        "--gradient-position-y",
        `${y}px`
      );
    };

    // Aggiungi l'evento di movimento del mouse
    window.addEventListener("mousemove", handleMouseMove);

    // Rimuovi l'evento al momento dello smontaggio del componente
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="w-full md:px-10 lg:w-3/4 lg:px-0 max-w-5xl lg:m-auto">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="left-side lg:h-screen lg:sticky lg:top-0">
            <LeftSide />
          </div>
          <div>
            <RightSide />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
