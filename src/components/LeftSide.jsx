import "./LeftSide.css";
import Navbar from "./Navbar";
import Social from "./Social";

const LeftSide = () => {

  return (
    <>
      <section className="container pt-14 md:pt-20 max-md:px-5">
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
          <p data-aos="fade-right" className=" md:w-3/4 color-gray mb-5">
            SVILUPPO - SPERIMENTO - CREO
          </p>
        </div>

        <div data-aos="fade-left">
          <Navbar></Navbar>
        </div>

        <div className="flex sites my-5 gap-10 max-lg:hidden">
          <Social></Social>
        </div>
      </section>
    </>
  );
};

export default LeftSide;
