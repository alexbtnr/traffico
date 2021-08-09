import React from "react";
import styled from "styled-components";

const SideImage = ({ img, imgAlt }) => {
  return (
    <StyledSideImg>
      <img src={img} alt={imgAlt} />
    </StyledSideImg>
  );
};

const StyledSideImg = styled.aside``;

export default SideImage;
