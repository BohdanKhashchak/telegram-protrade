import React, { useState, useEffect } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      <div className="content">
        <h1>PROTRADE COMMUNITY</h1>
        <div className="container-loader">
          {loading && <div className="loader"></div>}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
