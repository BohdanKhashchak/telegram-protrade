import React from "react";
import { Link, useRouter, useSearch } from "@tanstack/react-router";
import "./Lesson.css";
import CustomVideoPlayer from "../../components/VideoPlayer";
import SuccessPage from "../../components/success/SuccessPage";

const LessonPage = () => {
  const { history } = useRouter();

  const search = useSearch({ from: "/lesson" });
  const lessonNumber = search.number;

  if (lessonNumber === 2) {
    return <SuccessPage text="Модуль завершено" />;
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
          <span className="lesson-span">Урок №{lessonNumber}</span>
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
          laborum et dolorum fuga.{" "}
        </p>
        <Link
          className="link-button-continue"
          style={{ marginTop: "64px", marginBottom: "40px" }}
          to={"/lesson?number=2"}
        >
          Наступний урок
        </Link>
      </div>
    </div>
  );
};

export default LessonPage;
