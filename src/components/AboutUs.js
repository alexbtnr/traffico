import React from "react";
import styled from "styled-components";
import AboutUsCard from "./AboutUsCard";
import AboutUsText from "./AboutUsText";
import SideImage from "./SideImage";
import manWithTruck from "../images/manWithTruck.png";

const AboutUs = () => {
  return (
    <StyledAboutUs className='my-10' id='about'>
      <div className='container'>
        <div className='flex-container'>
          <div className='flex-left'>
            <AboutUsText />
            <AboutUsCard />
          </div>
          <div className='flex-right'>
            <SideImage img={manWithTruck} imgAlt='Man with truck' />
          </div>
        </div>
      </div>
    </StyledAboutUs>
  );
};

const StyledAboutUs = styled.section`
  div.container {
    div.flex-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .flex-left,
      .flex-right {
        width: 50%;
      }

      .flex-left {
        align-self: flex-end;
      }
    }
  }
`;

export default AboutUs;
