import React from "react";
import styled from "styled-components";
import smallTruck from "../images/smallTruck.png";

const Footer = () => {
  return (
    <StyledFooter>
      <div className='background-color'></div>
      {/* <img className='small-truck' src={smallTruck} alt='' /> */}
      <div className='container'>
        <div>footer</div>
        <div>footer</div>
        <div>footer</div>
        <div>footer</div>
        <div>footer</div>
        <div>footer</div>
        <div>footer</div>
        <div>footer</div>
        <div>footer</div>
        <div>footer</div>
        <div>footer</div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: relative;
  overflow: hidden;

  .background-color {
    position: absolute;
    width: 90%;
    height: 100%;
    /* height: 40rem; */
    top: 0;
    left: 0;
    background: #0f264c;
    z-index: -1;
    border-radius: 0 150px 0 0;
  }

  img.small-truck {
  }

  div.container {
    padding: 10rem 0;
  }
`;

export default Footer;
