import React from "react";
import styled from "styled-components";
import AboutUs from "./AboutUs";
import Faq from "./Faq";
import HowToApply from "./HowToApply";

const MainContent = () => {
  return (
    <StyledMainContent>
      <AboutUs />
      <HowToApply />
      <Faq />
    </StyledMainContent>
  );
};

const StyledMainContent = styled.main`
  padding-bottom: 10rem;
`;

export default MainContent;
