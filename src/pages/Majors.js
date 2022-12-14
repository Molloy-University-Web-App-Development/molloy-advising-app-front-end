import Campus from "../Images/campus2.jpg";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

export default function Majors() {
  const [majors, setCourses] = useState([]);
  console.log(majors);
  useEffect(() => {
    fetch("Majors.JSON")
      .then((result) => result.json())
      .then((responseData) => setCourses(responseData));
  }, []);
  return (
    <>
      <img class="campus" src={Campus} alt="molloy campus" />
      <h1 class="title">UNDERGRADUATE MAJORS</h1>
      <section class="mainbody">
        <p>
          Get your future started right. Enroll in an undergraduate program at
          Molloy University. Become part of a distinctive, progressive and
          multi-dimensional experience that includes internships, field
          placements, clinical experiences and global studies opportunities.
        </p>
        <p>
          You will study with and learn from our high-qualified and engaging
          professors who come from diverse academic backgrounds. Scholarships ,
          academic and personal growth and intellectual independence are
          stressed and prepare you to play a vital role in your community and in
          the world.
        </p>
        <p>
          Steeped in a 60-year tradition of quality education, Molloy is proud
          of its high academic standards. We offer more than 50 challenging and
          rewarding programs, many of which are nationally accredited. The
          nursing program has earned top ranking in national surveys and is one
          of the largest baccalaureate programs in the country.
        </p>
        <p>
          All of our programs provide a wealth of opportunities for personal
          development and academic enrichment as well as a firm foundation upon
          which to build your career.
        </p>

        <div id="undergrad">
          <div id="available">
            <h3 class="undergradheader">
              Available Undergraduate Majors at Molloy University
            </h3>
            <ul>
              <li>
                <HashLink to="/CompSci">Computer Science</HashLink>
              </li>
              <li>Nursing</li>
            </ul>
          </div>
          <div id="unavailable">
            <h3 class="undergradheader">
              Upcoming Undergraduate Majors at Molloy University
            </h3>
            <ul>
              {majors.map((MajorData) => (
                <li>{MajorData.name}</li>
              ))}
              <li>...and many more.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
