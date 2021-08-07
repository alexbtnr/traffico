import React from "react";
import Logo from "./Logo";
import background from "../images/background.png";
import styled from "styled-components";
import Navbar from "./Navbar";
import CallToAction from "./CallToAction";

const Header = () => {
  return (
    <StyledHeader>
      <img className='hero-background' src={background} alt='' />
      <div className='container'>
        <div className='navbar-container'>
          <Logo />
          <Navbar />
        </div>
        <CallToAction />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  img.hero-background {
    position: absolute;
    height: 801.84px;
    width: 80%;
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(297.17deg, #ffedba 6.67%, #ee4d47 91.82%);
  }

  .navbar-container {
    margin: 0 auto 5rem;
    padding-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Header;
