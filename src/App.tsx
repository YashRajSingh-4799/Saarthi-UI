import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Intro1 from "./components/intro1";
import Intro2 from "./components/intro2";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path="/intro1" element={Intro1} />
        <Route  path="/intro2" element={Intro2} />
      </Routes>
    </Router>
  );
};

export default App;
