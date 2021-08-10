import React from "react";
import styled from "styled-components";

const SingleFaq = ({ question, index, toggleFaq }) => {
  return (
    <StyledSingleFaq
      className={`faq ${question.active ? "open" : ""}`}
      onClick={() => toggleFaq(index)}
    >
      <div className='faq-title'>
        <h4 className='title'>
          {question.title.substring(1, 2) === "."
            ? question.title.substring(3)
            : question.title.substring(2, 3) === "."
            ? question.title.substring(4)
            : question.title}
        </h4>
        <button>
          <span className='plus'>
            <i className='las la-plus la-2x'></i>
          </span>
        </button>
      </div>

      <div className='faq-answer'>
        <p className='answer'>{question.Message}</p>
      </div>
    </StyledSingleFaq>
  );
};

const StyledSingleFaq = styled.li`
  background: #fff7f5;
  box-shadow: 0px 20px 40px rgba(238, 77, 71, 0.1);
  border-radius: 10px;
  /* width: 27.5rem; */
  max-height: 25.5rem;
  .faq-title {
    cursor: pointer;
    background: #ffffff;
    box-shadow: 0px 20px 40px rgba(238, 77, 71, 0.1);
    border-radius: 10px;
    /* width: 27.5rem; */
    height: 6.5rem;

    display: flex;
    justify-content: space-around;
    align-items: center;

    h4.title {
      font-family: Rubik;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 30px;
      color: #402b2b;
      padding: 0 2rem;
      width: 85%;
    }

    button {
      /* color: #ecf0f1; */
      width: 15%;

      color: #ee4d47;

      background: transparent;
      /* width: 70px;
      height: 70px; */
      position: relative;
      /* font-size: 50px; */
      cursor: pointer;
      border: 0;
      outline: 0;
      padding: 0;
    }
  }

  .faq-answer {
    p.answer {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 30px;
      color: #402b2b;
      padding: 2rem 1rem;
    }
  }
`;

export default SingleFaq;
