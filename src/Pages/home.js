import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Logo from "../Pictures/mulogo.jpg";
export default function home() {
  return (
    <>
      <img id="mulogo" src={Logo} alt="molloy Logo" />
      <h1> Computer Science Minor</h1>
      <h2> Sponsoring Department </h2>
      <p> Mathematics and Computer Studies </p>
      <p> Molloy Program of Study Code:CCSMI </p>
      <p>
        {" "}
        This is designed to give students sufficient background and knowledge
        for further studies in graduate school or for positions involving
        computer programming.
      </p>

      <h1 id="computercourses"> Requirements </h1>

      <h3> Required Courses </h3>
      <aside id="csc">
        <table>
          <tr>
            <th>
              <Link to="Csc1030">Csc 1030</Link>|Visual Programming | 3
            </th>
          </tr>
        </table>
        <table>
          <tr>
            <th>
              <Link to="Csc1200">Csc 1200</Link>|Functional programming 1 | 3
            </th>
          </tr>
        </table>
        <table>
          <tr>
            <th>
              {" "}
              <Link to="Csc2350">Csc 2350</Link>| Object-Oriented Programming
              and Design | 3{" "}
            </th>
          </tr>
        </table>
        <table>
          <tr>
            <th>
              {" "}
              <Link to="Csc2440">Csc 2440</Link>| Data Structures | 4
            </th>
          </tr>
        </table>
      </aside>
      <h2>
        Complete 3-4 Credits of CSC 2000/3000-level or CIS2240 or CIS 3390(3-4
        credits)
      </h2>

      <h3 id="mathcourses">complete either (3-4 credits)</h3>
      <aside id="math">
        <table>
          <tr>
            <th>
              <Link to="mat1180">Mat 1180</Link> pre-calculus | 3
            </th>
          </tr>
        </table>
        <table>
          <tr>
            <th>
              {" "}
              <Link to="mat2200">Mat 2200</Link> Calculus for Science and
              Business | 3
            </th>
          </tr>
        </table>
        <table>
          <tr>
            <th>
              {" "}
              <Link to="mat2210">Mat 2210</Link> Calculus 1 | 4{" "}
            </th>
          </tr>
        </table>
      </aside>
      <p class="copyright"> Total Credit Hours:22-24</p>
      <p class="copyright">
        Please note that this minor does not suffice for an area of
        concentration in the interdisciplinary studies major(described in the
        Interdisplinary Studies section.)
      </p>

      <Link to="../">Go Back</Link>
    </>
  );
}
