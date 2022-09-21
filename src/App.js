import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MajorReq from "./pages/MajorReq";
import MajorReqNewMedia from "./pages/MajorReqNewMedia";
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
              <h1>ACADEMICS AT MOLLOY UNIVERSITY</h1>
              <h3>Welcome to the best decision of your life.</h3>
              <p>
                Molloy College is everything you want in an institution of
                higher learning . . . and more. Our talented professors and
                experiential learning opportunities such as internships and
                global studies will prepare you for a successful and rewarding
                career. As a Molloy student, you will be challenged beyond the
                traditional classroom through experiences designed to enhance
                intellectual, ethical, spiritual and social development.
              </p>
              <p>kevin kevin kevin kevin kevin</p>

              <h4>Offered Major Requirements</h4>
              <p>
                <Link to="majorreq">Computer Science Major Requirements</Link>
              </p>
              <p>
                <Link to="majorreqnewmedia">New Media Requirements</Link>
              </p>
            </>
          }
        ></Route>
        <Route exact path="/majorreq/" element={<MajorReq />}></Route>
        <Route
          exact
          path="/majorreqnewmedia/"
          element={<MajorReqNewMedia />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
