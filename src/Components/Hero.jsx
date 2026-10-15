import React from "react";

const Hero = ({ sectionRef }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden w-full bg-ash/10 mx-auto text-white z-10"
      ref={sectionRef}
    >
      {/* grid */}
      <div className="absolute inset-0 opacity-40 pointer-events-none z-0 grid-lines" />
      {/* content */}
      <div className="hero-content w-full h-screen flex flex-col items-center  justify-center mx-auto px-6  ">
        <div className="flex flex-col items-center justify-center  gap-y-6 translate-y-[-2vh] flex-1">
          <p className="bg-lime text-lg font-jetbrains tracking-widest font-light px-3.5 py-0.5 uppercase">
            Modular Compute Systems
          </p>
          <h1 className="text-ink text-9xl lg:text-[12rem] font-PlusJakatara tracking-tighter font-bold leading-none">
            THE NEXUS
          </h1>
          <p className="text-ash  font-jetbrains text-sm lg:text-md text-center">
            One chassis. Infinite configurations. Precision-engineered <br />
            infrastructure for teams that build at the edge of what hardware{" "}
            <br />
            allows.
          </p>
        </div>
        <p className="text-ash/20 pointer-events-none font-jetbrains tracking-wider text-sm  absolute bottom-24 left-1/2 -translate-x-1/2 ">
          SCROLL TO DESCEND
        </p>
      </div>
    </section>
  );
};

export default Hero;
