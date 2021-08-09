import React from "react";
import HowToApplyText from "./HowToApplyText";
import womanAtDesk2 from "../images/womanAtDesk2.png";
import SideImage from "./SideImage";
import styled from "styled-components";
import { enterFromLeft } from "../utils/animations";
import { useScroll } from "../utils/useScroll";
import { motion } from "framer-motion";

const HowToApply = () => {
  const [element, controls] = useScroll();

  return (
    <StyledHowToApply ref={element} id='apply'>
      <div className='container'>
        <div className='flex-container'>
          <motion.div
            variants={enterFromLeft}
            animate={controls}
            initial='hidden'
            className='flex-left'
          >
            <SideImage img={womanAtDesk2} imgAlt='Woman at desk' />
          </motion.div>
          <div className='flex-right'>
            <HowToApplyText />
          </div>
        </div>
      </div>
    </StyledHowToApply>
  );
};

const StyledHowToApply = styled.section`
  div.container {
    div.flex-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10rem;

      .flex-left,
      .flex-right {
        width: 50%;
      }

      .flex-left {
        img {
          width: 100%;
        }
      }
    }
  }
`;

export default HowToApply;
