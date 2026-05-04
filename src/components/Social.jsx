import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { socials } from "../data/social";

const Social = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

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
