import { MdOutlineEmail } from "react-icons/md";
import { socials } from "../data/social";

const EMAIL = "faillagiuseppe13@gmail.com";
const GMAIL_URL = `https://mail.google.com/mail/?view=cm&to=${EMAIL}`;

const Contact = () => (
  <div data-aos="fade-up" className="space-y-8">

    {/* Badge disponibilità */}
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                    bg-green-900/20 border border-green-500/25 text-green-400
                    text-xs font-medium max-md:w-full max-md:justify-center">
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
      Disponibile per nuove opportunità
    </div>

    {/* Testo */}
    <p className="text-gray-400 text-sm leading-relaxed max-md:text-center">
      Hai un progetto in mente o vuoi semplicemente conoscermi meglio?
      Scrivimi — rispondo sempre.
    </p>

    {/* CTA email */}
    <div className="flex flex-col max-md:items-center gap-3">
      <a
        href={GMAIL_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                   bg-[#183756] border border-[#52ced0] text-[#52ced0]
                   font-semibold text-sm w-fit
                   hover:bg-[#52ced0] hover:text-[#0f172a]
                   transition-colors duration-200"
      >
        <MdOutlineEmail className="text-lg" />
        Scrivimi una mail
      </a>
      <span className="text-gray-500 text-xs tracking-wide">{EMAIL}</span>
    </div>

    {/* Divisore */}
    <div className="flex items-center gap-4">
      <div className="flex-1 h-px bg-[#183756]" />
      <span className="text-gray-600 text-xs whitespace-nowrap">o trovami su</span>
      <div className="flex-1 h-px bg-[#183756]" />
    </div>

    {/* Social links */}
    <div className="flex flex-wrap gap-3 max-md:justify-center">
      {socials.map(({ name, Icon, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg
                     border border-[#183756] text-gray-400 text-sm
                     hover:border-[#52ced0] hover:text-[#52ced0]
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
