// Per aggiungere un'esperienza, copia questo schema e aggiungilo all'array:
// {
//   start: "MM/YYYY",          // es. "03/2025"  — usa solo l'anno se non hai il mese: "2020"
//   end: "MM/YYYY" | "In corso",
//   url: "https://...",
//   title: "Titolo Ruolo",
//   agency: "Nome Azienda",
//   details: "Breve descrizione dell'azienda o del ruolo",
//   image: require("../assets/..."),  // OPZIONALE — immagine di sfondo della card
//   documentations: [{ Icon: ComponenteIcona, name: "Etichetta", url: "https://..." }],
//   categories: ["Skill1", "Skill2"],
// }

import { TbCertificate } from "react-icons/tb";
import HDI_Certificate from "../assets/documents/HDI.jpeg";
import DashboardVideo from "../assets/projects/DashboardVideo.gif";
import InsuranceBG from "../assets/experiences/insurance_bg.jpg";
import ServizioCivileBG from "../assets/experiences/servizio_civile_bg.webp";

export const experiences = [
  {
    start: "03/2025",
    end: "04/2026",
    url: "https://marketing.timeflow.it/soluzione-timeflow?utm_source=Google+Ads&utm_medium=Search&utm_campaign=Lower&utm_id=Brand&utm_term=timeflow&utm_campaign=%5BFill_Blank_2024%5D_TimeFlow_Google_Search_IT_Ita_Lower_Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=7114086986&hsa_cam=21666716801&hsa_grp=166889050253&hsa_ad=712293741509&hsa_src=g&hsa_tgt=kwd-552597165568&hsa_kw=timeflow&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwtJ6_BhDWARIsAGanmKdi17Q9e7StW_uYz3RGTlaMJC5GM_4OtDddx8S-RKpBi4kiE22hRlIaAopvEALw_wcB",
    title: "Junior Backend Developer",
    agency: "Timeflow Srl",
    details: "Piattaforma SaaS di Workforce e Vendor Management basata su AI per la ricerca, selezione e gestione delle risorse da parte per aziende e per fornitori di servizi professionali",
    documentations: [],
    categories: ["PHP", "Laravel", "Docker", "AWS"],
    image: DashboardVideo
  },
  {
    start: "09/2022",
    end: "09/2023",
    url: "https://www.instagram.com/aavirzi/",
    title: "Welfare Advisor - Consulente assicurativo",
    agency: "A.A. Virzì Srl",
    details: "Azienda di consulenza assicurativa, finanziaria e brokeraggio.",
    documentations: [
      { Icon: TbCertificate, name: "Certificato", url: HDI_Certificate },
    ],
    categories: ["Consulenza", "Vendita", "Time Management", "Problem Solving"],
    image: InsuranceBG,
  },
  {
    start: "2020",
    end: "2021",
    url: "https://www.misericordie.it/",
    title: "Servizio Civile",
    agency: "Misericordia San Leone",
    details: "Servizio come ambulanziere e trasporto disabili",
    documentations: [],
    categories: ["First Aid", "CPR", "BLS", "Driving Skills", "Stress Management"],
    image: ServizioCivileBG
  },
];
