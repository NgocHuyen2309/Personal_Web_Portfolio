import { motion } from 'framer-motion';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import me3 from '../assets/me3.jpg';

import { Zap, Palette, Flower2 } from 'lucide-react';

const storyCards = [
  {
    icon: Zap,
    iconColor: 'text-amber-500',
    bgClass: 'bg-gradient-to-br from-amber-100 to-orange-100',
    title: 'Drawn to what moves forward',
    body: "Technology has always felt like the pulse of the future — fast-evolving, endlessly surprising. I'm the kind of person who reads a product changelog for fun. The excitement of seeing a new framework, a new interaction paradigm, or a cleverly solved UX problem? That's what gets me out of bed.",
  },
  {
    icon: Palette,
    iconColor: 'text-fuchsia-500',
    bgClass: 'bg-gradient-to-br from-fuchsia-100 to-purple-100',
    title: 'Where art meets engineering',
    body: "I grew up caring deeply about aesthetics — how things look, how they feel, how they invite you in. Frontend development became the natural intersection: a craft where logic and beauty are equally important. I don't just build interfaces; I compose experiences.",
  },
  {
    icon: Flower2,
    iconColor: 'text-rose-500',
    bgClass: 'bg-gradient-to-br from-rose-100 to-pink-100',
    title: 'A woman who codes — and that matters',
    body: (
      <>
        Women bring a distinct lens to tech: we tend to design with empathy first, asking <span className="font-bold text-purple-900">who</span> will use this before <span className="font-bold text-purple-900">how</span> to build it. In a field that shapes billions of daily interactions, that perspective isn't a soft skill — it's a strategic advantage. I'm proud to be part of a generation redefining what a developer looks like.
      </>
    ),
  },
];

export function MyStorySection() {
  const ref = useInViewAnimation();

  return (
    <section id="story" ref={ref} className="w-full bg-white py-24 px-6 opacity-0 overflow-hidden relative">

      {/* Subtle background decoration */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-20">

        {/* Section header */}
        <div className="text-center">
          <span className="inline-block text-sm font-semibold tracking-[0.2em] text-amber-500 uppercase mb-3">The Person Behind the Code</span>
          <h2 className="inline-block font-serif text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-purple-800 via-amber-400 to-fuchsia-600 animate-gradient tracking-tight px-4">
            My Story
          </h2>
        </div>

        {/* Main content: photo + quote + cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left: Photo + Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col items-center gap-8"
          >
            {/* Photo with decorative rings */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 shrink-0">
              {/* Spinning ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-300 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-3 rounded-full border border-amber-300/60" />
              {/* Photo */}
              <div className="absolute inset-4 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                <img
                  src={me3}
                  alt="Hua Thi Ngoc Huyen"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              {/* Decorative dot */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-amber-400 shadow-md" />
            </div>

            {/* Pull-quote */}
            <blockquote className="relative bg-gradient-to-br from-purple-50 to-fuchsia-50 border border-purple-100 rounded-3xl p-7 shadow-sm text-center">
              <span className="absolute -top-4 left-6 text-5xl text-purple-300 font-serif leading-none select-none">"</span>
              <p className="text-purple-900 font-medium leading-relaxed italic text-sm md:text-base">
                I believe the best digital products are built at the crossroads of empathy, aesthetics, and rigorous engineering.
              </p>
              <footer className="mt-4 text-xs text-purple-400 font-medium tracking-wide uppercase">— Ngoc Huyen</footer>
            </blockquote>
          </motion.div>

          {/* Right: Story cards */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {storyCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ x: 6 }}
                className="group flex gap-5 bg-white border border-purple-100 rounded-3xl p-6 shadow-sm hover:shadow-purple-200/60 hover:border-purple-200 transition-all duration-300 cursor-default"
              >
                <div className={`shrink-0 w-12 h-12 rounded-2xl ${card.bgClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className={`w-6 h-6 ${card.iconColor}`} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-950 text-base mb-2">{card.title}</h3>
                  <p className="text-purple-800/70 text-sm leading-relaxed">{card.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
