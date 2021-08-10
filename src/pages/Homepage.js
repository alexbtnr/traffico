import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import smallTruck from "../images/smallTruck.png";
import { enterFromLeft } from "../utils/animations";
import { useScroll } from "../utils/useScroll";

const Homepage = () => {
  const [element, controls] = useScroll();

  return (
    <StyledHomepage>
      <Header />
      <MainContent />
      <div ref={element} className='footer'>
        <motion.img
          animate={controls}
          initial='hidden'
          variants={enterFromLeft}
          className='small-truck'
          src={smallTruck}
          alt=''
        />
        <Footer />
      </div>
    </StyledHomepage>
  );
};

const StyledHomepage = styled.div`
  div.footer {
    position: relative;
    padding-top: 10rem;

    img.small-truck {
      position: absolute;
      top: -4%;
    }
  }
`;

export default Homepage;
