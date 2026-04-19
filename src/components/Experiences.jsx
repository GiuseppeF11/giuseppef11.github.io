import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Experiences.css";
import { TbCertificate } from "react-icons/tb";
import HDI_Certificate from "../assets/documents/HDI.jpeg";

const Experiences = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    const handleChange = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const experiences = [
    {
      start: "03/2025",
      end: "In corso",
      url: "https://marketing.timeflow.it/soluzione-timeflow?utm_source=Google+Ads&utm_medium=Search&utm_campaign=Lower&utm_id=Brand&utm_term=timeflow&utm_campaign=%5BFill_Blank_2024%5D_TimeFlow_Google_Search_IT_Ita_Lower_Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=7114086986&hsa_cam=21666716801&hsa_grp=166889050253&hsa_ad=712293741509&hsa_src=g&hsa_tgt=kwd-552597165568&hsa_kw=timeflow&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwtJ6_BhDWARIsAGanmKdi17Q9e7StW_uYz3RGTlaMJC5GM_4OtDddx8S-RKpBi4kiE22hRlIaAopvEALw_wcB",
      title: "Jr. Backend Developer",
      agency: "Timeflow",
      details:
        "Piattaforma per la ricerca e gestione di fornitori IT",
      documentations: [],
      aos: "fade-up",
      categories: [
        "PHP",
        "Laravel",
        "Docker",
        "AWS",
      ],
    },
    {
      start: "09/2022",
      end: "09/2023",
      url: "https://www.instagram.com/aavirzi/",
      title: "Welfare Advisor - Consulente assicurativo",
      agency: "A.A. Virzì Srl",
      details: "Azienda di consulenza assicurativa, finanziaria e brokeraggio.",
      documentations: [
        {
          icon: <TbCertificate />,
          name: "Certificato",
          url: HDI_Certificate,
        },
      ],
      aos: "fade-up",
      categories: [
        "Consulenza",
        "Vendita",
        "Time Management",
        "Problem Solving",
      ],
    },
    {
      start: "2020",
      end: "2021",
      url: "https://www.misericordie.it/",
      title: "Servizio Civile",
      agency: "Misericordia San Leone",
      details: "Servizio come ambulanziere e trasporto disabili",
      documentations: [],
      aos: "fade-up",
      categories: [
        "First Aid",
        "CPR",
        "BLS",
        "Driving Skills",
        "Stress Management",
      ],
    },
  ];

  // Funzione per convertire una stringa MM/YYYY in un oggetto Date
  const convertToDate = (dateStr) => {
    const [month, year] = dateStr.split("/");
    return new Date(`${year}-${month}-01`);
  };

  // Funzione per ordinare le esperienze in base alla data di fine
const sortedExperiences = experiences.sort((a, b) => {
  // Se una delle esperienze è "In corso", mettila per prima
  if (a.end === "In corso") return -1;
  if (b.end === "In corso") return 1;

  const dateA = convertToDate(a.end);
  const dateB = convertToDate(b.end);

  // Ordina normalmente per la data
  return dateB - dateA;
});

  return (
    <>
      {sortedExperiences.map((experience, index) => (
        <div data-aos="fade-up" key={index}>
          <a
            target="_blank"
            href={experience.url}
            className={`card grid grid-flow-col gap-5 my-5 p-8 transition-all duration-300 ${
              isDesktop && hoveredIndex !== null && hoveredIndex !== index
                ? "brightness-50"
                : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="date w-40 font-semibold h-10 text-gray-500 flex items-center max-md:justify-center lg:justify-start overflow-hidden max-xl:hidden ">
              {experience.start}
              <span className="line bg-gray-500"></span>
              {experience.end}
            </div>
            <div>
              <h3 className="title text-lg font-bold">{experience.title}</h3>
              <h5 className="text-sm font-semibold text-gray-400 lg:mb-5">
                {experience.agency}
              </h5>
              <div className="date font-semibold h-10 text-gray-500 flex items-center max-md:justify-center lg:justify-start overflow-hidden mb-4 xl:hidden">
                {experience.start}
                <span className="line bg-gray-500"></span>
                {experience.end}
              </div>
              <p className="text-sm mb-3">{experience.details}</p>
              <div className="documentations flex flex-wrap text-center gap-3 mb-3 max-md:justify-center">
                {experience.documentations.map((doc, i) => (
                  <a
                    target="_blank"
                    href={doc.url}
                    className="link whitespace-nowrap text-sm flex items-center gap-2"
                    key={i}
                  >
                    {doc.icon} {doc.name}
                  </a>
                ))}
              </div>
              <div className="categories flex flex-wrap text-center gap-3 max-md:justify-center">
                {experience.categories.map((category, i) => (
                  <span className="badge whitespace-nowrap text-xs" key={i}>
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default Experiences;
