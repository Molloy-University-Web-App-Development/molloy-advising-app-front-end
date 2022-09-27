import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AcademicCalendar from "./pages/AcademicCalendar";
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
              <h1>Welcome to the Academic Calendar.</h1>
              <p>
                Here you will find the Fall 2022 schedule for Molloy University:
              </p>
              <Link to="academiccalendar">Fall 2022</Link>
            </>
          }
        ></Route>
        <Route
          exact
          path="/academiccalendar"
          element={<AcademicCalendar />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
