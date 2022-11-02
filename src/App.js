import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/home";
import Csc1030 from "./Pages/csc1030";
import Csc1200 from "./Pages/csc1200";
import Csc2350 from "./Pages/csc2350";
import Csc2440 from "./Pages/csc2440";
import Mat1180 from "./Pages/mat1180";
import Mat2200 from "./Pages/mat2200";
import Mat2210 from "./Pages/mat2210";
// import Foo from "./Foo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <h1>Hello StackBlitz!</h1>
              <p>Start editing to see some magic happen :)</p>
              <Link to="home">Go to my home page</Link>
            </>
          }
        ></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/home/csc1030" element={<Csc1030 />}></Route>
        <Route exact path="/home/csc1200" element={<Csc1200 />}></Route>
        <Route exact path="/home/csc2350" element={<Csc2350 />}></Route>
        <Route exact path="/home/csc2440" element={<Csc2440 />}></Route>
        <Route exact path="/home/mat1180" element={<Mat1180 />}></Route>
        <Route exact path="/home/mat2200" element={<Mat2200 />}></Route>
        <Route exact path="/home/mat2210" element={<Mat2210 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
