import { useContext } from "react";
import Answer from "./Answer";
import { QuizContex } from "../contex/quiz";

const Question = () => {
  const [quizState] = useContext(QuizContex);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  console.log(quizState, "____________________");
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer answerText={answer} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Question;
