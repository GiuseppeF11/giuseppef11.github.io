import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App.jsx";
import "./index.css";

// Il ripristino automatico dello scroll al refresh avviene prima che il layout sia stabile
// e taglia l'inizio della pagina: si riparte sempre dall'alto.
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.scrollTo(0, 0);

AOS.init({ duration: 800, easing: "ease-in-out", once: true });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
