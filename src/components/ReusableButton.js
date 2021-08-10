import React from "react";
import styled from "styled-components";

const ReusableButton = ({ text, icon, longBtn }) => {
  return (
    <div>
      {longBtn ? (
        <StyledLongReusableButton className={longBtn ? "long-btn" : ""}>
          <span>{text}</span>
          {icon ? <i className='las la-long-arrow-alt-right la-2x'></i> : ""}
        </StyledLongReusableButton>
      ) : (
        <StyledReusableButton className={longBtn ? "long-btn" : ""}>
          {text}
          {icon ? <i className='las la-long-arrow-alt-right la-2x'></i> : ""}
        </StyledReusableButton>
      )}
    </div>
  );
};

const StyledReusableButton = styled.button`
  cursor: pointer;
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

const StyledLongReusableButton = styled.button`
  cursor: pointer;
  background: #ee4d47;
  border: none;
  border-radius: 5px;
  height: 60px;
  /* height: 3.5rem; */
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  font-family: "Rubik", sans-serif;
  font-weight: bold;
  line-height: 19px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffffff;
`;

export default ReusableButton;
