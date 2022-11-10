import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AcademicCalendar from "./pages/AcademicCalendar";
// import Foo from "./Foo";
import Spring2022 from "./pages/Spring2022";
import Header from "./components/Header";
import campus from "./assets/kh_2016_a.jpg";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <h1 id="welcome">Welcome to the Academic Calendar.</h1>
              <p>
                Here you will find the Fall 2022 schedule for Molloy University:
              </p>
              <Link to="academiccalendar">Fall 2022</Link>
              <p>Here you will find the Spring 2023 schedule:</p>
              <Link to="spring2022">Spring 2023</Link>
              <figure>
                <img src={campus} alt="Molloy University campus" />
                <figcaption>Molloy University campus</figcaption>
              </figure>
            </>
          }
        ></Route>
        <Route
          exact
          path="/academiccalendar"
          element={<AcademicCalendar />}
        ></Route>
        <Route exact path="/spring2022" element={<Spring2022 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
