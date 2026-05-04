// Ogni oggetto è un paragrafo della sezione "About".
// "links" evidenzia parole specifiche come link (attualmente tutti puntano a "#").
// Per aggiungere un paragrafo, copia lo schema: { text: "...", links: [{ word: "...", url: "..." }] }
export const abouts = [
  {
    text: "Nato a Catania il 10 dicembre 2000, sono sempre stato estremamente curioso. La mia curiosità ha trovato libero sfogo nella tecnologia e nelle sue mille sfaccettature",
    links: [
      { word: "Catania", url: "#" },
      { word: "tecnologia", url: "#" },
    ],
  },
  {
    text: "Sono appassionato di sports ed e-sports , suono la chitarra, ma soprattutto mi piace fare tante escursioni a piedi, in bici o in moto va bene lo stesso! Vivendo in Sicilia tra mare e montagna le strade da percorrere non mancano!",
    links: [
      { word: "sports", url: "#" },
      { word: "e-sports", url: "#" },
      { word: "escursioni", url: "#" },
      { word: "mare", url: "#" },
      { word: "montagna", url: "#" },
    ],
  },
  {
    text: "Dal 2023 mi occupo di web-development come full-stack developer.",
    links: [
      { word: "web-development", url: "#" },
      { word: "full-stack", url: "#" },
      { word: "developer", url: "#" },
    ],
  },
];
