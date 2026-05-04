// Per aggiungere una voce formativa, copia questo schema e aggiungilo all'array:
// {
//   start: "MM/YYYY",          // es. "10/2023"  — usa solo l'anno se non hai il mese: "2014"
//   end: "MM/YYYY",
//   url: "https://...",
//   title: "Titolo Corso / Laurea / Diploma",
//   agency: "Nome Istituto",
//   details: "Breve descrizione (lascia stringa vuota se non serve)",
//   image: require("../assets/..."),  // OPZIONALE — immagine di sfondo della card
//   documentations: [{ Icon: ComponenteIcona, name: "Etichetta", url: "https://..." }],
//   categories: ["Materia1", "Materia2"],
// }

import { TbCertificate } from "react-icons/tb";
import Boolean_Certificate from "../assets/documents/Certificato Boolean.jpg";
import SteveJobsBG from "../assets/studies/steve_jobs_bg.png";
import BooleanBG from "../assets/studies/boolean_bg.png";
import BiotechBG from "../assets/studies/biotech_bg.png";
import LiceoBG from "../assets/studies/liceo_bg.webp";

export const studies = [
  {
    start: "11/2024",
    end: "04/2025",
    url: "https://stevejobs.academy/web-and-mobile-development/",
    title: "Web & Mobile Development",
    agency: "ITS Steve Jobs Academy",
    details:
      "Corso di 1080 ore di lezioni per la progettazione ed implementazione di soluzioni web, mobile app e sistemi in cloud.",
    documentations: [],
    categories: ["React", "Node Js", "Flutter", "MongoDB", "C", "PHP", "Typescript"],
    image: SteveJobsBG,
  },
  {
    start: "10/2023",
    end: "04/2024",
    url: "https://boolean.careers/?_gl=1*1beejpl*_up*MQ..*_ga*MzQ4ODQ1Mzc5LjE3Mjc3ODY0NTA.*_ga_Z7YQ75GL74*MTcyNzc4NjQ0OS4xLjAuMTcyNzc4NjQ0OS4wLjAuMA..",
    title: "Jr Full Stack Web Developer Trainee",
    agency: "Boolean Tech Academy",
    details:
      "Corso intensivo di 700 ore, dedicato allo studio delle principali tecnologie utilizzate nello Sviluppo Web.",
    documentations: [
      { Icon: TbCertificate, name: "Certificato", url: Boolean_Certificate },
    ],
    categories: ["HTML", "CSS", "JavaScript", "Laravel", "Vue.js", "PHP", "MySQL"],
    image: BooleanBG,
  },
  {
    start: "10/2020",
    end: "10/2022",
    url: "https://www.unict.it/it/didattica/lauree-triennali/2023-2024/biotecnologie",
    title: "Corso di Laurea Triennale in Biotecnologie",
    agency: "Univeristà di Catania",
    details: "",
    documentations: [],
    categories: [
      "Biologia Generale",
      "Genetica",
      "Economia Aziendale",
      "Inglese",
      "Informatica",
      "Matematica",
    ],
    image: BiotechBG,
  },
  {
    start: "2014",
    end: "2019",
    url: "https://www.principeumberto.edu.it/",
    title: "Diploma Scientifico",
    agency: "Liceo Scientifico e Linguistico 'Principe Umberto di Savoia' ",
    details: "100/100",
    documentations: [],
    categories: [],
    image: LiceoBG,
  },
];
