import { Variants } from "framer-motion"

export const fadeInDelays100 = [
  0,
  0.1,
  0.2,
  0.3,
  0.4,
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
  1.1,
  1.2,
  ,
  1.3,
  1.4,
  1.5,
  1.6,
  1.7,
  1.8,
  1.9,
  2,
]

export const GridIn = {
  initial: {
    opacity: 0,
    y: -5,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delay: 0.4,
    },
  },
}

export const topSlideIn = {
  hidden: {
    opacity: 0,
    y: -100,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export const fadeScaleUp = {
  initial: {
    opacity: 0,
    scale: 0.9,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      type: " spring",
      stiffness: 50,
    },
  },
}

export const smoothFadeUp = {
  initial: {
    opacity: 0,
    y: 5,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      delay: 0.5,
      stiffness: 5,
    },
  },
}

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
}
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
}
export const bounceVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
}
export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}
export const slideInLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}
export const slideInRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}
export const scaleVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export const pageTransition = {
  hidden: { scale: 0.9, opacity: 0, y: "-20px" },
  show: {
    opacity: 1,
    scale: 1,
    y: "0",
    transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] },
  },
  exit: {
    scale: 0.1,
    opacity: 0,
    y: "-20px",
    transition: { duration: 1, ease: [0.9, -0.95, 0.01, 0.99] },
  },
}
