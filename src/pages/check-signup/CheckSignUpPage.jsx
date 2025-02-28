import { useState } from "react";
import { LinkComponent } from "../../components/LinkComponent";
import "./CheckSignUpPage.css";
import CustomVideoPlayer from "../../components/VideoPlayer";
import SuccessPage from "../../components/success/SuccessPage";

const CheckSignUpPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);

  if (registerSuccess) {
    return <SuccessPage text="Реєстрація успішна" linkUrl="/materials" />;
  }

  return (
    <div className="check-singup-container">
      <div className="content-sign-up">
        <h1>Вкажи своє аккаунт ID для перевірки реєстрації</h1>
        <input
          className="input"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="link-checkup-sign-up"
          onClick={() => setRegisterSuccess(true)}
        >
          Перевірити
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth="1.5" />
          </svg>
        </button>
        <p>Ось додатково інструкція, як знайти аккаунт ID</p>
        <CustomVideoPlayer />
      </div>
    </div>
  );
};

export default CheckSignUpPage;
