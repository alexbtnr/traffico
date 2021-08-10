import React from "react";
import styled from "styled-components";

const SingleFaq = ({ question, index, toggleFaq }) => {
  return (
    <StyledSingleFaq onClick={() => toggleFaq(index)}>
      <div className={`faq ${question.active ? "open" : ""}`}>
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
            <span className='minus'>
              <i className='las la-minus la-2x'></i>
            </span>
          </button>
        </div>

        <div className='faq-answer'>
          <p className='answer'>{question.Message}</p>
        </div>
      </div>
    </StyledSingleFaq>
  );
};

const StyledSingleFaq = styled.li`
  .faq {
    background: #fff7f5;
    box-shadow: 0px 20px 40px rgba(238, 77, 71, 0.1);
    border-radius: 10px;
    max-height: 25.5rem;

    .faq-title {
      button {
        width: 15%;
        color: #ee4d47;
        background: transparent;
        position: relative;
        cursor: pointer;
        border: 0;
        outline: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .plus,
        .minus {
          position: absolute;
          text-align: center;
          transition: 0.5s all ease-out;
        }

        .plus {
          opacity: 1;
          transform: rotate(0deg);
        }
        .minus {
          opacity: 0;
          transform: rotate(-90deg);
        }
      }
    }

    .faq-answer {
      opacity: 0;
      max-height: 0;
      overflow-y: hidden;
      transition: all 0.4s ease;
    }
  }

  .faq.open {
    .faq-title {
      button {
        .plus {
          opacity: 0;
          transform: rotate(90deg);
        }
        .minus {
          opacity: 1;
          transform: rotate(0deg);
        }
      }
    }
  }

  .faq-title {
    cursor: pointer;
    background: #ffffff;
    box-shadow: 0px 20px 40px rgba(238, 77, 71, 0.1);
    border-radius: 10px;
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
