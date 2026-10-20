import { MdOutlineEmail } from "react-icons/md";
import { socials } from "../data/social";
import AvailabilityBadge from "./shared/AvailabilityBadge";

const EMAIL = "faillagiuseppe13@gmail.com";
const GMAIL_URL = `https://mail.google.com/mail/?view=cm&to=${EMAIL}`;

const Contact = () => (
  <div data-aos="fade-up" className="space-y-8">

    {/* Badge disponibilità */}
    <AvailabilityBadge className="max-md:w-full max-md:justify-center" />

    {/* Testo */}
    <p className="text-muted text-sm leading-relaxed max-md:text-center">
      Hai un progetto in mente o vuoi semplicemente conoscermi meglio?
      Scrivimi — rispondo sempre.
    </p>

    {/* CTA email */}
    <div className="flex flex-col max-md:items-center gap-3">
      <a
        href={GMAIL_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-card
                   bg-line border border-accent text-accent
                   font-semibold text-sm w-fit
                   hover:bg-accent hover:text-night
                   transition-colors duration-200"
      >
        <MdOutlineEmail className="text-lg" />
        Scrivimi una mail
      </a>
      <span className="text-subtle text-xs tracking-wide">{EMAIL}</span>
    </div>

    {/* Divisore */}
    <div className="flex items-center gap-4">
      <div className="flex-1 h-px bg-line" />
      <span className="text-subtle text-xs whitespace-nowrap">o trovami su</span>
      <div className="flex-1 h-px bg-line" />
    </div>

    {/* Social links */}
    <div className="flex flex-wrap gap-3 max-md:justify-center">
      {socials.map(({ name, Icon, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-control
                     border border-line text-muted text-sm
                     hover:border-accent hover:text-accent
                     transition-colors duration-200"
        >
          <Icon className="text-base" />
          {name}
        </a>
      ))}
    </div>

  </div>
);

export default Contact;
