import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import VisualProgramming from "./pages/1030";
import FunctionalProgrammingI from "./pages/1200";
import ObjectOrientedProgrammingandDesign from "./pages/2350";
import DataStructures from "./pages/2440";
import PreCalculus from "./pages/1180";
import CalculusforScienceandBusiness from "./pages/2200";
import CalculusI from "./pages/2210";
import Header from "./components/Header";
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
              <p>Check out what you need for the minor requirements :)</p>
              <>
                <h1>Computer Science Minor</h1>
                <p>
                  <strong>Sponsoring department:</strong>
                  <br />
                  Mathematics and Computer Studies
                  <br />
                  Molloy Program of Study Code: CSCMI
                  <br />
                </p>
                <p>
                  This is designed to give students sufficient background and
                  knowledge for further studies in graduate school or for
                  positions involving computer programming.
                </p>

                <h2>Requirements</h2>
                <h3>Required courses</h3>

                <ul>
                  <li>
                    <Link to="VisualProgramming">CSC 1030</Link> | Visual
                    Programming | 3
                  </li>

                  <li>
                    <Link to="FunctionalProgrammingI">CSC 1200</Link> |
                    Functional Programming I | 3
                  </li>

                  <li>
                    <Link to="ObjectOrientedProgrammingandDesign">
                      CSC 2350
                    </Link>{" "}
                    | Object-Oriented Programming and Design | 3
                  </li>

                  <li>
                    <Link to="DataStructures">CSC 2440</Link> | Data Structures
                    | 4
                  </li>
                </ul>

                <strong>
                  Complete 3-4 Credits of CSC 2000/3000-level or CIS 2240 or CIS
                  3390 (3-4 Credits)
                </strong>

                <h3>Complete either (3-4 Credits)</h3>
                <ul>
                  <li>
                    <Link to="PreCalculus">MAT 1180</Link> | Pre-Calculus | 3
                  </li>

                  <li>
                    <Link to="CalculusforScienceandBusiness">MAT 2200</Link> |
                    Calculus for Science and Business | 3
                  </li>

                  <li>
                    <Link to="CalculusI">MAT 2210</Link> | Calculus I | 4
                  </li>
                </ul>
                <p>Total Credit Hours: 22-24</p>

                <p>
                  Please note that this minor does not suffice for an area of
                  concentration in the <cite>Interdisciplinary Studies</cite>{" "}
                  major (described in the Interdisciplinary Studies section).
                </p>
              </>
            </>
          }
        ></Route>
        <Route
          exact
          path="/VisualProgramming"
          element={<VisualProgramming />}
        ></Route>
        <Route
          exact
          path="/FunctionalProgrammingI"
          element={<FunctionalProgrammingI />}
        ></Route>
        <Route
          exact
          path="/ObjectOrientedProgrammingandDesign"
          element={<ObjectOrientedProgrammingandDesign />}
        ></Route>
        <Route
          exact
          path="/DataStructures"
          element={<DataStructures />}
        ></Route>
        <Route exact path="/PreCalculus" element={<PreCalculus />}></Route>
        <Route
          exact
          path="/CalculusforScienceandBusiness"
          element={<CalculusforScienceandBusiness />}
        ></Route>
        <Route exact path="/CalculusI" element={<CalculusI />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
