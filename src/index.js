import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";
import "./index.css";
import "./Home.css";
import { Home } from "./components/Home";
import { Learn } from "./components/Learn";
import reportWebVitals from "./reportWebVitals";

import Courses from "./components/Courses";
import Boundles from "./components/Boundles";

ReactDOM.render(
  <React.StrictMode>
    {/* ROUTER */}
    <BrowserRouter>
      <Routes>
        {/* / is home route */}
        <Route path="/" element={<Home />} />
        {/* <Navigate to="/learn" redirects */}
        <Route path="/myapps" element={<Navigate replace to="/learn" />} />
        <Route path="/learn" element={<Learn />}>
          <Route path="courses" element={<Courses />} />
          <Route path="bundles" element={<Boundles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
