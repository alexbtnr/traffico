import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = (threshold = 0.5) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: threshold });
  if (view) {
    controls.start("show");
  }
  return [element, controls];
};
