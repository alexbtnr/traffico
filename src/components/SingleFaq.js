import React from "react";
import styled from "styled-components";

const SingleFaq = ({ question }) => {
  return (
    <StyledSingleFaq>
      {question.title.substring(1, 2) === "."
        ? question.title.substring(3)
        : question.title.substring(2, 3) === "."
        ? question.title.substring(4)
        : question.title}
    </StyledSingleFaq>
  );
};

const StyledSingleFaq = styled.li``;

export default SingleFaq;
