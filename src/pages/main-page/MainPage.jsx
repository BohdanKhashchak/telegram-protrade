import { Link } from "@tanstack/react-router";
import MaterialBlock from "../../components/materialBlock/MaterialBlock";
import "./MainPage.css";
import { useEffect, useState } from "react";
import { getCategories } from "../../api/gateway";

const MainPage = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const materialsData = await getCategories();
      setMaterials(materialsData);
    };

    fetchData();
  }, []);

  return (
    <div className="main-container">
      <div className="user">
        <div>
          <p>Вітаю в комʼюніті</p>
          <h4>
            user name
            <img src="/emoji.svg" alt="emoji" />
          </h4>
        </div>
        <img src="/user.svg" alt="avatar" />
      </div>
      <div className="main-content">
        <h3>Вивчай все разом з ProTrade Community</h3>
        <div className="materials">
          {materials.map((material, index) => (
            <Link
              style={{ textDecoration: "none" }}
              key={index}
              to={material.url}
            >
              <MaterialBlock
                bgColor={material.bgColor}
                title={material.title}
                lessons={material.lessons}
                time={material.time}
                description={material.description}
                rating={material.rating}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
