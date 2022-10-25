import { Link } from "react-router-dom";
import Header from "../Components/Header";
export default function csc1200() {
  return (
    <>
      <Header></Header>
      <h1>CSC 1200 Functional Programming I</h1>
      <p>
        This course provides an accelerated introduction to computer programming
        in scripting language, such as JavaScript, Python or Ruby using a
        functional programming style. The emphasis of the course will be on
        developing logical and algorithmic problem solving skills. Students will
        learn how to state problems precisely and reason about the correctness
        of their code. Topics include function composition, basic string
        processing, Booleans and truth tables, conditional statements, loops
        implemented by backward and forward tail recursion, Arrays and
        higher-order functions. Students will apply their knowledge to the
        partial development of an open source project, such as a spreadsheet web
        application.
      </p>
      <h2> credits</h2>
      <p> 3 </p>
      <h2> Prerequisite </h2>
      <p>
        SAT mathematics score of at least 540, CIS 1030/CSC 1030 or approval
        from the Chairperson
      </p>
      <h2> Distribution </h2>
      <p> Mathematics/Computer studies </p>
      <h2> Offered </h2>
      <p> Fall </p>
      <Link to="../home">Go Back</Link>
      <Link to="../home/csc2350"> or Next Course</Link>
    </>
  );
}
