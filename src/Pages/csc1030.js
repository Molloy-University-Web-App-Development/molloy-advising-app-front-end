import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Molloy from "../Pictures/molloylogo.jpg";
export default function csc1030() {
  return (
    <>
      <img id="molloylogo" src={Molloy} alt="molloy log" />

      <h1>CSC 1030 Visual Programming</h1>
      <p class="paragraph">
        An introduction to computer programming through the use of drag-and-drop
        code blocks. The purpose of the course is to provide an introduction to
        programming logic and algorithmic problem solving strategies for
        students with little to no prior programming experience. Students will
        learn how to use the basic programming constructs such as variables,
        conditional statement, lists, loops and functions to solve problems by
        assembling and customizing blocks of code. They will also see how the
        visual blocks generate actual code and learn how to write some of their
        own in a friendly beginner language such as Python.
      </p>
      <h2 class="sub"> credits</h2>
      <p> 3 </p>
      <h2 class="sub"> Distribution </h2>
      <p> Mathematics/Computer studies </p>
      <h2 class="sub"> Offered </h2>
      <p> Spring </p>
      <Link to="../home">Go Back</Link>
      <Link to="../home/csc1200"> or Next Course</Link>
    </>
  );
}
