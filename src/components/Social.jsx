import { socials } from "../data/social";

const Social = () => {

  return (
    <>
      {socials.map((app) => (
        <a data-aos="fade-down" target="blank" href={app.url} key={app.name}>
          <app.Icon />
        </a>
      ))}
    </>
  );
};

export default Social;
