import Campus from "../Images/campus2.jpg";
import { useState, useEffect } from "react";

export default function DegreeReq() {
  const [genEds, setCourses] = useState([]);
  console.log(genEds);
  useEffect(() => {
    fetch("../genEds.JSON")
      .then((result) => result.json())
      .then((responseData) => setCourses(responseData));
  }, []);

  const [majReq, setCourses1] = useState([]);
  console.log(majReq);
  useEffect(() => {
    fetch("../majorReqs.JSON")
      .then((result1) => result1.json())
      .then((responseData1) => setCourses1(responseData1));
  }, []);
  return (
    <>
      <img class="campus" src={Campus} alt="molloy campus" />
      <section class="mainbody">
        <h1 class="title">DEGREE REQUIREMENTS</h1>
        <h4>Computer Science - B.A. Courses</h4>
        <p>
          General Education Requirements: courses listed under General Education
          Requirements
        </p>
        <p>(41 credits needed)</p>
        <ul>
          {genEds.map((genEds) => (
            <li>{genEds.name}</li>
          ))}
        </ul>
        <div></div>
        <h4>Major Requirements (minimum of 37 credits)</h4>
        <ul>
          {majReq.map((majReq) => (
            <li>{majReq.name}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
