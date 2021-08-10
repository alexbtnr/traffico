import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoadMore from "./LoadMore";
import SingleFaq from "./SingleFaq";

const QuestionsContainer = () => {
  const [questions, setQuestions] = useState([]);
  const [moreQuestions, setmoreQuestions] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const getQuestions = async () => {
    try {
      const response = await fetch(
        "https://lxpi9qne2a.api.quickmocker.com/getReactFAQs"
      );

      if (!response.ok) {
        throw Error(response.status + " " + response.statusText);
      }
      const data = await response.json();
      const finalData = data.response.map((obj) => ({
        ...obj,
        active: false,
      }));
      setQuestions(finalData);
      console.log(finalData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getMoreQuestions = () => {
    setmoreQuestions(questions);
    setShowMore(!showMore);

    if (showMore) {
      setmoreQuestions([]);
    }
  };

  const toggleFaq = (index) => {
    setQuestions(
      questions.map((faq, i) => {
        if (i === index) {
          faq.active = !faq.active;
        } else {
          faq.active = false;
        }

        return faq;
      })
    );
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <StyledQuestionsContainer>
      <ul>
        {questions.map((question, index) => (
          <SingleFaq
            key={index}
            question={question}
            index={index}
            toggleFaq={toggleFaq}
          />
        ))}

        {moreQuestions.length > 0 && (
          <SingleFaq
            className={
              moreQuestions.length > 0 ? "more-questions" : "less-questions"
            }
            question={questions[0]}
            key={0}
            index={0}
            toggleFaq={toggleFaq}
          />
        )}

        {moreQuestions.length > 0 && (
          <SingleFaq
            className={
              moreQuestions.length > 0 ? "more-questions" : "less-questions"
            }
            question={questions[1]}
            key={1}
            index={1}
            toggleFaq={toggleFaq}
          />
        )}

        <li className='nothing'>nothing</li>
        <LoadMore showMore={showMore} getMoreQuestions={getMoreQuestions} />
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

    li.nothing {
      visibility: hidden;
    }

    li.more-questions {
      display: block;
    }
    li.less-questions {
      display: none;
    }
  }
`;

export default QuestionsContainer;
