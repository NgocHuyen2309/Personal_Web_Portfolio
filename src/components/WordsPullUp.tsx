import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface WordsPullUpProps {
  text: string;
  className?: string;
  delayMultiple?: number;
  wrapperClassName?: string;
}

export function WordsPullUp({
  text,
  className,
  delayMultiple = 0.08,
  wrapperClassName,
}: WordsPullUpProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: delayMultiple,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className={cn("flex flex-wrap", wrapperClassName)}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          className={cn("pr-[0.2em] relative", className)}
        >
          {word === 'Huyền' ? (
             <>
               {word}
               <span className="absolute top-0 right-[-0.2em] text-[0.4em]">*</span>
             </>
          ) : word === '' ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
