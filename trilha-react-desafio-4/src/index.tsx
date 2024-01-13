import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Login";
import GlobalStyles from "./global";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <Router>
      <GlobalStyles />
      <App />
      </Router>
  </React.StrictMode>
);
