'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const fadeIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number = 0) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.7,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };
};

const stagger = (staggerChildren: number = 0.1) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren
      }
    }
  };
};

const reveal = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 100
    }
  }
};

const fadeInOnScroll = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 100
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 300
    }
  }
};

const slideIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number = 0) => {
  return {
    hidden: {
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
      x: direction === 'left' ? '100%' : direction === 'right' ? '-100%' : 0,
      opacity: 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 100,
        delay
      }
    }
  };
};

interface MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

function FadeIn({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeIn('up', delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SlideIn({ children, className, delay = 0 }: MotionProps & { direction?: 'up' | 'down' | 'left' | 'right' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={slideIn('up', delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SlideUp({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

function RevealOnScroll({ children, className }: MotionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeInOnScroll}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerChildren({ children, className, staggerDelay = 0.1 }: MotionProps & { staggerDelay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={stagger(staggerDelay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ScaleFadeIn({ children, className }: MotionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={scaleIn}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MotionButton({ children, className }: MotionProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const MotionContainer = motion.div;

// Export all components
export {
  fadeIn,
  stagger,
  reveal,
  fadeInOnScroll,
  scaleIn,
  slideIn,
  FadeIn,
  SlideIn,
  SlideUp,
  RevealOnScroll,
  StaggerChildren,
  ScaleFadeIn,
  MotionButton,
  MotionContainer
}; 