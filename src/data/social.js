// Per aggiungere un social, copia questo schema:
// { name: "Nome", Icon: ComponenteIcona, url: "https://..." }
// Importa l'icona da react-icons (https://react-icons.github.io/react-icons/)

import { FaGithub, FaLinkedin, FaInstagram, FaFileDownload } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import CV from "../assets/documents/Giuseppe Failla CV.pdf";

export const socials = [
  {
    name: "Github",
    Icon: FaGithub,
    url: "https://github.com/GiuseppeF11",
  },
  {
    name: "Linkedin",
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/giuseppe-failla-96a759194/",
  },
  {
    name: "Codewars",
    Icon: SiCodewars,
    url: "https://www.codewars.com/users/GiuseppeF11",
  },
  {
    name: "Instagram",
    Icon: FaInstagram,
    url: "https://www.instagram.com/giuseppefailla00/",
  },
  {
    name: "CV",
    Icon: FaFileDownload,
    url: CV,
  },
];
