import React from "react";
import styled from "styled-components";

const AboutUsCard = () => {
  return (
    <StyledCard>
      <h4>
        How do you do when you need to obtain <br /> a commercial traffic permit
        for freight <br /> transport to your business?
      </h4>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  /* border: 2px solid blue; */
  width: 500px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fdede8;
  border-left: 10px solid #ed4d47;
  border-radius: 5px 0 0 5px;
  h4 {
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 36px;
    color: #402b2b;
    width: 80%;
    height: 62%;
  }
`;

export default AboutUsCard;
