import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Code2 } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface Project {
  title: string;
  tech: string;
  desc: string;
  demo: string;
  github: string;
  gradient: string;
  blob: string;
}

function MagazineCard({ p }: { p: Project }) {
  const screenshotUrl = p.demo
    ? `https://api.microlink.io/?url=${encodeURIComponent(p.demo)}&screenshot=true&meta=false&embed=screenshot.url`
    : null;

  return (
    <div
      className="snap-center shrink-0 w-[300px] md:w-[380px] relative overflow-hidden rounded-[32px] shadow-xl group cursor-default"
      style={{ height: '460px' }}
    >
      {/* ── Background layer: screenshot or gradient fallback ── */}
      <div className="absolute inset-0">
        {screenshotUrl ? (
          <img
            src={screenshotUrl}
            alt={`${p.title} preview`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${p.gradient}`} />
        )}
      </div>

      {/* ── Gradient overlay: dark at bottom, transparent at top ── */}
      {/* Default: gradient covers ~65% from bottom */}
      {/* Hover: gradient shrinks, revealing more of the screenshot */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: 'linear-gradient(to top, rgba(15,5,30,0.97) 0%, rgba(15,5,30,0.82) 45%, rgba(15,5,30,0.3) 65%, transparent 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(to top, rgba(15,5,30,0.98) 0%, rgba(15,5,30,0.75) 35%, transparent 60%)',
        }}
      />

      {/* ── Tech badge – top left ── */}
      <div className="absolute top-5 left-5 z-10">
        <span className="inline-flex flex-wrap gap-1 items-center">
          {p.tech.split(' · ').map((tag) => (
            <span key={tag} className="inline-block bg-purple-950/80 backdrop-blur-md border border-purple-700/50 text-amber-300 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </span>
      </div>

      {/* ── Content – pinned to bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 flex flex-col gap-3">
        <h3 className="font-serif text-2xl md:text-[26px] text-white leading-tight tracking-tight">
          {p.title}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {p.desc}
        </p>

        {/* ── Buttons ── */}
        <div className="flex gap-3 mt-1 pt-3 border-t border-white/10">
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex justify-center items-center gap-2 text-sm font-semibold text-purple-950 bg-gradient-to-r from-white to-purple-100 hover:from-amber-300 hover:to-amber-400 hover:text-purple-950 py-2.5 rounded-full transition-all duration-300 shadow-lg"
            >
              Live Demo <ArrowRight className="w-4 h-4" />
            </a>
          )}
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 shrink-0 flex justify-center items-center text-white border border-white/30 hover:bg-white/20 rounded-full transition-colors duration-300 backdrop-blur-sm"
          >
            <Code2 className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const ref = useInViewAnimation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: "Maison Dorée Jewelry",
      tech: "React · JavaScript · Tailwind · Vite",
      desc: "Architected a luxury e-commerce SPA for a gold jewelry boutique, migrating a static HTML/CSS template into a fully reactive React 18 app. Built a reusable component library and achieved 18 automated tests across 8 test suites.",
      demo: "https://ecommerce-maison-doree-jewelry.vercel.app/",
      github: "https://github.com/NgocHuyen2309/Ecommerce_Maison_Doree_Jewelry.git",
      gradient: "from-rose-200 to-pink-300",
      blob: ""
    },
    {
      title: "Surface Defect Detection",
      tech: "React · JavaScript · Node.js · Python · Azure",
      desc: "Developed a full-stack defect identification web application, integrating morphological image processing algorithms and machine learning classification.",
      demo: "https://fabricfrontend2309.z7.web.core.windows.net/",
      github: "https://github.com/ngochuyen2309/imagepa_final_project",
      gradient: "from-amber-200 to-orange-300",
      blob: ""
    },
    {
      title: "Global Security Risk Intelligence",
      tech: "React · JavaScript · Tailwind · Axios · Java",
      desc: "Developed a comprehensive security dashboard using ReactJS and Axios to visualize and analyze global risk intelligence data.",
      demo: "https://stgtdplatform-secondary.z7.web.core.windows.net/",
      github: "https://github.com/MinhTri-boop/Final_Project_DataMining",
      gradient: "from-sky-200 to-purple-300",
      blob: ""
    },
    {
      title: "Social Network Fraud Detection",
      tech: "Python · NetworkX · Pandas",
      desc: "Established Data Science pipeline, engineered Baseline Model via OOP, and applied Louvain algorithm with PageRank for fraud ring community detection.",
      demo: "",
      github: "https://github.com/NgocHuyen2309/Social_Network_Fraud_Detection.git",
      gradient: "from-fuchsia-200 to-rose-300",
      blob: ""
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" ref={ref} className="min-h-screen snap-start w-full bg-white py-24 px-6 opacity-0 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-purple-50/50 -rotate-3" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="inline-block font-serif text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-purple-800 via-amber-400 to-fuchsia-600 animate-gradient mb-4 tracking-tight px-6 py-2 bg-purple-100/30 rounded-full border border-purple-200/50">
              Featured Projects
            </h2>
            <p className="text-lg text-purple-900/70 max-w-xl">
              A showcase of my recent engineering work, blending beautiful UI with robust data flows.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-900 hover:bg-purple-200 hover:scale-110 transition-all"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-purple-950 flex items-center justify-center text-white hover:bg-purple-800 hover:scale-110 transition-all shadow-md shadow-purple-900/30"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-4 -mx-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((p, i) => (
            <MagazineCard key={i} p={p} />
          ))}
        </div>

      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
