import React from "react";
import styled from "styled-components";
import FaqTitle from "./FaqTitle";
import SideImage from "./SideImage";
import confusedMan from "../images/confusedMan.png";
import QuestionsContainer from "./QuestionsContainer";

const Faq = () => {
  return (
    <StyledFaq className='my-10' id='faq'>
      <div className='background-color'></div>
      <div className='container'>
        <div className='flex-container'>
          <div className='flex-left'>
            <FaqTitle />
          </div>
          <div className='flex-right'>
            <SideImage img={confusedMan} imgAlt='Confused Man' />
          </div>
        </div>
        <QuestionsContainer />
      </div>
    </StyledFaq>
  );
};

const StyledFaq = styled.section`
  position: relative;
  overflow: hidden;

  .background-color {
    position: absolute;
    width: 80%;
    height: 100%;
    top: 0;
    right: 0;
    background: #fdede8;
    z-index: -1;
    border-radius: 11% 0 0 0;
  }

  div.container {
    padding: 10rem 0 5rem;
    div.flex-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5rem;

      .flex-left {
        align-self: flex-end;
        width: 40%;
      }

      .flex-right {
        width: 60%;
        img {
          width: 120%;
        }
      }
    }
  }
`;

export default Faq;
