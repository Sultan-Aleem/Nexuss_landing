import { ChevronUp, ChevronDown } from "lucide-react";
import React from "react";

const Nav = ({ sections, activeIndex, onNavigate }) => {
  const progress =
    sections.length > 1 ? (activeIndex / (sections.length - 1)) * 100 : 0;
  return (
    <nav className="z-50 fixed w-full">
      <div className="fixed bottom-0 border-t border-ash/20 w-full bg-white">
        <div className="flex px-5 justify-between items-center py-4">
          <div className="flex items-center justify-center gap-x-1.5">
            <div className="bg-lime/50 rounded-full block border-ash border size-2.5" />
            <p className="text-md font-jetbrains font-light tracking-wider text-ash">
              Nexus Sysytem
            </p>
          </div>
          {/* Section progress */}
          <div className="relative mx-6 h-0.5 flex-1 bg-ash/30">
            <div
              className="absolute left-0 top-0 h-full bg-lime transition-[width] duration-300"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ash bg-lime transition-[left] duration-300"
              style={{ left: `${progress}%` }}
            />
          </div>
          {/* buttons */}
          <div className="flex items-center justify-center border-l border-ash gap-x-2 pl-3.5">
            <button
              className="border border-ash p-0.5"
              aria-label="Previous section"
              disabled={activeIndex === 0}
              onClick={() => onNavigate(-1)}
            >
              <ChevronUp className="font-light " size={35} />
            </button>
            <button
              className="border border-ash p-0.5"
              aria-label="Next section"
              disabled={activeIndex === sections.length - 1}
              onClick={() => onNavigate(1)}
            >
              <ChevronDown className="font-light" size={35} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
