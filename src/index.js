import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Home.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <h1>home route</h1>
    </div>
  );
};
const Learn = () => {
  return (
    <div className="wrapper">
      <h1>learn</h1>
      <h4>learn section</h4>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    {/* ROUTER */}
    <BrowserRouter>
      <Routes>
        {/* / is home route */}
        <Route path="/" element={<Home />} />
        {/* <Navigate to="/learn" redirects */}
        <Route path="/myapps" element={<Navigate to="/learn" />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
