import { LinkComponent } from "../../components/LinkComponent";
import SmallPagination from "../../components/SmallPagination";
import CustomVideoPlayer from "../../components/VideoPlayer";
import "./Registration.css";

const RegistrationPage = () => {
  return (
    <div className="registration-container">
      <div className="content-registration">
        <div className="video-container video-container-registration">
          <CustomVideoPlayer />
          <h2>Реєстрація на платформі</h2>
          <p>
            На даному етапі потрібно створити аккаунт на платформі брокера, для
            того щоб практикуватись та заробляти, згори ти можеш бачити детальну
            інструкцію як зареєструватись
          </p>
          <LinkComponent
            to="/check-sign-up"
            className="link-register"
            svgColor={"#fff"}
          >
            Зареєструватись
          </LinkComponent>
        </div>
        <div className="link-container">
          <SmallPagination activeFirst={false} activeThird={true} />
          <LinkComponent
            to="/check-sign-up"
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
