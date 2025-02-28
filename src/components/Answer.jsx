const Answer = ({ answer, setAnswer, className, rightAnswer }) => {
  return (
    <button
      className={`answer-button ${className}`}
      onClick={() => setAnswer(answer)}
    >
      {answer}
    </button>
  );
};

export default Answer;
