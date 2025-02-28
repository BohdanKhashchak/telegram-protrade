import React, { useState, useEffect } from "react";
import "./SuccessPage.css";
import { Link } from "@tanstack/react-router";

const SuccessPage = ({ text, rightAnswers, linkUrl }) => {
  return (
    <div className="success-container">
      <div className="content-success">
        <div>
          <svg
            width="127"
            height="127"
            viewBox="0 0 127 127"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="63.5"
              cy="63.5"
              r="61"
              stroke="#FFCC00"
              strokeWidth="5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M89.6355 46.0979C88.1974 44.6598 85.8658 44.6598 84.4277 46.0979L56.3636 74.162L43.9228 61.7211C42.4847 60.2831 40.1531 60.2831 38.715 61.7211C37.2769 63.1592 37.2769 65.4908 38.715 66.9289L53.7597 81.9735C53.7597 81.9736 53.7597 81.9736 53.7598 81.9736C54.0828 82.2966 54.4508 82.5471 54.8437 82.725C56.2001 83.3392 57.8524 83.0887 58.9675 81.9736L89.6355 51.3057C91.0736 49.8676 91.0736 47.536 89.6355 46.0979Z"
              fill="#FFCC00"
            />
          </svg>

          <h1>{text}</h1>
          {rightAnswers && <p>{rightAnswers}/10</p>}
        </div>
        <Link to={linkUrl} className="link-button-continue">
          Продовжити
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
