import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import "./Materials.css";

const MaterialsPage = () => {
  const navigate = useNavigate();

  const lessons = [
    {
      id: 1,
      lessonTitle: "1: Introduction",
      description: "Learn the basics of binary options and how they work.",
      time: "30",
      tasks: "26 test tasks",
    },
    {
      id: 2,
      lessonTitle: "2: Technical",
      description: "Learn how to use technical analysis for trading.",
      time: "40",
      tasks: "30 test tasks",
    },
    {
      id: 3,
      lessonTitle: "3: Fundamental",
      description: "Understand how to use fundamental analysis in trading.",
      time: "25",
      tasks: "20 test tasks",
    },
  ];

  // State to track the currently expanded lesson
  const [expandedLesson, setExpandedLesson] = useState(null);

  // Toggle the expanded lesson
  const toggleLesson = (id) => {
    setExpandedLesson((prev) => (prev === id ? null : id));
  };

  return (
    <div className="first-materials-container">
      <div className="first-materiasl-content">
        <Link to="/main" className="link-pro">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 6.5L9 12.5L15 18.5" stroke="white" strokeWidth="1.5" />
          </svg>
          Про навчання
          <span></span>
        </Link>
        <div>
          <h4>Title</h4>
          <div className="lessons">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.46429 3.95714C6.61667 3.48237 5.03108 2.90163 3.28265 2.69419C2.57751 2.61053 2 3.1916 2 3.90168V10.7588C2 11.4689 2.58031 12.0347 3.27897 12.1616C4.85647 12.4481 6.16856 13.2045 7.0058 13.8025C7.14606 13.9027 7.30132 13.9786 7.46429 14.0302V3.95714ZM8.53571 14.0303C8.69846 13.9788 8.85351 13.9031 8.99359 13.803C9.83081 13.2049 11.1431 12.4482 12.7211 12.1618C13.4197 12.0349 14 11.469 14 10.7589V3.90181C14 3.19172 13.4225 2.61066 12.7174 2.69431C10.9689 2.90175 9.38333 3.48242 8.53571 3.95715V14.0303Z"
                fill="white"
              />
            </svg>
            Number/Number уроки
          </div>
          <div className="details-block">
            <span>3 години</span>
            <span>26 тестових завданнь</span>
          </div>
          <div className="user-on-lessons">
            <img src="/user-on-lessons.svg" alt="avatar" />
            Саша Максимів
          </div>
          <p className="lessons-description">
            В цьому навчанні ти знайдеш все про бінарні опціони, а також вивчиш
            технічний та фундаментальний аналізи
          </p>
          <div>
            <p className="title-studing">Зміст навчання</p>
            <div className="lessons-list">
              {lessons.map((lesson) => (
                <div key={lesson.id} className="lesson-accordion">
                  <button
                    className={`lesson-title ${
                      expandedLesson === lesson.id ? "activeTitle" : ""
                    }`}
                    onClick={() => toggleLesson(lesson.id)}
                  >
                    <div>
                      Модуль {lesson.lessonTitle}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`accordion-icon ${
                          expandedLesson === lesson.id ? "rotated" : ""
                        }`}
                      >
                        <path
                          d="M6 15L12 9L18 15"
                          stroke="#161616"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <span>3 lessons</span>
                      <svg
                        width="4"
                        height="5"
                        viewBox="0 0 4 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2" cy="2.5" r="2" fill="#616161" />
                      </svg>

                      <span>180 mins</span>
                    </div>
                  </button>

                  {expandedLesson === lesson.id && (
                    <div className="lesson-details">
                      <hr />
                      <p>
                        <button
                          className="lesson-play"
                          onClick={() => navigate({ to: `/lesson?number=1` })}
                        >
                          <img src="/lesson-play.svg" alt="play-button" />
                          <div>
                            <p> {lesson.description}</p>
                            <p className="lesson-time">{lesson.time} хв</p>
                          </div>
                        </button>
                      </p>
                      <hr />
                      <div>
                        <button className="take-exercise">Take Exercise</button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialsPage;
