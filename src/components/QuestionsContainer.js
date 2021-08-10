import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SingleFaq from "./SingleFaq";

const QuestionsContainer = () => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    try {
      const response = await fetch(
        "https://lxpi9qne2a.api.quickmocker.com/getReactFAQs"
      );

      if (!response.ok) {
        throw Error(response.status + " " + response.statusText);
      }
      const data = await response.json();
      setQuestions(data.response);
      console.log(data.response);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <StyledQuestionsContainer>
      <ul>
        {questions.map((question, index) => (
          <li>
            <SingleFaq question={question} index={index} />
            {/* {question.title.substring(1, 2) === "."
              ? question.title.substring(3)
              : question.title.substring(2, 3) === "."
              ? question.title.substring(4)
              : question.title} */}
          </li>
        ))}
      </ul>
    </StyledQuestionsContainer>
  );
};

const StyledQuestionsContainer = styled.div`
  padding: 10rem 0;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 2rem;
  }
`;

export default QuestionsContainer;
