import { useState } from "react";
import { accordionInfo } from "../lib/info";
import { motion, AnimatePresence } from "motion/react";

const AccordionSection = ({ sectionRef }) => {
  const [active, setActive] = useState(0);
  return (
    <section
      id="accordion"
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden w-full mx-auto  z-30 bg-white"
    >
      <div className="grid min-h-screen w-full lg:grid-cols-2">
        <div className="bg-dark-bg flex flex-col py-10 w-full h-full px-7 lg:pt-24 gap-y-6">
          <div className="flex flex-col gap-y-4">
            <span className="text-lime font-jetbrains text-lg tracking-wider">
              04 / Inside the platform
            </span>
            <h3 className="text-white text-4xl font-PlusJakatara font-semibold w-1/2">
              Built as a matrix, not a stack.
            </h3>
          </div>
          <div className="">
            {accordionInfo.map((info, i) => {
              const isActive = active === i;
              return (
                <button
                  key={info.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`relative w-full border-l-2 px-5 text-left cursor-pointer flex flex-col gap-y-3 py-5  ${active === i ? "border-l-2 border-l-lime " : "border-ash/30 "}`}
                >
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-0 bg-lime/10 z-0"
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="flex justify-start items-baseline gap-x-5 relative z-10 overflow-hidden">
                    <span
                      className={` text-sm font-jetbrains ${active === i ? "text-lime " : "text-ash "}`}
                    >
                      {info.id}
                    </span>
                    <h3
                      className={`font-PlusJakatara text-2xl font-semibold tracking-wider ${active === i ? "text-white " : "text-ash "}`}
                    >
                      {info.title}
                    </h3>
                  </div>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ y: 3, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="relative overflow-hidden"
                      >
                        <p className="pl-9 pt-2 text-sm leading-relaxed text-white/60">
                          {info.text}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>
        {/* image container */}
        <div className="relative min-h-screen flex-1 overflow-hidden ">
          <AnimatePresence initial={false} mode="sync">
            {active !== null && (
              <motion.div
                key={accordionInfo[active].id}
                initial={{ y: 18 }}
                animate={{ y: 0 }}
                exit={{ y: -8 }}
                transition={{
                  y: {
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className="absolute inset-0"
              >
                <img
                  src={accordionInfo[active].img}
                  alt={accordionInfo[active].title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
              </motion.div>
            )}
          </AnimatePresence>
          {active !== null && (
            <div className="absolute bottom-40 right-0 z-10 text-xs tracking-widest bg-ink/50 text-white/60 px-4 py-2 font-jetbrains backdrop-blur-md border border-white/40">
              {accordionInfo[active].figinfo}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
