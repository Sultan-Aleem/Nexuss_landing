import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, animate, useInView } from "motion/react";
import { stats } from "../lib/info";

gsap.registerPlugin(useGSAP);

import bg from "../assets/images/nexus-macro.jpg";

const Stats = ({ label, value, suffix, run }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!run) return;

    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent = v.toFixed(1) + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [run, value, suffix]);

  return (
    <div className="flex items-center justify-between border-b border-white/10 py-3 last:border-b-0">
      <span className="font-jetbrains text-xs uppercase tracking-wider text-white md:text-sm">
        {label}
      </span>
      <span ref={ref} className="font-jetbrains text-xs text-lime md:text-sm">
        {suffix}
      </span>
    </div>
  );
};

const About = ({ sectionRef }) => {
  const stageRef = useRef(null);

  const cardRef = useRef(null);

  const inView = useInView(cardRef, {
    once: true,
    amount: 0.4,
  });

  useGSAP(
    () => {
      const stage = stageRef.current;

      if (!stage) return;

      const rect = stage.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      gsap.set(".ch-v", { x: centerX });
      gsap.set(".ch-h", { y: centerY });
      gsap.set(".ch-dot", {
        x: centerX,
        y: centerY,
        xPercent: -50,
        yPercent: -50,
      });

      const options = {
        duration: 0.45,
        ease: "power3.out",
      };

      const moveVerticalLine = gsap.quickTo(".ch-v", "x", options);
      const moveHorizontalLine = gsap.quickTo(".ch-h", "y", options);
      const moveDotX = gsap.quickTo(".ch-dot", "x", options);
      const moveDotY = gsap.quickTo(".ch-dot", "y", options);

      const handlePointerMove = (event) => {
        const bounds = stage.getBoundingClientRect();

        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;

        moveVerticalLine(x);
        moveHorizontalLine(y);
        moveDotX(x);
        moveDotY(y);
      };

      stage.addEventListener("pointermove", handlePointerMove);

      return () => {
        stage.removeEventListener("pointermove", handlePointerMove);
      };
    },
    { scope: stageRef },
  );

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden w-full mx-auto text-white z-20 about-content"
      ref={sectionRef}
    >
      <div className="relative h-screen w-full">
        <div ref={stageRef} className="absolute inset-0">
          {/* background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat about-bg"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
          <div className="pointer-events-none absolute inset-0">
            {/* vertical line */}
            <div className="ch-v absolute  top-0 h-full w-px  bg-white/40" />

            {/* Horizontal line */}
            <div className="ch-h absolute left-0  h-px w-full  bg-white/40" />

            {/* glowing dot */}
            <div className="ch-dot absolute  h-3 w-3 rounded-full bg-lime shadow-[0_0_24px_8px_rgba(198,255,0,0.55)]" />
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col justify-end h-full gap-y-6 pb-22 lg:pb-0 lg:block px-7 lg:px-0 ">
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:absolute z-10 lg:right-[17%] lg:top-[58%] lg:w-[346px] lg:-translate-y-1/2 border border-ash bg-ink/70 p-5 backdrop-blur-md"
          >
            <div>
              <p>NODE / NX-07 TELEMETRY</p>
              <div>
                {stats.map((stat, i) => (
                  <Stats
                    key={stat.label}
                    label={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    run={inView}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          {/* bottom content */}
          <div className="z-20 lg:absolute lg:bottom-25 flex flex-col lg:left-6">
            <p className="text-lime font-jetbrains tracking-widest font-light text-sm">
              02 / Engineered in the open
            </p>
            <h3 className="font-PlusJakatara text-white  text-5xl font-semibold w-[80%]">
              Every micron is accounted for.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
