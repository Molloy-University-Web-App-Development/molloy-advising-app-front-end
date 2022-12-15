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
              <div id="gridhome">
                <div>
                  <p>
                    Here you will find the Fall 2022 schedule for Molloy
                    University:
                  </p>
                  <Link to="academiccalendar">Fall 2022</Link>
                  <p>Here you will find the Spring 2023 schedule:</p>
                  <Link to="spring2022">Spring 2023</Link>
                </div>
                <figure>
                  <img src={campus} alt="Molloy University campus" />
                  <figcaption>Molloy University campus</figcaption>
                  <ul>
                    <li>
                      <a href="https://github.com/tpersaud2">My Github</a>
                    </li>{" "}
                    <li>
                      <a href="https://lionsmolloy0-my.sharepoint.com/:p:/g/personal/tpersaud2_lions_molloy_edu/ETdjEuBEmaRGgFqBm1Hc_T0BtS3KP1Vb__nQugHLcXLOrg?e=OPOZ2f">
                        Presentation link
                      </a>
                    </li>
                  </ul>
                </figure>
              </div>
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
