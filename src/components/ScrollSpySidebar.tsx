import { useState, useEffect } from 'react';

export function ScrollSpySidebar() {
  const [activeSection, setActiveSection] = useState('welcome');
  const sections = ['welcome', 'profile', 'story', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6">
      {sections.map((section) => (
        <a 
          key={section} 
          href={`#${section}`}
          className="relative group flex items-center justify-center w-8 h-8"
          aria-label={`Scroll to ${section}`}
        >
          {/* Line connecting dots */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-12 bg-purple-200/50 -z-10 last:hidden pointer-events-none" />
          
          <div 
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section 
                ? 'bg-amber-500 scale-150 shadow-[0_0_10px_rgba(245,158,11,0.5)]' 
                : 'bg-purple-300 group-hover:bg-purple-400 group-hover:scale-125'
            }`} 
          />
          
          {/* Tooltip */}
          <span className="absolute left-10 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-purple-800 bg-white px-2 py-1 rounded shadow-sm whitespace-nowrap pointer-events-none">
            {section === 'story' ? 'My Story' : section.charAt(0).toUpperCase() + section.slice(1)}
          </span>
        </a>
      ))}
    </div>
  );
}
