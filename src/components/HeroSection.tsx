import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import myPhoto from '../assets/my_photo.jpg';

export function HeroSection() {
  const ref = useInViewAnimation();

  return (
    <section id="welcome" ref={ref} className="min-h-screen w-full bg-purple-50 flex items-center justify-center py-24 px-6 relative overflow-hidden opacity-0">
      
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/40 blur-3xl rounded-full mix-blend-multiply" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-200/30 blur-3xl rounded-full mix-blend-multiply" />
      
      <div className="max-w-6xl w-full flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10 mt-10 lg:mt-0">
        
        {/* Left: Typography */}
        <div className="flex flex-col gap-4 lg:gap-6 items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.h1 
              whileHover={{ y: -10, scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="inline-block cursor-default font-serif text-[80px] md:text-[120px] leading-none tracking-tighter text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-purple-800 via-amber-400 to-fuchsia-600 animate-gradient pb-2"
            >
              Welcome!
            </motion.h1>
            <h2 className="text-2xl md:text-3xl font-medium text-purple-800 mt-2">
              I'm Hua Thi Ngoc Huyen
            </h2>
            <p className="text-base md:text-lg text-purple-900/70 mt-6 max-w-lg leading-relaxed">
              FullStack Javascript Developer &amp; Final-year Computer Science Student passionate about modern Web Development and crafting seamless user experiences.
              Solid foundation in building interactive interfaces using <span className="text-purple-700 font-semibold">ReactJS</span>, <span className="text-purple-700 font-semibold">JavaScript</span>, and <span className="text-purple-700 font-semibold">HTML/CSS</span>. Highly motivated to transition academic knowledge into real-world software engineering practices. Eager to take ownership, learn continuously, and contribute to robust platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8"
          >
            <a 
              href="#profile"
              className="inline-flex items-center gap-3 bg-white border-2 border-purple-200 text-purple-950 font-medium px-8 py-4 rounded-[40px] shadow-sm hover:shadow-purple-200 hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="text-lg">About Me</span>
              <div className="bg-amber-400 p-2 rounded-full text-white group-hover:bg-amber-500 transition-colors">
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Right: Image Blob */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex justify-center lg:justify-end"
        >
          <div 
            className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] bg-gradient-to-br from-purple-300 to-fuchsia-400 p-2 shadow-xl animate-float"
            style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
          >
            <div 
              className="w-full h-full bg-white overflow-hidden"
              style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
            >
              {/* Personal Image */}
              <img 
                src={myPhoto} 
                alt="Hua Thi Ngoc Huyen" 
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
            
            {/* Small decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-400 rounded-full blur-xl opacity-60 animate-pulse" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
