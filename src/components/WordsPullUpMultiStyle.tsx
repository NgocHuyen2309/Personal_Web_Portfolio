import { motion, useInView } from 'framer-motion';
import { cn } from '../lib/utils';
import { useRef } from 'react';

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  delayMultiple?: number;
}

export function WordsPullUpMultiStyle({
  segments,
  className,
  delayMultiple = 0.08,
}: WordsPullUpMultiStyleProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

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
    show: { y: 0, opacity: 1, transition: { type: 'spring' as const, damping: 12, stiffness: 100 } },
  };

  return (
    <motion.div
      ref={containerRef}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={cn("flex flex-wrap", className)}
    >
      {segments.map((segment, segmentIndex) => {
        const words = segment.text.split(' ');
        return words.map((word, i) => (
          <motion.span
            key={`${segmentIndex}-${i}`}
            variants={item}
            className={cn("pr-[0.3em]", segment.className)}
          >
            {word === '' ? <span>&nbsp;</span> : word}
          </motion.span>
        ));
      })}
    </motion.div>
  );
}
