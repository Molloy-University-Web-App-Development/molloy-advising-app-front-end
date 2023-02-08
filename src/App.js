import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MajorReq from "./pages/MajorReq";
import MajorReqNursing from "./pages/MajorReqNursing";
import Header from "./components/Header.js";
// import Foo from "./Foo";

export default function App() {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <h1 id="home">ACADEMICS AT MOLLOY UNIVERSITY</h1>
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
                <p>
                  But ignore literally everything that we just said because the
                  only thing we offer is Computer Science. Suck it, Nursing.
                </p>

                <h4>Offered Major Requirements</h4>
                <p>
                  <Link to="majorreq">Computer Science Major Requirements</Link>
                </p>
                <p>
                  <Link to="majorreqnursing">Nursing Major Requirements</Link>
                </p>
              </>
            }
          ></Route>
          <Route exact path="/majorreq/" element={<MajorReq />}></Route>
          <Route
            exact
            path="/majorreqnursing/"
            element={<MajorReqNursing />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
