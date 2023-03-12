import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./style.css";

const mediaQuery = window.matchMedia("(min-width: 768px)");

if (mediaQuery.matches) {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
} else {
  // Add a fallback message or redirect to a different page for mobile devices
  const mobileMsg = "Sorry, this app is not available on mobile devices.";
  alert(mobileMsg);
  // or redirect to a different page:
  // window.location = "http://example.com/mobile";
}
