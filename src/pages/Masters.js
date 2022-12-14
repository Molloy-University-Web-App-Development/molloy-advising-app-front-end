import Campus from "../Images/campus2.jpg";

export default function Masters() {
  return (
    <>
      <img class="campus" src={Campus} alt="molloy campus" />
      <section class="mainbody">
        <h1 class="main"> GRADUATE DEGREE PROGRAMS</h1>
        <p class="bold">
          {" "}
          When You are Ready to Change or Advance Your Career, Your New Story
          Starts Here at Molloy University{" "}
        </p>
        <p>
          {" "}
          If you are seeking a career that feeds your passion and concern for
          others, or just hoping to take your career to the next level, Molloy's
          graduate and doctoral degree programs are just what you need. With
          flexible schedules that include weekend, online and hybrid classes,
          now is the time to pursue the career you've always wanted. Our
          specially designed graduate and post-graduate certificate programs
          facilitate career changes and accommodate the needs of returning or
          working students. Molloy students benefit from an academically
          challenging, supportive environment and small class sizes guided and
          taught by an accomplished faculty. Courses are designed to expand
          students' knowledge and increase their critical thinking and
          analytical skills. Internships, field experiences and clinical
          placements, which provide students with hands-on experience, are an
          essential part of our graduate programs.{" "}
        </p>
        <h3 class="main">
          {" "}
          Molloy University offers Master’s degree programs and post-Master’s
          certificates in the following areas:{" "}
        </h3>
        <ul class="main">
          <li> Education Program Post-Master's certificates </li>
          <li> Master of Business Administration </li>
          <li> Master of Science in Clinical Mental Health Counseling </li>
          <li> Master of Science in Criminal Justice </li>
          <li> Master of Science in Music Therapy </li>
          <li> Master of Science in Education </li>
          <li>
            {" "}
            Master of Social Work - (In partnership with Fordham University
            Graduate School of Social Service.){" "}
          </li>
          <li> Master of Speech-Language Pathology </li>
          <li> Master of Science in Nursing </li>
          <li> ENursing Program Post-Master's certificates </li>
        </ul>

        <h3 class="main">
          {" "}
          <strong> Doctoral Programs </strong>{" "}
        </h3>
        <ul class="main">
          <li> Doctor of Philosophy (Ph.D.) Nursing program </li>
          <li> Doctor of Nursing Practice (D.N.P.) program </li>
          <li>
            {" "}
            Doctor of Education (Ed.D.) in Educational Leadership for Diverse
            Learning Communities program{" "}
          </li>
        </ul>
        <p> Apply Now! </p>
      </section>
    </>
  );
}
