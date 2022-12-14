import React from "react";
import "./styles.css";
import CompSci from "./pages/CompSci.js";
import Majors from "./pages/Majors.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import Courses from "./components/Courses.js";
import Footer from "./components/Footer";
import Doctorates from "./pages/Doctorates.js";
import Masters from "./pages/Masters.js";
import MolloyLife from "./pages/MolloyLife.js";
import DegreeReq from "./pages/DegreeReq.js";

// import Foo from "./Foo";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Majors" element={<Majors />}></Route>
        <Route exact path="/CompSci" element={<CompSci />}></Route>
        <Route exact path="/Doctorates" element={<Doctorates />}></Route>
        <Route exact path="/Masters" element={<Masters />}></Route>
        <Route exact path="/MolloyLife" element={<MolloyLife />}></Route>
        <Route path="/CompSci/DegreeReq" element={<DegreeReq />}></Route>
        <Route exact path="/DegreeReq" element={<DegreeReq />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
