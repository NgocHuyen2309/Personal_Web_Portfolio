import { Smile } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export function CTAPartner() {
  const ref = useInViewAnimation();

  return (
    <section id="contact" ref={ref} className="py-24 px-4 opacity-0 max-w-6xl mx-auto">
      <div className="bg-[length:200%_auto] bg-gradient-to-br from-purple-100 via-fuchsia-100 to-amber-100 animate-gradient rounded-[40px] shadow-lg border border-purple-200 py-24 px-8 text-center flex flex-col items-center justify-center relative overflow-hidden">
        
        <h2 className="font-serif text-[48px] md:text-[64px] text-purple-950 leading-[1.1] mb-10 z-10 tracking-tight">
          Let's build something bold.
        </h2>

        <a href="mailto:huathingochuyen07071983@gmail.com" className="z-10 flex items-center gap-3 bg-gradient-to-r from-purple-400 to-fuchsia-500 text-white rounded-full py-2.5 pr-6 pl-2.5 hover:scale-105 transition-transform duration-300 shadow-xl border border-purple-400">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-purple-200">
            <Smile className="w-5 h-5 text-amber-500" />
          </div>
          <span className="font-medium text-sm md:text-base tracking-wide">Email Me: huathingochuyen07071983@gmail.com</span>
        </a>
      </div>
    </section>
  );
}
