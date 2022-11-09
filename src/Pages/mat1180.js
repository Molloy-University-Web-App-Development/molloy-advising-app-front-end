import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Molloy from "../Pictures/molloylogo.jpg";
export default function mat1180() {
  return (
    <>
      <img id="molloylogo" src={Molloy} alt="molloy log" />
      <h1>MAT 1180 Pre-Calculus </h1>{" "}
      <p class="paragraph">
        This course is for the mathematics major or students who meet the
        prerequisites listed below. The central theme of this course is a
        rigorous study of functions from an analytic, numerical, graphical and
        verbal approach. It includes linear, polynomial, rational, exponential,
        logarithmic and trigonometric functions. Also included is the study of
        systems of equations and inequalities, sequences, series and analytic
        geometry.
      </p>
      .<h2 class="sub"> Credits</h2>
      <p> 3 </p>
      <h2 class="sub"> Prerequisite </h2>
      <p> Not open to students who have passed MAT 1160 or MAT 2210. </p>
      <h2 class="sub"> Distribution </h2>
      <p> Mathematics/Computer studies </p>
      <h2 class="sub"> Offered </h2>
      <p> Spring </p>
      <Link to="../home">Go Back</Link>
      <Link to="../home/mat2200"> or Next Course</Link>
    </>
  );
}
