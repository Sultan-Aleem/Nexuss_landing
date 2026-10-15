import { useState } from "react";
import { columns } from "../lib/info.js";
import { motion } from "motion/react";

const ColumnSection = ({ sectionRef }) => {
  const [active, setActive] = useState(null);

  return (
    <section
      id="columns"
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden w-full mx-auto  z-30 bg-white"
    >
      <div>
        <header className="px-6 flex flex-col lg:flex-row lg:justify-between py-2.5 gap-y-2 border-ash/40 border-b">
          <h2 className="font-PlusJakatara text-3xl text-black font-semibold tracking-tight">
            Four systems. One spine.
          </h2>
          <p className="font-jetbrains text-sm tracking-wider font-light text-ash">
            03 / Hover or tap a column
          </p>
        </header>

        {/* content */}
        <div
          className="flex h-[calc(100vh-65px)]  flex-col lg:flex-row"
          onMouseLeave={() => setActive(null)}
        >
          {columns.map((col, i) => {
            return (
              <div
                key={col.id}
                onMouseEnter={() => setActive(i)}
                className={`relative  min-w-0 min-h-0 border-r border-ash/40 p-6 transition-[flex-grow] duration-700 ease-in-out overflow-hidden ${active === i ? "flex-[5]" : "flex-1"}`}
              >
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${col.img})` }}
                  animate={{
                    opacity: active === i ? 1 : 0,
                    scale: active === i ? 1 : 1.12,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                />
                <motion.div
                  className="absolute inset-0 z-10 flex items-center justify-between p-6 lg:flex-col lg:py-6"
                  animate={{ opacity: active === i ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-jetbrains text-xs text-ash/70">
                    {col.id}
                  </span>
                  <span className="font-PlusJakatara text-sm font-semibold uppercase tracking-widest text-black  lg:[writing-mode:vertical-rl]">
                    {col.label}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-lime block" />
                </motion.div>
                <motion.div
                  className="absolute bottom-0 lg:pb-25 left-0 z-10 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white"
                  initial={false}
                  animate={{
                    opacity: active === i ? 1 : 0,
                    y: active == i ? 0 : 24,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: active === i ? 0.3 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <p className="mb-2 font-jetbrains text-xs uppercase tracking-widest text-lime">
                    {col.id} / {col.tag}
                  </p>
                  <h3 className="font-PlusJakatara text-2xl font-semibold">
                    {col.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-white/75">
                    {col.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ColumnSection;
