import React from "react";
import styled from "styled-components";
import AboutUsCard from "./AboutUsCard";
import AboutUsText from "./AboutUsText";
import SideImage from "./SideImage";
import manWithTruck from "../images/manWithTruck.png";
import { enterFromRight } from "../utils/animations";
import { useScroll } from "../utils/useScroll";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [element, controls] = useScroll();

  return (
    <StyledAboutUs ref={element} className='my-10' id='about'>
      <div className='container'>
        <div className='flex-container'>
          <div className='flex-left'>
            <AboutUsText />
            <AboutUsCard />
          </div>
          <motion.div
            variants={enterFromRight}
            animate={controls}
            initial='hidden'
            className='flex-right'
          >
            <SideImage img={manWithTruck} imgAlt='Man with truck' />
          </motion.div>
        </div>
      </div>
    </StyledAboutUs>
  );
};

const StyledAboutUs = styled.section`
  div.container {
    div.flex-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .flex-left,
      .flex-right {
        width: 50%;
      }

      .flex-left {
        align-self: flex-end;
      }
    }
  }

  @media (max-width: 830px) {
    div.flex-container {
      flex-direction: column;

      .flex-left,
      .flex-right {
        min-width: 100%;
      }

      .flex-right {
        aside {
          margin-top: 2rem;
          img {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default AboutUs;
