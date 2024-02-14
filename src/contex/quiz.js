import { createContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../helpers";

const initialState = {
  currentQuestionIndex: 0,
  questions: questions, // if the name is the same you can write one
  showResults: false,
  answers: shuffleAnswers(questions[0]),
};

const reducer = (state, action) => {
  if (action.type === "NEXT_QUESTION") {
    const showResults = state.currentQuestionIndex === questions.length - 1;
    const currentQuestionNumber = showResults
      ? state.currentQuestionIndex
      : state.currentQuestionIndex + 1;
    const answers = showResults
      ? []
      : shuffleAnswers(state.questions[currentQuestionNumber]);

    return {
      ...state,
      currentQuestionIndex: currentQuestionNumber,
      showResults,
      answers,
    };
  }

  if (action.type === "RESTART") {
    return initialState;
  }

  return state;
};

export const QuizContex = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  // console.log(value, "***");
  return <QuizContex.Provider value={value}>{children}</QuizContex.Provider>;
};
