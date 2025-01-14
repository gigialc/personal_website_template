import { motion } from 'framer-motion';

export const FloatingAstronaut = () => (
  <motion.div
    className="fixed right-10 bottom-10 w-32 h-32 opacity-20 pointer-events-none"
    animate={{
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear"
    }}
  >
    <img src="/astronaut.svg" alt="" />
  </motion.div>
); 