import React from "react";
import "../Styles/Main.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Main = () => {
  return (
    <div>
      <section id="about">
        <h1 data-aos="fade-up" data-aos-duration="1500">
          codefifteen
        </h1>
        <p
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
          Providing custom website, mobile, and desktop application development
          services.
        </p>
      </section>
      {/* <section id="projects">
        <h1>Coming Soon.</h1>
      </section> */}
    </div>
  );
};

export default Main;
