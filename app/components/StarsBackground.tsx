'use client'
import { motion } from 'framer-motion';

const Star = ({ delay = 0 }) => {
  const randomPosition = () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: Math.random() * 0.4 + 0.2,
    opacity: Math.random() * 0.5 + 0.3
  });

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      initial={randomPosition()}
      animate={{
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 3,
        delay: delay,
        repeat: Infinity,
      }}
      style={{
        left: `${randomPosition().x}%`,
        top: `${randomPosition().y}%`,
      }}
    />
  );
};

export default function StarsBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-b from-purple-900/20 to-black/20">
      {[...Array(50)].map((_, i) => (
        <Star key={i} delay={i * 0.1} />
      ))}
    </div>
  );
} 