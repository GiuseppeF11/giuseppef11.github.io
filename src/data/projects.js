// Per aggiungere un progetto, copia questo schema e aggiungilo all'array:
// {
//   date: "YYYY" | "YYYY - YYYY",
//   name: "Nome Progetto",
//   description: "Descrizione breve",
//   link: "https://...",
//   image: ImportedImage,   // importa l'immagine sopra e metti qui la variabile
//   documentations: [{ name: "LibraryName", url: "https://..." }],
//   categories: ["Tech1", "Tech2"],
// }

import CurrencyConverter from "../assets/projects/Currency Converter.png";
import Fastbites from "../assets/projects/Fastbites.png";
import Meridiano from "../assets/projects/Meridiano.png";
import Portfolio from "../assets/projects/Portfolio.png";
import VendorVideo from "../assets/projects/VendorVideo.gif";
import DashboardVideo from "../assets/projects/DashboardVideo.gif";
import MeteoApp from "../assets/projects/meteo-app-tutorial.gif";
import Spotify from "../assets/projects/Spotify.png";
import Myflix from "../assets/projects/Myflix.png";

export const projects = [
  {
    date: "2025 - 2026",
    name: "Vendor",
    description:
      "Qualifica, verifica della compliance, onboarding e monitoraggio delle performance dei fornitori gestite in un unico flusso centralizzato, sempre aggiornato e accessibile.",
    link: "https://timeflow.it/soluzione/vendor-management-platform",
    image: DashboardVideo,
    documentations: [],
    categories: ["Laravel", "Docker", "AWS", "Claude"],
  },
  {
    date: "2025 - 2026",
    name: "Workforce",
    description:
      "Gestione delle richieste dei clienti in un'unica piattaforma e sistema di matching per l'assegnazione delle risorse ai progetti",
    link: "https://timeflow.it/soluzione/workforce-management-platform",
    image: VendorVideo,
    documentations: [],
    categories: ["Laravel", "Docker", "AWS", "Claude"],
  },
  {
    date: "2024",
    name: "MeteoApp",
    description:
      "App meteo essenziale per avere un prospetto rapido delle condizioni meteo della giornata e settimana",
    link: "https://meteo-app-ashy.vercel.app/",
    image: MeteoApp,
    documentations: [
      { name: "React Icons", url: "https://react-icons.github.io/react-icons/" },
      { name: "OpenStreetMap", url: "https://www.openstreetmap.org/#map=6/42.09/12.56" },
      { name: "Weather API", url: "https://www.visualcrossing.com/weather-api/" },
    ],
    categories: ["React.js"],
  },
  {
    date: "2024",
    name: "Portfolio",
    description:
      "Un sito portfolio per presentarmi con le mie esperienze ed alcuni dei miei progetti.",
    link: "https://github.com/GiuseppeF11/Portfolio",
    image: Portfolio,
    documentations: [
      { name: "React Icons", url: "https://react-icons.github.io/react-icons/" },
      { name: "Tailwind", url: "https://tailwindcss.com/" },
    ],
    categories: ["React.js"],
  },
  {
    date: "2024",
    name: "Meridiano",
    description:
      "App per pianificare ed organizzare viaggi, rivivere avventure passate a sfogliare gli album dei ricordi.",
    link: "https://github.com/GiuseppeF11/travel-app",
    image: Meridiano,
    documentations: [
      { name: "Swiper", url: "https://swiperjs.com/" },
      { name: "AOS.js", url: "https://michalsnik.github.io/aos/" },
      { name: "Bootstrap", url: "https://getbootstrap.com/" },
      { name: "FontAwesome", url: "https://fontawesome.com/" },
    ],
    categories: ["Laravel", "Blade"],
  },
  {
    date: "2024",
    name: "Myflix",
    description:
      "Sito per consultare la più vasta libreria cinematografica, visualizzare i rispettivi trailer e creare una lista preferiti.",
    link: "https://myflix-livid-theta.vercel.app/",
    image: Myflix,
    documentations: [
      { name: "The Movie DB", url: "https://www.themoviedb.org/" },
      { name: "Swiper", url: "https://swiperjs.com/" },
      { name: "Bootstrap", url: "https://getbootstrap.com/" },
      { name: "FontAwesome", url: "https://fontawesome.com/" },
    ],
    categories: ["Vue.js", "HTML", "CSS", "JavaScript"],
  },
  {
    date: "2024",
    name: "Currency Converter",
    description:
      "Web-App per eseguire la conversione delle valute sfruttando i dati forniti dalla Banca Centrale Europea.",
    link: "https://currency-converter-one-delta.vercel.app/",
    image: CurrencyConverter,
    documentations: [
      { name: "Frankfurter", url: "https://frankfurter.dev/" },
      { name: "Bootstrap", url: "https://getbootstrap.com/" },
      { name: "FontAwesome", url: "https://fontawesome.com/" },
    ],
    categories: ["Vue.js", "HTML", "CSS", "JavaScript"],
  },
  {
    date: "2024",
    name: "Fastbites",
    description: "App di food-delivery ideata per consumatori e ristoratori.",
    link: "https://github.com/alessiopalmieri001/Fast-Bites-Backend-Bf",
    image: Fastbites,
    documentations: [
      { name: "Braintree", url: "https://www.braintreepayments.com/fr" },
      { name: "Bootstrap", url: "https://getbootstrap.com/" },
      { name: "FontAwesome", url: "https://fontawesome.com/" },
    ],
    categories: ["Vue.js", "Laravel"],
  },
  {
    date: "2024",
    name: "Spotify",
    description: "Emulazione della celebre app per la riproduzione musicale.",
    link: "https://github.com/GiuseppeF11/html-css-spotifyweb",
    image: Spotify,
    documentations: [],
    categories: ["HTML", "CSS"],
  },
];
