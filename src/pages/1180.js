import { Link } from "react-router-dom";

export default function PreCalculus() {
  return (
    <>
      <h1>MAT 1180 Pre-Calculus</h1>
      <p>(formerly MAT 118)</p>
      <p>
        This course is for the mathematics major or students who meet the
        prerequisites listed below. The central theme of this course is a
        rigorous study of functions from an analytic, numerical, graphical and
        verbal approach. It includes linear, polynomial, rational, exponential,
        logarithmic and trigonometric functions. Also included is the study of
        systems of equations and inequalities, sequences, series and analytic
        geometry.
      </p>
      <h2 id="credit">Credits</h2>3<h2>Prerequisite</h2>
      Not open to students who have passed MAT 1160 or MAT 2210.
      <h2>Distribution</h2>
      Mathematics/Computer Studies
      <h2>Offered</h2>
      Spring
      <br />
      <br />
      <Link to="../">Go Back</Link>
    </>
  );
}
