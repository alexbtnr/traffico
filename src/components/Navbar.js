import React, { useState } from "react";
import styled from "styled-components";
import ReusableButton from "./ReusableButton";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledNavbar>
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
        <li className='main-nav-btn'>
          <ReusableButton text='Contact us' />
        </li>
      </ul>
      <div className='mobile-nav'>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -500 }}
              transition={{ duration: 0.5 }}
            >
              <li onClick={() => setIsOpen(false)} className='mobile-nav-link'>
                <a href='#about'>About</a>
              </li>
              <li onClick={() => setIsOpen(false)} className='mobile-nav-link'>
                <a href='#apply'>How To</a>
              </li>
              <li onClick={() => setIsOpen(false)} className='mobile-nav-link'>
                <a href='#faq'>Faqs</a>
              </li>
              <li onClick={() => setIsOpen(false)} className='mobile-nav-btn'>
                <ReusableButton text='Contact us' />
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      <div className='hamburger-wrapper' id='wrapper'>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
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

  div.mobile-nav,
  .hamburger-react {
    display: none;
  }

  @media (max-width: 830px) {
    ul.main-nav {
      display: none;
    }

    div.mobile-nav,
    .hamburger-react {
      display: block;
    }

    div.mobile-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10;

      ul {
        background: rgba(0, 0, 0, 0.7);
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        flex-direction: column;
        text-align: left;
        justify-content: flex-start;
        align-items: flex-start;
        padding-top: 12vh;

        li {
          margin: 0;
          margin-bottom: 0.5rem;
          padding-left: 5%;
          width: 100%;

          a {
            color: #fff;
          }
        }
        li:after {
          border-bottom: 0;
        }
        li:first-child {
          border-top: 2px solid #fff;
        }
      }
    }
    .hamburger-wrapper {
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      z-index: 10;
      position: fixed;
      top: 3%;
      right: 3%;
    }
  }
`;

export default Navbar;
