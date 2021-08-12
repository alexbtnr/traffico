export const enterFromLeft = {
  hidden: {
    x: "-100vw",
  },
  show: {
    x: 0,
    transition: {
      type: "spring",
      damping: 40,
      mass: 6,
    },
  },
};

export const enterFromRight = {
  hidden: {
    x: "100vw",
  },
  show: {
    x: 0,
    transition: {
      type: "spring",
      damping: 40,
      mass: 6,
    },
  },
};

export const topButtonAnimation = {
  initial: {
    y: 500,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.55,
      type: "spring",
      bounce: 0.25,
      ease: "easeInOut",
    },
  },
  transition: {
    duration: 0.55,
    type: "spring",
    bounce: 0.25,
    ease: "easeInOut",
  },
  hover: { background: "#fff", color: "#000" },
};
