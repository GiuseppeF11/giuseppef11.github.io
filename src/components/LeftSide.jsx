import "./LeftSide.css";
import Navbar from "./Navbar";
import AvailabilityBadge from "./shared/AvailabilityBadge";
import { MdFileDownload, MdOutlineEmail } from "react-icons/md";
import { skills } from "../data/skills";
import { profile } from "../data/profile";

const LeftSide = ({ onContact }) => (
    <section className="left-container pt-14 md:pt-20 max-md:px-5">

      {/* Blocco superiore: presentazione */}
      <div className="left-top">

        {/* Nome, ruolo e presentazione */}
        <div className="max-md:text-center">
          <AvailabilityBadge className="mb-5" />
          <h1
            data-aos="fade-up"
            className="hero-name max-lg:text-4xl lg:text-5xl font-bold mb-3"
          >
            {profile.name}
          </h1>
          <p data-aos="fade-up" className="role color-water">
            {profile.role}
          </p>
          <p data-aos="fade-up" className="hero-tagline">
            {profile.tagline}
          </p>
        </div>

        {/* CTA */}
        <div data-aos="fade-up" className="hero-actions max-md:justify-center">
          <a
            href={profile.cv}
            download={profile.cvFileName}
            className="hero-btn hero-btn--primary"
          >
            <MdFileDownload aria-hidden="true" />
            Scarica CV
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); onContact?.(); }}
            className="hero-btn hero-btn--ghost lg:hidden"
          >
            <MdOutlineEmail aria-hidden="true" />
            Contattami
          </a>
        </div>

        {/* Carosello skill */}
        <div data-aos="fade-up" className="skills-carousel">
          <div className="carousel-track">
            {[...skills, ...skills].map((skill, i) => (
              <span className={`badge badge-${skill.group} whitespace-nowrap text-xs flex-shrink-0`} key={i}>
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Navbar sezioni — solo desktop */}
        <div data-aos="fade-up">
          <Navbar />
        </div>
      </div>

    </section>
);

export default LeftSide;
