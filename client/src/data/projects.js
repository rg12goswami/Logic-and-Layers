import khevaimage from "../assets/kheva.png";
import gtecimage from "../assets/gtec.png";
import braincruiseimage from "../assets/braincruise.png";
import portfolioimage from "../assets/portfolio.png";
import qbtravelsimage from "../assets/qbtravels.png";

export const projects = [
  {
    id: "kheva",
    name: "KHEVA",
    tagline: "Premium Sports & Fitness Equipment, Built to Perform.",
    description:
      "A modern e-commerce platform for sports and fitness equipment, featuring product discovery, detailed product pages.",
    image:khevaimage,
    liveUrl: "https://kheva.in",
    size: "medium",
  },
  {
    id: "braincruise",
    name: "Brain Cruise",
    tagline: "Building AI-Ready Businesses & Institutions",
    description:
      "BrainCruise helps businesses and educational institutions adopt AI through practical training, consulting, transformation programs, and future-ready learning solutions.",
    image:braincruiseimage,
    liveUrl: "https://braincruise.in",
    size: "medium",
  },
  {
    id: "gteCouncil",
    name: "GTE Council",
    tagline: "Connecting Businesses to Global Opportunities",
    description:
      "GTEC is a global trade ecosystem that connects businesses, exporters, manufacturers, and industry leaders through international partnerships, market access, trade facilitation, and cross-border opportunities.",
    image:gtecimage,
    liveUrl: "https://gtecouncil.org",
    size: "medium",
  },
  // {
  //   id: "vantage",
  //   name: "Vantage",
  //   tagline: "Analytics suite for a Series B marketing platform",
  //   description:
  //     "Replaced three disconnected reporting tools with one pipeline: ingest, warehouse, and a query layer fast enough for product managers to explore data themselves.",
  //   image:
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
  //   tech: ["React", "Node.js", "ClickHouse", "Docker"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   size: "large",
  // },
  {
    id: "portfolio",
    name: "Portfolio",
    tagline: "Modern Portfolio Experience",
    description:
      "A modern, performance-focused portfolio built to turn professional work into a polished digital experience.",
    image:portfolioimage,
    liveUrl: "https://portfolio-new-sandy-two.vercel.app/",
    size: "medium",
  },
  {
    id: "qbtravels",
    name: "QB Travels",
    tagline: "A premium digital experience for discovering, exploring, and planning unforgettable journeys.",
    description:
      "A premium, responsive travel platform that combines immersive destination discovery, curated packages, and seamless enquiry management.",
    image:qbtravelsimage,
    tech:["Next.js" ,"Node.js" ," Express.js ","MySQL","Cloudinary" ,"Tailwind CSS"],
    liveUrl: " ",
    size: "large",
    
  },
  
];
