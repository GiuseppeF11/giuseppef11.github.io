// Ogni oggetto è un paragrafo della sezione "About".
// "links" evidenzia parole specifiche: url reale = link, url "#" = solo grassetto.
// Tenere al massimo 1-2 evidenze per paragrafo, altrimenti nessuna risalta.
// Per aggiungere un paragrafo, copia lo schema: { text: "...", links: [{ word: "...", url: "..." }] }
export const abouts = [
  {
    text: "Nato a Catania nel 2000, sono sempre stato mosso da una forte curiosità. Prima di avvicinarmi allo sviluppo ho vissuto esperienze molto diverse — lavori manuali, servizio sulle ambulanze durante il COVID — che mi hanno insegnato ad adattarmi, gestire la pressione e relazionarmi con le persone in modo concreto ed empatico.",
    links: [
      { word: "curiosità", url: "#" },
    ],
  },
  {
    text: "Dal 2022 al 2023 ho lavorato come consulente in un'agenzia assicurativa, affinando la capacità di ascoltare, capire i problemi e proporre soluzioni mirate. Un'esperienza che si è rivelata preziosa anche nel lavoro tecnico.",
    links: [
      { word: "proporre soluzioni mirate", url: "#" },
    ],
  },
  {
    text: "Tra il 2023 e il 2024 ho scelto di investire in competenze tecniche concrete, frequentando il corso Full Stack con Boolean e proseguendo all'ITS Steve Jobs Academy. È in questo periodo che Timeflow Srl mi ha contattato per iniziare la mia carriera da Junior Backend Developer.",
    links: [
      { word: "Boolean", url: "https://boolean.careers" },
      { word: "Timeflow Srl", url: "https://timeflow.it/" },
    ],
  },
  {
    text: "In Timeflow ho lavorato per sprint in una startup SaaS, collaborando con i team di design e frontend. Ho gestito in autonomia analisi tecniche, rilasci e segnalazioni, usando Laravel, Docker e AWS.",
    links: [
      { word: "autonomia", url: "#" },
    ],
  },
  {
    text: "Da settembre 2026 sono Technical Support Specialist & Tutor in MET-EVOLUTION: coordino i corsi di formazione in meteorologia su Moodle, supporto docenti e corsisti e contribuisco allo sviluppo del sito aziendale.",
    links: [
      { word: "MET-EVOLUTION", url: "https://www.metevolution.it/" },
    ],
  },
  {
    text: "Nel tempo libero costruisco progetti personali: l'ultimo è DiTacco, una web app PWA per organizzare tornei di calcetto tra amici. Il mio obiettivo è continuare a crescere in contesti sfidanti, puntando a diventare una figura di riferimento in team strutturati e orientati all'innovazione.",
    links: [
      { word: "DiTacco", url: "https://ditacco.it" },
    ],
  },
];
