import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";
import background from "../images/background.png";
import truck from "../images/truck.png";
import { enterFromLeft } from "../utils/animations";
import { useScroll } from "../utils/useScroll";

const WorkInProgress = () => {
  const [element, controls] = useScroll();

  return (
    <StyledWorkInProgress>
      <img src={background} alt='background' className='hero-background' />
      <div className='container'>
        <div className='flex-container'>
          <Logo />
          <Navbar />
        </div>
        <div ref={element} className='truck-img-container'>
          <motion.img
            variants={enterFromLeft}
            initial='hidden'
            animate={controls}
            className='truck'
            src={truck}
            alt='truck'
          />
          <motion.div
            variants={enterFromLeft}
            initial='hidden'
            animate={controls}
            className='text-container'
          >
            <p>Page still in progress. Try again later!</p>
          </motion.div>
        </div>
      </div>
      <footer className='footer'>
        <SocialMedia />
      </footer>
    </StyledWorkInProgress>
  );
};

const StyledWorkInProgress = styled.div`
  img.hero-background {
    position: absolute;
    height: 801.84px;
    width: 80%;
    width: 100%;
    height: 85vh;
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(297.17deg, #ffedba 6.67%, #ee4d47 91.82%);
    object-fit: cover;
    border-radius: 0;
  }

  .truck-img-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    img {
    }
    .text-container {
      position: absolute;
      top: 0;
      width: 29%;
      height: 60.5%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    p {
      font-family: DM Serif Display;
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
      line-height: 240%;
      width: 90%;
    }
  }

  .container {
    .flex-container {
      margin: 0 auto 5rem;
      padding-top: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  footer.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: -1;
  }
`;

export default WorkInProgress;
