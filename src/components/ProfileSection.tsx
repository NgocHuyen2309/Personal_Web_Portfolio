import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import stickerImg from '../assets/taoanhdep_sticker_16619.png';

/* ── Tech icons arranged in a burst ring around center ─── */
const orbitItems = [
  { name: 'React',       icon: 'https://cdn.simpleicons.org/react/61DAFB',       angle: 0    },
  { name: 'JavaScript',  icon: 'https://cdn.simpleicons.org/javascript/F7DF1E',   angle: 40   },
  { name: 'HTML/CSS',    icon: 'https://cdn.simpleicons.org/html5/E34F26',        angle: 80   },
  { name: 'Node.js',     icon: 'https://cdn.simpleicons.org/nodedotjs/339933',    angle: 120  },
  { name: 'Tailwind',    icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',  angle: 160  },
  { name: 'Python',      icon: 'https://cdn.simpleicons.org/python/3776AB',       angle: 200  },
  { name: 'Vite',        icon: 'https://cdn.simpleicons.org/vite/646CFF',         angle: 240  },
  { name: 'GitHub',      icon: 'https://cdn.simpleicons.org/github/181717',       angle: 280  },
  { name: 'Azure',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', angle: 320 },
];

function posFromAngle(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
}

export function ProfileSection() {
  const ref = useInViewAnimation();

  return (
    <section
      id="profile"
      ref={ref}
      className="min-h-screen w-full bg-purple-50 flex flex-col items-center justify-center py-20 px-6 opacity-0 overflow-hidden relative"
    >
      {/* ── Comic Halftone background ── */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]" 
        style={{ backgroundImage: 'radial-gradient(circle, #3b0764 2px, transparent 2.5px)', backgroundSize: '24px 24px' }}
      />
      
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
        <div className="relative inline-block">
          <h2 className="relative font-black text-4xl md:text-6xl lg:text-7xl text-amber-400 tracking-tight px-6 py-2 uppercase border-4 border-purple-950 shadow-[6px_6px_0_#3b0764] bg-white transform -rotate-2">
            Personal Profile
          </h2>
          {/* Comic accents */}
          <div className="absolute -top-4 -right-6 w-8 h-8 bg-pink-400 rounded-full border-2 border-purple-950 shadow-[2px_2px_0_#3b0764]" />
          <div className="absolute -bottom-4 -left-4 w-5 h-5 bg-cyan-400 rounded-full border-2 border-purple-950 shadow-[2px_2px_0_#3b0764]" />
        </div>
      </motion.div>

      {/* ── Burst / Explosion Stage ── */}
      <div className="relative w-full flex items-center justify-center" style={{ height: '700px' }}>
        
        {/* ─── Comic Halo ─── */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border-[6px] border-dashed border-purple-950 bg-amber-200 z-10"
          style={{
            boxShadow: '15px 15px 0 #3b0764',
            backgroundImage: 'radial-gradient(#3b0764 3px, transparent 3px)',
            backgroundSize: '30px 30px'
          }}
        >
          {/* Inner solid ring */}
          <div className="absolute inset-4 rounded-full border-4 border-purple-950 bg-amber-300 opacity-90" />
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
            className="w-auto h-[450px] md:h-[650px] object-contain select-none"
            style={{ filter: 'drop-shadow(3px 3px 0 #3b0764) drop-shadow(-3px -3px 0 #3b0764) drop-shadow(3px -3px 0 #3b0764) drop-shadow(-3px 3px 0 #3b0764) contrast(1.1) saturate(1.2)' }}
            draggable={false}
          />
        </motion.div>

        {/* ─── Tech icon badges (Comic Style) ─── */}
        {orbitItems.map((item, i) => {
          // Adjust orbit radius
          const rDesk = 360; 
          const rMob = 160;
          const posDesk = posFromAngle(item.angle, rDesk);
          const posMob = posFromAngle(item.angle, rMob);
          
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
                className="flex flex-col items-center gap-1.5 bg-white border-2 border-purple-950 shadow-[4px_4px_0_#3b0764] rounded-xl w-16 h-16 md:w-[86px] md:h-[86px] justify-center hover:scale-110 hover:shadow-[6px_6px_0_#3b0764] transition-all duration-300 cursor-default"
              >
                <img src={item.icon} alt={item.name} className="w-7 h-7 md:w-10 md:h-10 object-contain" />
                <span className="text-[8px] md:text-[10px] font-black text-purple-900 uppercase leading-none mt-0.5">{item.name}</span>
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
            className="inline-flex items-center gap-3 bg-amber-300 border-4 border-purple-950 text-purple-950 font-black px-6 py-3 shadow-[6px_6px_0_#3b0764] hover:shadow-[2px_2px_0_#3b0764] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 group transform -rotate-2"
          >
            <span className="text-lg uppercase tracking-wide">My Story</span>
            <div className="bg-white border-2 border-purple-950 p-1.5 rounded-full text-purple-950 group-hover:bg-amber-100 transition-colors">
              <ArrowDown className="w-5 h-5" strokeWidth={3} />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
