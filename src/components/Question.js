import Answer from "./Answer";

const Question = (quesions) => {
  console.log("Question", quesions);

  return (
    <div>
      <div className="question">Text of our question</div>
      <div className="answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  );
};

export default Question;
