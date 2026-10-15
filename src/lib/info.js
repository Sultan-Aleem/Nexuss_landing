import col1 from "../assets/images/exp1.jpg";
import col2 from "../assets/images/exp2.jpg";
import col3 from "../assets/images/exp3.jpg";
import col4 from "../assets/images/exp4.jpg";

import acc1 from "../assets/images/accc1.jpg";
import acc2 from "../assets/images/accc2.jpg";
import acc3 from "../assets/images/accc3.jpg";
import { img } from "motion/react-client";

const stats = [
  { label: "Efficiency", value: 98.4, suffix: "%" },
  { label: "Thermal Delta", value: -12.6, suffix: " C" },
  { label: "Sync Latency", value: 0.8, suffix: " ms" },
];

const columns = [
  {
    id: "A.01",
    tag: "Compute",
    title: "Core Array",
    label: "Core Array",
    desc: "Sixty-four hot-swappable compute blades aligned on a single milled spine.",
    img: col1,
  },
  {
    id: "A.02",
    tag: "Cooling",
    title: "Fluidics Loop",
    label: "Fluidics",
    desc: "A sealed dielectric loop moves heat away from the silicon, quietly and continuously.",
    img: col2,
  },
  {
    id: "A.03",
    tag: "Energy",
    title: "Power Grid",
    label: "Power Grid",
    desc: "Redundant rails balance load across every node without a single point of failure.",
    img: col3,
  },
  {
    id: "A.04",
    tag: "Network",
    title: "Sync Layer",
    label: "Sync Layer",
    desc: "A dedicated timing plane keeps every module on one clock, end to end.",
    img: col4,
  },
];

const accordionInfo = [
  {
    id: "01.",
    title: "core",
    text: "The structural height of the Nexus. A milled aluminum frame that locates every module to within five microns.",
    figinfo: "FIG. 01 / CORE FRAME",
    img: acc1,
  },
  {
    id: "02.",
    title: "fluid",
    text: "Quick-disconnect mainfolds route coolant through the chassis without a single exposed line.",
    figinfo: "FIG. 02 / FLUIDICS MANIFOLD",
    img: acc2,
  },
  {
    id: "03.",
    title: "sync",
    text: "A dedicated timing plane distributes a single clock to all nodes, end to end, rack to rack.",
    figinfo: "FIG. 03 / SYNC TIMING PLANE",
    img: acc3,
  },
];

export { stats, columns, accordionInfo };
