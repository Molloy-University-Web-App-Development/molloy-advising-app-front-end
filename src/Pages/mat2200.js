import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Molloy from "../Pictures/molloylogo.jpg";
export default function mat2200() {
  return (
    <>
      <img id="molloylogo" src={Molloy} alt="molloy log" />
      <h1>MAT 2200 Calculus for Science and Business</h1>
      <p class="paragraph">
        Limits and continuity; derivatives maxima and minima; antiderivatives;
        definite integral; fundamental theorem of calculus; techniques of
        integration. NOTE: Graphing Calculator Required.
      </p>
      .<h2 class="sub"> Credits</h2>
      <p> 3 </p>
      <h2 class="sub"> Prerequisite </h2>
      <p> Not open to students who have passe MAT 2210 </p>
      <h2 class="sub"> Distribution </h2>
      <p> Mathematics/Computer studies </p>
      <h2 class="sub"> Offered </h2>
      <p> Not Offered Every Year </p>
      <Link to="../home">Go Back</Link>
      <Link to="../home/mat2210"> or Next Course</Link>
    </>
  );
}
