import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Molloy from "../Pictures/molloylogo.jpg";
export default function mat2210() {
  return (
    <>
      <img id="molloylogo" src={Molloy} alt="molloy log" />
      <Header></Header>
      <h1>MAT 2210 Calculus I</h1>
      <p class="paragraph">
        Linear, exponential, logarithmic, power, polynomial and rational
        functions; inverse functions; trigonometric functions; limits and
        continuity; derivative definition and formulas; maxima and minima,
        concavity, curve sketching; definite and indefinite integrals;
        applications.
      </p>
      .<h2 class="sub"> Credits</h2>
      <p> 4</p>
      <h2 class="sub"> Prerequisite </h2>
      <p>MAT 1180 or its High School Equivalent. </p>
      <h2 class="sub"> Distribution </h2>
      <p> Mathematics/Computer studies </p>
      <h2 class="sub"> Offered </h2>
      <p> Fall </p>
      <Link to="../home">Go Back</Link>
      <Link to="../home/csc1030"> or go to CSC Courses </Link>
    </>
  );
}
