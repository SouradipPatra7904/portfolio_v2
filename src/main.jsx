import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { applySavedTheme } from "./theme";

applySavedTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
