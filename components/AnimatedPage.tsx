import React from "react";
import { motion } from "motion/react";

interface AnimatedPageProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 15,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // Custom sophisticated ease-out
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    filter: "blur(4px)",
    transition: {
      duration: 0.3,
      ease: [0.7, 0, 0.84, 0], // Custom matching ease-in
    },
  },
};

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full min-h-screen flex flex-col"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
