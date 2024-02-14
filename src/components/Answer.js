const Answer = ({ answerText }) => {
  return (
    <div className="answer">
      <div className="answer-letter">A</div>
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answer;
