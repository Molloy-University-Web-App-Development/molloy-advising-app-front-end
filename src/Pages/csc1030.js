import { Link } from "react-router-dom";
import Header from "../Components/Header";
export default function csc1030() {
  return (
    <>
      <Header></Header>
      <h1>CSC 1030 Visual Programming</h1>
      <p>
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
      <h2> credits</h2>
      <p> 3 </p>
      <h2> Distribution </h2>
      <p> Mathematics/Computer studies </p>
      <h2> Offered </h2>
      <p> Spring </p>
      <Link to="../home">Go Back</Link>
      <Link to="../home/csc1200"> or Next Course</Link>
    </>
  );
}
