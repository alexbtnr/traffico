import React from "react";
import styled from "styled-components";
import ReusableButton from "./ReusableButton";

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul className='main-nav'>
        <li className='main-nav-link'>
          <a href='#about'>About</a>
        </li>
        <li className='main-nav-link'>How To</li>
        <li className='main-nav-link'>Faqs</li>
        <li className='main-nav-btn'>
          <ReusableButton text='Contact us' />
        </li>
      </ul>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  width: 50%;

  ul.main-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li.main-nav-link {
      font-family: "Rubik", sans-serif;
      font-weight: bold;
      line-height: 19px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #ffffff;

      &::after {
        display: block;
        content: "";
        border-bottom: solid 2px #fff;
        transform: scaleX(0);
        transition: all 250ms ease-in-out;
      }
      &:hover::after {
        transform: scaleX(1);
      }
    }
  }
`;

export default Navbar;
