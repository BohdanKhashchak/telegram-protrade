import React, { useState, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import "./HomePage.css";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      navigate({ to: "/welcome-first" });
    }
  }, [loading, navigate]);

  return (
    <div className="home-container">
      <div className="content-home">
        <h1>PROTRADE COMMUNITY</h1>
        <div className="container-loader">
          <div className="loader"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
