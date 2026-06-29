import { socials } from "../data/social";

/**
 * compact=true  → solo icone (barra mobile)
 * compact=false → pill con icona + label (sidebar desktop)
 */
const Social = ({ compact = false }) => {
  if (compact) {
    return (
      <>
        {socials.map(({ name, Icon, url }) => (
          <a
            key={name}
            data-aos="fade-down"
            target="_blank"
            rel="noreferrer"
            href={url}
            aria-label={name}
            className="text-gray-400 hover:text-[#52ced0] transition-colors duration-200"
          >
            <Icon />
          </a>
        ))}
      </>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {socials.map(({ name, Icon, url }) => (
        <a
          key={name}
          data-aos="fade-up"
          target="_blank"
          rel="noreferrer"
          href={url}
          className="flex items-center gap-3 px-3 py-2 rounded-lg w-fit
                     text-gray-400 text-sm
                     hover:text-[#52ced0] hover:bg-[#183756]/50
                     transition-all duration-200"
        >
          <Icon className="text-base flex-shrink-0" />
          <span>{name}</span>
        </a>
      ))}
    </div>
  );
};

export default Social;
