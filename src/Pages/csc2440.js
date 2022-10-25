import { Link } from "react-router-dom";
import Header from "../Components/Header";
export default function csc2440() {
  return (
    <>
      <Header></Header>
      <h1>CSC 2440 Data Structures</h1>
      <p>
        Complementing CSC 2430, this course will have students implement
        abstract data types and derive solutions to a number of algorithmic
        problems, choosing the appropriate data structures to use and analyzing
        the space and time complexity of the approaches. Topics include stacks,
        queues, trees, hash maps, sets, bags and graphs.
      </p>
      <h2> Credits</h2>
      <p> 4 </p>
      <h2> Prerequisite </h2>
      <p> CSC 1200. Pre/Corequisite: CSC2430 </p>
      <h2> Distribution </h2>
      <p> Mathematics/Computer studies </p>
      <h2> Offered </h2>
      <p> Spring </p>
      <Link to="../home">Go Back</Link>
      <Link to="../home/mat1180"> or go to Mat Courses</Link>
    </>
  );
}
