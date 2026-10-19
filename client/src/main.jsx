import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import myImg from "./assets/heart.svg";
import "./theme.css";
import App from "./App.jsx";

const savedTheme = localStorage.getItem("theme") || "dark";

document.documentElement.setAttribute("data-theme", savedTheme);

const favicon = document.querySelector("link[rel='icon']");
if (favicon) favicon.href = myImg;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
