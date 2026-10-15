import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import About from "../Components/About";
import ColumnSection from "../Components/ColumnSection";
import AccordionSection from "../Components/AccordionSection";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const columnsRef = useRef(null);
  const accordionsRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    { id: "hero", label: "01 / Overview", ref: heroRef },
    { id: "about", label: "02 / Engineering", ref: aboutRef },
    { id: "columns", label: "03 / Systems", ref: columnsRef },
    { id: "accordion", label: "04 / Platform", ref: accordionsRef },
  ];

  const navigateSection = (direction) => {
    const nextIndex = activeIndex + direction;

    if (nextIndex < 0 || nextIndex >= sections.length) return;

    const target = sections[nextIndex].ref.current;

    if (!target) return;

    const trigger = ScrollTrigger.getAll().find(
      (st) => st.trigger === target && st.vars.pin,
    );

    if (trigger) {
      const destination = direction > 0 ? trigger.end + 1 : trigger.start;

      window.scrollTo({
        top: destination,
        behavior: "smooth",
      });
    } else {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useGSAP(() => {
    const pinSection = (section) => {
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });
    };

    const fadeSection = (
      target,
      trigger,
      {
        fromOpacity = 1,
        toOpacity = 0,
        fromScale = 1,
        toScale = 1,
        start = "top bottom",
        end = "top top",
      } = {},
    ) => {
      if (!target || !trigger) return;

      gsap.fromTo(
        target,
        {
          opacity: fromOpacity,
          scale: fromScale,
        },
        {
          opacity: toOpacity,
          scale: toScale,
          ease: "none",
          scrollTrigger: {
            trigger,
            start,
            end,
            scrub: true,
          },
        },
      );
    };

    fadeSection(
      heroRef.current?.querySelector(".hero-content"),
      aboutRef.current,
      {
        fromScale: 1,
        toScale: 0.85,
      },
    );

    fadeSection(aboutRef.current, columnsRef.current, {
      toOpacity: 0.45,
      toScale: 0.95,
    });

    sections.forEach((section, index) => {
      const element = section.ref.current;

      if (!element) return;

      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      });
    });

    // ScrollTrigger.create({
    //   trigger: heroRef.current,
    //   start: "top top",
    //   end: "bottom top",
    //   pin: true,
    //   pinSpacing: false,
    // });
    // gsap.to(".hero-content", {
    //   opacity: 0,
    //   scale: 0.85,
    //   scrollTrigger: {
    //     trigger: aboutRef.current,
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: true,
    //   },
    // });
    // gsap.fromTo(
    //   ".about-bg",
    //   {
    //     scale: 1.35,
    //   },
    //   {
    //     scale: 1,
    //     scrollTrigger: {
    //       trigger: aboutRef.current,
    //       start: "top bottom",
    //       end: "top top",
    //       scrub: true,
    //     },
    //   },
    // );
    // About pining
    // ScrollTrigger.create({
    //   trigger: aboutRef.current,
    //   start: "top top",
    //   end: "bottom top",
    //   pin: true,
    //   pinSpacing: false,
    // });
    // gsap.fromTo(
    //   ".about-content",
    //   {
    //     opacity: 1,
    //     scale: 1,
    //   },
    //   {
    //     opacity: 0.45,
    //     scale: 0.95,
    //     scrollTrigger: {
    //       trigger: columnsRef.current,
    //       start: "top bottom",
    //       end: "top top",
    //       scrub: true,
    //     },
    //   },
    // );

    pinSection(heroRef.current);
    pinSection(aboutRef.current);
    pinSection(columnsRef.current);
  });
  return (
    <div>
      <Nav
        sections={sections}
        activeIndex={activeIndex}
        onNavigate={navigateSection}
      />
      <Hero sectionRef={heroRef} />
      <About sectionRef={aboutRef} />
      <ColumnSection sectionRef={columnsRef} />
      <AccordionSection sectionRef={accordionsRef} />
    </div>
  );
};

export default Home;
