import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./Wrapper";
import "./index.css";
import NoAuth from "./pages/NoAuth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="login" element={<NoAuth />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
