import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

const Logo = () => {
  return (
    <StyledLogo>
      <img src={logo} alt='' />
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  width: 40%;
  /* background: blue; */

  img {
    /* display: block; */
  }
`;

export default Logo;
