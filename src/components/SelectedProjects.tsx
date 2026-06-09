import { ArrowRight } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export function SelectedProjects() {
  const ref = useInViewAnimation();

  const projects = [
    {
      title: "Surface Defect Detection System",
      subtitle: "Full-stack automated defect identification integrating morphological algorithms and ML classification on Azure.",
      demo: "https://fabricfrontend2309.z7.web.core.windows.net/",
      github: "https://github.com/ngochuyen2309/imagepa_final_project",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop"
    },
    {
      title: "Global Security Risk Intelligence Platform",
      subtitle: "Modern dashboard visualizing complex data mining metrics and predictive models effectively.",
      demo: "https://stgtdplatform-secondary.z7.web.core.windows.net/",
      github: "https://github.com/MinhTri-boop/Final_Project_DataMining",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
    }
  ];

  return (
    <section id="projects" ref={ref} className="max-w-[1200px] mx-auto py-16 px-4 opacity-0 flex flex-col gap-24">
      {/* NOTE: Replace the 'image' property in the projects array above with your actual image URLs */}
      {projects.map((p, i) => (
        <div key={i} className="flex flex-col gap-8 group">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-textMainLight mb-3 tracking-tight">{p.title}</h3>
              <p className="text-textMutedLight text-lg">{p.subtitle}</p>
            </div>
            <div className="flex gap-4">
              <a href={p.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-textMainLight bg-gray-200/50 hover:bg-gray-200 px-5 py-2.5 rounded-full transition-colors">
                Live Demo <ArrowRight className="w-4 h-4" />
              </a>
              <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-textMainLight border border-gray-200 hover:bg-gray-50 px-5 py-2.5 rounded-full transition-colors">
                GitHub Repo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="w-full h-[300px] md:h-[500px] rounded-[32px] overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
            <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          </div>
        </div>
      ))}
    </section>
  );
}
