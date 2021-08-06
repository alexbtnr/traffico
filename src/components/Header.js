import React from "react";
import Logo from "./Logo";
import background from "../images/background.png";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <StyledHeader>
      <div className='container'>
        <Logo />
        <Navbar />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: url(${background}) no-repeat top left/cover;
  height: 801.84px;
  background-size: 80% 100%;

  .container {
    /* height: 5rem; */
    margin: auto;
    padding-top: 3rem;
    /* background: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Header;
