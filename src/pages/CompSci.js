import Campus from "../Images/campus2.jpg";
import { HashLink } from "react-router-hash-link";

export default function CompSci() {
  return (
    <>
      <img class="campus" src={Campus} alt="molloy campus" />
      <section class="mainbody">
        <h1 class="main"> MAJOR IN COMPUTER SCIENCE</h1>
        <p>
          {" "}
          Computer studies introduces students to the concepts and applications
          of computers and prepares them to effectively utilize computers in
          their respective fields and subsequent careers.{" "}
        </p>
        <p class="bold"> Goals and objectives of Computer Science (CSC)</p>
        <ul class="main">
          <li>
            {" "}
            To enable the student to explore a problem from different
            perspectives.{" "}
          </li>
          <li>
            {" "}
            To give the student a background in programming that permits him/her
            to move from a language they know to an unfamiliar language.{" "}
          </li>
          <li>
            {" "}
            To provide the student with an understanding of general underlying
            concepts in order to prepare the student to keep pace with a
            rapidly-changing field.{" "}
          </li>
          <li> To prepare the student for a career in the computer field. </li>
        </ul>
        <p>
          {" "}
          <HashLink to="DegreeReq"> Degree Requirements </HashLink>{" "}
        </p>
      </section>
    </>
  );
}
