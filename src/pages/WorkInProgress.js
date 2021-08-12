import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";
import ReusableButton from "../components/ReusableButton";
import SocialMedia from "../components/SocialMedia";
import background from "../images/background.png";
import truck from "../images/truck.png";
import { enterFromLeft } from "../utils/animations";
import { useScroll } from "../utils/useScroll";

const WorkInProgress = () => {
  const [element, controls] = useScroll();
  useEffect(() => {
    document.title = "Trafico | Work In Progress";
  }, []);

  return (
    <StyledWorkInProgress>
      <img src={background} alt='background' className='hero-background' />
      <div className='container'>
        <div className='flex-container'>
          <Logo />
          {/* <Navbar /> */}
          <Link to='/'>
            <ReusableButton text='Homepage' />
          </Link>
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
    width: 100%;
    height: 85vh;
    max-height: 85vh;
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
    height: 15vh;
    max-height: 15vh;
  }

  @media (max-width: 830px) {
    .container {
      .flex-container {
        flex-direction: column;
        gap: 2rem;
        div {
          width: 100%;
          text-align: center;
        }
      }
    }
    .truck-img-container {
      left: 0;
      bottom: 30%;
      transform: translateX(0);
      transform: translateY(30%);
      img {
        width: 90%;
      }
    }
  }
`;

export default WorkInProgress;
