import React from "react";
import styled from "styled-components";

const LoadMore = ({ showMore, getMoreQuestions }) => {
  return (
    <StyledLoadMore onClick={getMoreQuestions}>
      <div className={`load-more-container ${showMore && "open"}`}>
        <h4>{showMore ? "show less" : "load more"}</h4>
        <button>
          <span className='plus'>
            <i className='las la-plus la-2x'></i>
          </span>
          <span className='minus'>
            <i className='las la-minus la-2x'></i>
          </span>
        </button>
      </div>
    </StyledLoadMore>
  );
};

const StyledLoadMore = styled.li`
  .load-more-container {
    height: 6.5rem;
    background: #f9cdc8;
    box-shadow: 0px 20px 40px rgba(238, 77, 71, 0.1);
    border-radius: 10px;
    cursor: pointer;
    position: relative;

    h4 {
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      text-transform: uppercase;
      line-height: 30px;
      color: #ed4d47;
      text-align: center;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }

    button {
      width: 15%;

      color: #ee4d47;
      background: transparent;
      position: absolute;
      top: 50%;
      right: 0;
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

  .load-more-container.open {
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
`;

export default LoadMore;
