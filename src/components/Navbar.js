import React from "react";
import styled from "styled-components";
import ReusableButton from "./ReusableButton";

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul className='main-nav'>
        <li className='main-nav-link'>About</li>
        <li className='main-nav-link'>How To</li>
        <li className='main-nav-link'>Faqs</li>
        <li className='main-nav-btn'>
          <ReusableButton />
        </li>
      </ul>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  width: 60%;

  ul.main-nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    li.main-nav-link {
      font-family: "Rubik", sans-serif;
      font-weight: bold;
      line-height: 19px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
`;

export default Navbar;
