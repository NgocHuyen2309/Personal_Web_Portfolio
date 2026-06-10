import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import stickerImg from '../assets/taoanhdep_sticker_16619.png';

/* ── Tech icons arranged in a burst ring around center ─── */
const orbitItems = [
  { name: 'React',       icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'JavaScript',  icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'HTML/CSS',    icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'Node.js',     icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Tailwind',    icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Python',      icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Vite',        icon: 'https://cdn.simpleicons.org/vite/646CFF' },
  { name: 'GitHub',      icon: 'https://cdn.simpleicons.org/github/181717' },
  { name: 'Azure',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
];

function posFromAngle(angleDeg: number, rx: number, ry: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(rad) * rx, y: Math.sin(rad) * ry };
}

export function ProfileSection() {
  const ref = useInViewAnimation();

  return (
    <section
      id="profile"
      ref={ref}
      className="min-h-screen w-full bg-purple-50 flex flex-col items-center justify-center py-20 px-6 opacity-0 overflow-hidden relative"
    >
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/50 to-white/30 pointer-events-none" />
      
      {/* Soft decorative blobs */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-purple-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-200/50 rounded-full blur-3xl pointer-events-none" />

      {/* ── Title ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="text-center mb-12 z-10"
      >
        <h2 className="inline-block font-serif text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-purple-800 via-amber-400 to-fuchsia-600 animate-gradient tracking-tight px-6 py-2 bg-purple-100/30 rounded-full border border-purple-200/50">
          Personal Profile
        </h2>
      </motion.div>

      {/* ── Burst / Explosion Stage ── */}
      <div className="relative w-full flex items-center justify-center" style={{ height: '700px' }}>
        
        {/* ─── Modern Glowing Halo ─── */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full z-10 flex items-center justify-center"
        >
          {/* Outer glowing gradient ring */}
          <div className="absolute inset-0 rounded-full border-[3px] border-transparent shadow-[0_0_50px_rgba(217,70,239,0.3)]" style={{ background: 'linear-gradient(to right, #d946ef, #8b5cf6, #fbbf24) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
          
          {/* Secondary rotating dashed ring */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-8 rounded-full border-[2px] border-dashed border-purple-400/50"
          />

          {/* Intense vibrant center glow */}
          <div className="absolute inset-16 bg-gradient-to-tr from-fuchsia-400/40 via-purple-500/30 to-amber-300/40 rounded-full blur-[60px]" />
        </motion.div>

        {/* ─── Center: large sticker image, no frame ─── */}
        <motion.div
          className="absolute z-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img
            src={stickerImg}
            alt="Hua Thi Ngoc Huyen"
            className="w-auto h-[450px] md:h-[650px] object-contain select-none filter drop-shadow-[0_0_40px_rgba(217,70,239,0.5)] drop-shadow-[0_15px_20px_rgba(88,28,135,0.3)]"
            draggable={false}
          />
        </motion.div>

        {/* ─── Tech icon badges (Glassmorphism Rainbow Arch) ─── */}
        {orbitItems.map((item, i) => {
          // Rainbow arch spanning 165° to 375° (over the top)
          const angle = 165 + (i * (210 / (orbitItems.length - 1)));
          
          const rxDesk = 440; 
          const ryDesk = 360;
          const rxMob = 160;
          const ryMob = 250;
          
          const posDesk = posFromAngle(angle, rxDesk, ryDesk);
          const posMob = posFromAngle(angle, rxMob, ryMob);
          
          return (
            <div key={item.name} className={`absolute z-30 left-1/2 top-1/2 orbit-pos-${i}`}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1, 
                  rotate: [0, i % 2 === 0 ? 15 : -15, 0],
                  y: [0, i % 2 === 0 ? 24 : -24, 0]
                }}
                transition={{
                  opacity: { duration: 1 },
                  rotate: { delay: i * 0.1, duration: 2.5 + (i % 2) * 0.5, repeat: Infinity, ease: 'easeInOut' },
                  y: { delay: i * 0.1, duration: 2.5 + (i % 2) * 0.5, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="relative flex flex-col items-center gap-1.5 w-16 h-16 md:w-[86px] md:h-[86px] justify-center group hover:scale-110 transition-all duration-300 cursor-default"
              >
                {/* Gradient Border Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500 via-purple-400 to-amber-400 rounded-[18px] opacity-80 group-hover:opacity-100 group-hover:shadow-[0_0_20px_rgba(192,132,252,0.6)] transition-all duration-300" />
                {/* Inner glass card */}
                <div className="absolute inset-[2px] bg-white/95 backdrop-blur-md rounded-[16px] flex flex-col items-center justify-center gap-1.5 z-10">
                  <img src={item.icon} alt={item.name} className="w-7 h-7 md:w-10 md:h-10 object-contain drop-shadow-sm" />
                  <span className="text-[8px] md:text-[10px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-fuchsia-600 uppercase leading-none mt-0.5 tracking-wider">{item.name}</span>
                </div>
              </motion.div>
              
              <style>{`
                .orbit-pos-${i} {
                  margin-left: calc(${posMob.x}px - 32px);
                  margin-top: calc(${posMob.y}px - 32px);
                }
                @media (min-width: 768px) {
                  .orbit-pos-${i} {
                    margin-left: calc(${posDesk.x}px - 43px);
                    margin-top: calc(${posDesk.y}px - 43px);
                  }
                }
              `}</style>
            </div>
          );
        })}

        {/* ─── My Story CTA – bottom right (Comic style) ─── */}
        <motion.div
          className="absolute bottom-4 right-4 md:bottom-8 md:right-10 z-40"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
        >
          <a
            href="#story"
            className="inline-flex items-center gap-3 bg-white border-2 border-purple-200 text-purple-950 font-medium px-6 py-3 rounded-full shadow-md hover:shadow-purple-200 hover:-translate-y-1 transition-all duration-300 group"
          >
            <span className="text-sm uppercase tracking-wider font-bold">My Story</span>
            <div className="bg-amber-400 p-1.5 rounded-full text-white group-hover:bg-amber-500 transition-colors">
              <ArrowDown className="w-5 h-5" strokeWidth={3} />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
