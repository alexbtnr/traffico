import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const FooterNav = () => {
  return (
    <StyledFooterNav>
      <Logo />
      <nav>
        <ul className='main-nav'>
          <li className='main-nav-link'>
            <a href='#about'>About</a>
          </li>
          <li className='main-nav-link'>
            <a href='#apply'>How To</a>
          </li>
          <li className='main-nav-link'>
            <a href='#faq'>Faqs</a>
          </li>
        </ul>
      </nav>
    </StyledFooterNav>
  );
};

const StyledFooterNav = styled.div`
  margin: 0 auto 5rem;
  padding-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10rem;

  nav {
    width: 50%;

    ul.main-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;

      li.main-nav-link {
        font-family: "Rubik", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
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
  }
`;

export default FooterNav;
