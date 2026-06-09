import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export function CoreValues() {
  const ref = useInViewAnimation();

  return (
    <section ref={ref} className="py-12 px-4 flex flex-col items-center text-center opacity-0 max-w-5xl mx-auto">
      <Quote className="w-10 h-10 md:w-12 md:h-12 text-textMainLight mb-8 opacity-80" />
      
      <p className="text-[28px] md:text-[36px] lg:text-[40px] text-textMainLight leading-[1.2] font-medium mb-8">
        I blend <span className="font-serif italic font-normal">UI/UX precision</span> with software performance to build the next wave of web applications.
      </p>

      <div className="flex flex-col items-center gap-6">
        <div className="inline-block bg-gray-100 rounded-full px-6 py-2 mb-2 border border-gray-200 shadow-sm">
          <p className="font-serif italic text-base md:text-lg text-textMainLight font-medium tracking-wide">
            Hua Thi Ngoc Huyen — TOEIC 940 / IELTS 6.5 / Fluent English
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 text-slate-900 font-medium text-sm md:text-base tracking-wide">
          <span>ReactJS</span>
          <span className="text-slate-300">•</span>
          <span>Tailwind CSS</span>
          <span className="text-slate-300">•</span>
          <span>Vite</span>
          <span className="text-slate-300">•</span>
          <span>Node.js</span>
        </div>
      </div>
    </section>
  );
}
