import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import GlobalState from "./context/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <GlobalState>
    </GlobalState> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
