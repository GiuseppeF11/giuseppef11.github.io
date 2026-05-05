import "./LeftSide.css";
import Navbar from "./Navbar";

const LeftSide = () => (
  <>
    <section className="container pt-14 md:pt-20 max-md:px-5">

      {/* Nome e ruolo */}
      <div className="tracking-wider max-md:text-center">
        <h1
          data-aos="fade-right"
          className="max-lg:text-4xl lg:text-5xl font-bold mb-3"
        >
          Giuseppe Failla
        </h1>
        <p data-aos="fade-left" className="role color-water">
          Full-Stack Developer
        </p>
        <p data-aos="fade-right" className="color-gray mb-6">
          SVILUPPO · SPERIMENTO · CREO
        </p>
      </div>

      {/* Navbar sezioni — solo desktop */}
      <div data-aos="fade-left">
        <Navbar />
      </div>

    </section>
  </>
);

export default LeftSide;
