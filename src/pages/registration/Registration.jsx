// import React, { useState, useEffect } from "react";
import { LinkComponent } from "../../components/LinkComponent";
import SmallPagination from "../../components/SmallPagination";
import "./Registration.css";

const RegistrationPage = () => {
  return (
    <div className="registration-container">
      <div className="content">
        <div className="video-container video-container-registration">
          <div className="placeholder-video"></div>
          <h2>Реєстрація на платформі</h2>
          <p>
            На даному етапі потрібно створити аккаунт на платформі брокера, для
            того щоб практикуватись та заробляти, згори ти можеш бачити детальну
            інструкцію як зареєструватись
          </p>
          <LinkComponent
            to="/signup"
            className="link-register"
            svgColor={"#fff"}
          >
            Зареєструватись
          </LinkComponent>
        </div>
        <div className="link-container">
          <SmallPagination activeFirst={false} activeThird={true} />
          <LinkComponent
            to="/registration-succuss"
            className="link-checkup"
            svgColor={"#ffcc00"}
          >
            Перевірити
          </LinkComponent>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
