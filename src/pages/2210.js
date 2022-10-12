import { Link } from "react-router-dom";

export default function CalculusI() {
  return (
    <>
      <h1>MAT 2210 Calculus I</h1>
      <p>
        (formerly MAT 221; MAT 125; formerly Analytic Geometry and Calculus I)
      </p>
      <p>
        Linear, exponential, logarithmic, power, polynomial and rational
        functions; inverse functions; trigonometric functions; limits and
        continuity; derivative definition and formulas; maxima and minima,
        concavity, curve sketching; definite and indefinite integrals;
        applications.
      </p>
      <h2 id="credit">Credits</h2>4<h2>Distribution</h2>
      Mathematics/Computer Studies
      <h2>Offered</h2>
      Fall
      <br />
      <br />
      <Link to="../">Go Back</Link>
    </>
  );
}
