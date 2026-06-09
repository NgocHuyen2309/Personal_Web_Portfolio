import { Flower2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  const navItems = [
    { label: 'Welcome', href: '#welcome' },
    { label: 'Profile', href: '#profile' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between"
    >
      <a href="https://github.com/NgocHuyen2309" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-purple-950 hover:text-amber-500 transition-colors cursor-pointer">
        <Flower2 className="w-6 h-6 text-amber-500" />
        <span className="font-serif text-xl font-medium tracking-tight">Hoenne2309</span>
      </a>

      <nav className="hidden md:flex items-center gap-8 bg-white/70 backdrop-blur-md px-8 py-3 rounded-full border border-purple-100/50 shadow-sm">
        {navItems.map((item) => (
          <a 
            key={item.label} 
            href={item.href}
            className="text-sm font-medium text-purple-900/70 hover:text-purple-600 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Placeholder for symmetry or future use (like a theme toggle) */}
      <div className="w-6 hidden md:block"></div>
    </motion.header>
  );
}
