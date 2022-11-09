import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Molloy from "../Pictures/molloylogo.jpg";
export default function csc2440() {
  return (
    <>
      <img id="molloylogo" src={Molloy} alt="molloy log" />

      <h1>CSC 2440 Data Structures</h1>
      <p class="paragraph">
        Complementing CSC 2430, this course will have students implement
        abstract data types and derive solutions to a number of algorithmic
        problems, choosing the appropriate data structures to use and analyzing
        the space and time complexity of the approaches. Topics include stacks,
        queues, trees, hash maps, sets, bags and graphs.
      </p>
      <h2 class="sub"> Credits</h2>
      <p> 4 </p>
      <h2 class="sub"> Prerequisite </h2>
      <p> CSC 1200. Pre/Corequisite: CSC2430 </p>
      <h2 class="sub"> Distribution </h2>
      <p> Mathematics/Computer studies </p>
      <h2 class="sub"> Offered </h2>
      <p> Spring </p>
      <Link to="../home">Go Back</Link>
      <Link to="../home/mat1180"> or go to Mat Courses</Link>
    </>
  );
}
