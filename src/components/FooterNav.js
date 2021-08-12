import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const FooterNav = () => {
  return (
    <StyledFooterNav>
      <Logo id='footerLogo' />
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

  @media (max-width: 830px) {
    flex-direction: column;
    margin: 0 auto;
    div {
      width: 100%;
      img {
        margin: 0 auto;
        width: 100%;
      }
      padding-bottom: 2rem;
    }
    nav {
      width: 100%;
    }
  }
`;

export default FooterNav;
