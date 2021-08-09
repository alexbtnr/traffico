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
