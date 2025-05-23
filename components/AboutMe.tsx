import AboutList from "./AboutList";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full h-full bg-black text-white py-28 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-16">
        <h1 className="text-3xl uppercase font-semibold text-center">
          Our Mission
        </h1>
        <p className="text-xl md:text-3xl font-medium md:leading-relaxed text-center text-textColor">
          At the {" "}
          <span className="font-bold tracking-wider text-white">
            R.E.A.L. Limbs Lab
          </span>{" "}
          , we are dedicated to developing lower-limb prosthetic technology that is as advanced, 
          useful, and well-integrated as intact human limb anatomy. Ultimately, we are 
          motivated by the goal of enhancing the quality of life of those living with 
          amputation and 
          {" "}
          <span className="font-bold tracking-wider text-white">
            closing the gap between prosthetic and biological limbs
          </span>{" "}
          .
        </p>
{/*         <div className="w-[700px] grid grid-cols-1 md:grid-cols-2 gap-8">
          <AboutList title="Web design" />
          <AboutList title="Graphic & print" />
          <AboutList title="iOS design" />
          <AboutList title="Front-end development" />
          <AboutList title="User experience" />
          <AboutList title="Branding" />
          <AboutList title="Back-end development" />
          <AboutList title="Responsive" />
          <AboutList title="Wordpress Website" />
        </div> */}
      </div>
    </section>
  );
};

export default AboutMe;
