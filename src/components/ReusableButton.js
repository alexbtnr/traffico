import React from "react";
import styled from "styled-components";

const ReusableButton = () => {
  return <StyledReusableButton>Contact Us</StyledReusableButton>;
};

const StyledReusableButton = styled.button`
  background: #ee4d47;
  border: none;
  border-radius: 5px;
  height: 60px;
  /* height: 3.5rem; */
  width: 158px;

  font-family: "Rubik", sans-serif;
  font-weight: bold;
  line-height: 19px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffffff;
`;

export default ReusableButton;
