import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul className='main-nav'>
        <li className='main-nav-link'>About</li>
        <li className='main-nav-link'>How To</li>
        <li className='main-nav-link'>Faqs</li>
        <li className='main-nav-btn'>Contact Us</li>
      </ul>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  /* background: green; */
  width: 60%;

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export default Navbar;
