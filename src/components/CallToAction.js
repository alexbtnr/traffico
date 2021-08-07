import React from "react";
import styled from "styled-components";
import ReusableButton from "./ReusableButton";

const CallToAction = () => {
  return (
    <StyledHero>
      <h1>
        Your awesome <br /> traffic permit <br /> consultant.
      </h1>
      <ReusableButton text='Get started' icon longBtn />
    </StyledHero>
  );
};

const StyledHero = styled.div`
  /* background: blue; */

  h1 {
    font-family: DM Serif Display;
    font-style: normal;
    font-weight: normal;
    font-size: 100px;
    line-height: 100%;
    margin-bottom: 3rem;
    color: #ffffff;
  }
`;

export default CallToAction;