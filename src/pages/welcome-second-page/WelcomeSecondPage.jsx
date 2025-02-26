// import React, { useState, useEffect } from "react";
import { LinkComponent } from "../../components/LinkComponent";
import SmallPagination from "../../components/SmallPagination";
import "./WelcomeSecondPage.css";
import { Link } from "@tanstack/react-router";

const WelcomeSecondPage = () => {
  return (
    <div className="welcomepage-container">
      <div className="content">
        <div className="video-container">
          <div className="placeholder-video"></div>
          <h2>Вступний урок</h2>
          <h2>№2</h2>
          <p>
            В цьому уроці ти дізнаєшся все про трейдинг, його види, та як на
            ньому заробляють мільйони людей
          </p>
        </div>
        <div className="link-container">
          <SmallPagination activeSecond={true} activeThird={false} />
          <LinkComponent
            to="/registration"
            className="link-next"
            svgColor={"#161616"}
          >
            Далі
          </LinkComponent>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSecondPage;
