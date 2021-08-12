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
  h1 {
    font-family: DM Serif Display;
    font-style: normal;
    font-weight: normal;
    font-size: 90px;
    line-height: 100%;
    margin-bottom: 3rem;
    color: #ffffff;
  }

  @media (max-width: 830px) {
    h1 {
      font-size: 40px;
      line-height: 100%;
    }
  }
`;

export default CallToAction;
