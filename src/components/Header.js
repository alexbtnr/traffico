import React from "react";
import Logo from "./Logo";
import background from "../images/background.png";
import smallCircle from "../images/smallSemiCircle.png";
import smallerCircle from "../images/smallerSemiCircle.png";
import people from "../images/people.png";
import truck from "../images/truck.png";
import styled from "styled-components";
import Navbar from "./Navbar";
import CallToAction from "./CallToAction";
import { motion } from "framer-motion";
import { enterFromLeft } from "../utils/animations";
import { useScroll } from "../utils/useScroll";

const Header = () => {
  const [element, controls] = useScroll();
  return (
    <StyledHeader>
      <div className='hero-background-container'>
        <img className='hero-background' src={background} alt='' />
        <img src={smallCircle} alt='' className='small-circle' />
        <img src={smallerCircle} alt='' className='smaller-circle' />
        <img src={people} alt='' className='people' />
      </div>
      <div className='container'>
        <div className='navbar-container'>
          <Logo />
          <Navbar />
        </div>
        <CallToAction />
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
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  img.truck {
    margin-top: 14.5rem;
    height: 22rem;
    z-index: 10;
  }
  div.hero-background-container {
    position: relative;
  }

  img.hero-background {
    position: absolute;
    height: 801.84px;
    width: 80%;
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(297.17deg, #ffedba 6.67%, #ee4d47 91.82%);
    border-radius: 0 0 11% 0;
  }

  img.small-circle {
    position: absolute;
    top: 47rem;
    height: 5rem;
    width: 10rem;
    left: 38%;
  }
  img.smaller-circle {
    position: absolute;
    top: 48rem;
    height: 4rem;
    width: 8rem;
    z-index: -1;
    left: 32%;
  }
  img.people {
    position: absolute;
    top: 28rem;
    height: 30rem;
    z-index: 4;
    left: 48%;
  }

  .navbar-container {
    margin: 0 auto 5rem;
    padding-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 830px) {
    img.hero-background {
      width: 100%;
      object-position: right center;
      object-fit: cover;
      border-radius: 0;
    }

    img.people {
      display: none;
    }

    .navbar-container {
      padding-top: 1rem;
    }

    img.truck {
      margin-top: 14.5rem;
      height: 12rem;
      z-index: 10;
    }
  }
`;

export default Header;
