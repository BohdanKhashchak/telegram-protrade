import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const initializeTelegramWebApp = () => {
  if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.ready();

    const user = window.Telegram.WebApp.initDataUnsafe;
    const userId = user?.user?.id;

    if (userId) {
      localStorage.setItem("user_id", userId);
    }
  } else {
    console.error("No user data available.");
  }
};

initializeTelegramWebApp();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
