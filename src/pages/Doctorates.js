import Campus from "../Images/campus2.jpg";

export default function Doctorates() {
  return (
    <>
      <img class="campus" src={Campus} alt="molloy campus" />
      <section class="mainbody">
        <h1 class="title">DOCTORAL PROGRAMS</h1>
        <p>
          A doctoral degree is the highest level of academic achievement
          awarded. Molloy University is proud to announce the establishment of
          the Educational Leadership for Diverse Learning Communities (Ed.D.)
          degree. It joins our two other successful doctoral programs, the
          Doctor of Nursing Practice (D.N.P.) and the Doctor of Philosophy Ph.D.
          in Nursing.
        </p>
        <ul>
          <li>
            Doctor of Education (Ed.D.) in Educational Leadership for Diverse
            Learning Communities
          </li>
          <li>Doctor of Nursing Practice (D.N.P.)</li>
          <li>Doctor of Philosophy (Ph.D.) in Nursing</li>
        </ul>
      </section>
    </>
  );
}
