import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Code2 } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export function ProjectsSection() {
  const ref = useInViewAnimation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Personal Web Portfolio",
      tech: "ReactJS, Tailwind CSS, Vite",
      desc: "Designed and developed a modern, single-page portfolio application to showcase software engineering projects and technical capabilities.",
      demo: "https://personal-web-portfolio-one.vercel.app/",
      github: "https://github.com/NgocHuyen2309/Personal_Web_Portfolio",
      gradient: "from-purple-200 to-fuchsia-300",
      blob: "40% 60% 70% 30% / 40% 50% 60% 50%"
    },
    {
      title: "Surface Defect Detection",
      tech: "React, Node.js, Python, Azure",
      desc: "Developed a full-stack defect identification web application, integrating morphological image processing algorithms and machine learning classification.",
      demo: "https://fabricfrontend2309.z7.web.core.windows.net/",
      github: "https://github.com/ngochuyen2309/imagepa_final_project",
      gradient: "from-amber-200 to-orange-300",
      blob: "45% 55% 40% 60% / 55% 45% 60% 40%"
    },
    {
      title: "Global Security Risk Intelligence Platform",
      tech: "React, Tailwind CSS, Axios, Java",
      desc: "Developed a comprehensive security dashboard using ReactJS and Axios to visualize and analyze global risk intelligence data.",
      demo: "https://stgtdplatform-secondary.z7.web.core.windows.net/",
      github: "https://github.com/MinhTri-boop/Final_Project_DataMining",
      gradient: "from-sky-200 to-purple-300",
      blob: "30% 70% 70% 30% / 30% 30% 70% 70%"
    },
    {
      title: "Social Network Fraud Detection",
      tech: "Python, NetworkX, Pandas",
      desc: "Established Data Science pipeline, engineered Baseline Model via OOP, and applied Louvain algorithm with PageRank for fraud ring community detection.",
      demo: "",
      github: "https://github.com/NgocHuyen2309/Social_Network_Fraud_Detection.git",
      gradient: "from-fuchsia-200 to-rose-300",
      blob: "50% 50% 60% 40% / 40% 60% 50% 50%"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" ref={ref} className="min-h-screen snap-start w-full bg-white py-24 px-6 opacity-0 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-purple-50/50 -rotate-3" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12 relative z-10">
        
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

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-10 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-16 pt-8 px-4 -mx-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((p, i) => (
            <div 
              key={i} 
              className={`snap-center shrink-0 w-[300px] md:w-[400px] p-8 md:p-10 flex flex-col gap-6 bg-gradient-to-br ${p.gradient} hover:-translate-y-4 transition-all duration-500 shadow-lg`}
              style={{ borderRadius: p.blob }}
            >
              <div>
                <span className="inline-block px-4 py-1.5 bg-white/50 backdrop-blur-sm rounded-full text-xs font-bold text-purple-950 uppercase tracking-wider mb-4 whitespace-normal break-words text-center">
                  {p.tech}
                </span>
                <h3 className="font-serif text-3xl text-purple-950 mb-4 tracking-tight">{p.title}</h3>
                <p className="text-purple-900/80 leading-relaxed font-medium mix-blend-color-burn">
                  {p.desc}
                </p>
              </div>

              <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-6">
                {p.demo && (
                  <a 
                    href={p.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex-1 flex justify-center items-center gap-2 text-sm font-medium text-white bg-purple-950 hover:bg-purple-800 py-3 rounded-full transition-colors shadow-sm"
                  >
                    Live Demo <ArrowRight className="w-4 h-4" />
                  </a>
                )}
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-12 h-12 shrink-0 flex justify-center items-center text-purple-950 bg-white/60 hover:bg-white backdrop-blur-sm rounded-full transition-colors shadow-sm"
                >
                  <Code2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
