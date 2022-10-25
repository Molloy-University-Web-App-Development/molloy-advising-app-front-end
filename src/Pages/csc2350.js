import { Link } from "react-router-dom";
import Header from "../Components/Header";
export default function csc2350() {
  return (
    <>
      <Header></Header>
      <h1>CSC 2350 Object-Oriented Programming and Design</h1>
      <p>
        A project-based class where students will learn the principles of object
        oriented programming and sound design through the c reation of a
        graphical web application game from scratch. The project tasks will
        provide students with practical experience decomposing large problems
        into smaller ones and using interfaces, abstract base classes,
        inheritance, polymorphism, documentation generation tools, and testing
        frameworks. They will also give students an understanding of the
        importance of the use of abstraction, encapsulation, clear
        documentation, thorough unit testing, and the separation of concerns.
        After the class, students will have created a framework that will make
        it easier to design other games.
      </p>
      <h2> credits</h2>
      <p> 3 </p>
      <h2> Prerequisite </h2>
      <p>CSC 1030 or CSC 1200</p>
      <h2> Distribution </h2>
      <p> Mathematics/Computer studies </p>
      <h2> Offered </h2>
      <p> Fall </p>
      <Link to="../home">Go Back</Link>
      <Link to="../home/csc2440"> or Next course</Link>
    </>
  );
}
