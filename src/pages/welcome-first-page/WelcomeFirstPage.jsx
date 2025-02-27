// import React, { useState, useEffect } from "react";
import { LinkComponent } from "../../components/LinkComponent";
import SmallPagination from "../../components/SmallPagination";
import CustomVideoPlayer from "../../components/VideoPlayer";
import VideoPlayer from "../../components/VideoPlayer";
import "./WelcomeFirstPage.css";

const WelcomeFirstPage = () => {
  return (
    <div className="welcomepage-container">
      <div className="content">
        <div className="video-container">
          <div className="placeholder-video">
            <CustomVideoPlayer />
          </div>
          <h2>Вступний урок</h2>
          <h2>№1</h2>
          <p>
            В цьому уроці ти дізнаєшся все про комʼюніті, що ти отримаєш, та як
            правильно проходити навчання
          </p>
        </div>
        <div className="link-container">
          <SmallPagination activeFirst={true} activeThird={false} />
          <LinkComponent
            to="/welcome-second"
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

export default WelcomeFirstPage;
