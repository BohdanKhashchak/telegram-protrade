import React, { useEffect, useState } from "react";
import { Link, useRouter, useSearch } from "@tanstack/react-router";
import "./Test.css";
import CustomVideoPlayer from "../../components/VideoPlayer";
import Answer from "../../components/Answer";

const TestPage = () => {
  const answers = ["answer 1", "answer 2", "answer 24"];
  const { history } = useRouter();
  const [answer, setAnswer] = useState("");
  const search = useSearch({ from: "/test" });
  const [classCheck, setClassCheck] = useState("");

  const lessonNumber = search.number;

  const a = "answer 1";

  useEffect(() => {
    if (answer === a) {
      setClassCheck("right");
    } else {
      setClassCheck("wrong");
    }
  }, [answer]);

  const ifAnswers = true;

  if (ifAnswers) {
    return (
      <div className="answer-container">
        <div className="answer-content">
          <div className="lesson-link-back">
            <button onClick={() => history.go(-1)} className="link-lesson">
              <svg
                width="9"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1.5L2 7.5L8 13.5"
                  stroke="#FFCC00"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
            <span className="lesson-span">Тест №{lessonNumber}</span>
            <img src="/info-icon.svg" alt="?" />
          </div>
          <p className="question-count">Питання</p>
          <h5 className="answer">Тут буде питання з беку</h5>
          <CustomVideoPlayer />
          <div className="test-questions">
            {answers.map((answerElement, index) => (
              <Answer
                className={answer === answerElement ? classCheck : ""}
                key={index}
                answer={answerElement}
                setAnswer={setAnswer}
              />
            ))}
          </div>
          {classCheck ? (
            <div className="test-answers">
              <span className={classCheck}>
                {classCheck === "right" ? "Вірно" : "Не вірно"}
              </span>
              <p>
                На графіку зображено невизначений тренд, так як нема чіткого
                підйому або спаду! Правильна відповідь: Невизначений
              </p>
              <p>Правильна відповідь {a}</p>
              <Link
                to={"/"}
                className="link-button-continue"
                style={{ marginTop: "16px", marginBottom: "20px" }}
              >
                Наступний питання
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-container">
      <div className="lesson-content">
        <div className="lesson-link-back">
          <button onClick={() => history.go(-1)} className="link-lesson">
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1.5L2 7.5L8 13.5"
                stroke="#FFCC00"
                strokeWidth="1.5"
              />
            </svg>
          </button>
          <span className="lesson-span">Тест №{lessonNumber}</span>
          <img src="/info-icon.svg" alt="?" />
        </div>
        <CustomVideoPlayer />
        <h4>Огляд платформи PocketOption</h4>
        <p>
          This course will be your personal guide to be an UI/UX Designer from
          scratch. Go from the basic to professionally!
          <br />
          <br /> At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
        <Link
          to={"/"}
          className="link-button-continue"
          style={{ marginTop: "64px", marginBottom: "40px" }}
        >
          Наступний урок
        </Link>
      </div>
    </div>
  );
};

export default TestPage;
