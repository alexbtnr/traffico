import React from "react";
import styled from "styled-components";
import smallTruck from "../images/smallTruck.png";
import FooterForm from "./FooterForm";
import FooterNav from "./FooterNav";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <StyledFooter>
      <img className='small-truck' src={smallTruck} alt='' />
      <footer className='footer'>
        <div className='background-color'></div>
        <div className='container'>
          <FooterForm />
          <FooterNav />
        </div>
        <SocialMedia />
      </footer>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  position: relative;

  img.small-truck {
    position: absolute;
    top: -30%;
  }

  .background-color {
    position: absolute;
    width: 90%;
    height: 100%;
    top: 0;
    left: 0;
    background: #0f264c;
    z-index: -1;
    border-radius: 0 150px 0 0;
  }
`;

export default Footer;
