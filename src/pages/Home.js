import Campus from "../Images/campus2.jpg";
import { Link } from "react-router-dom";
import Chad from "../Images/chad.jpg";
import amongus from "../Images/amongus.gif";

export default function Home() {
  return (
    <>
      <img class="campus" src={Campus} alt="molloy campus" />
      <section class="mainbody">
        <h1 class="title">ACADEMICS AT MOLLOY UNIVERSITY</h1>
        <h3 id="greeting">
          Welcome to the best decision of your <em id="life">life</em>.
        </h3>
        <p>
          Molloy College is everything you want in an institution of higher
          learning . . . and more. Our talented professors and experiential
          learning opportunities such as internships and global studies will
          prepare you for a successful and rewarding career. As a Molloy
          student, you will be challenged beyond the traditional classroom
          through experiences designed to enhance intellectual, ethical,
          spiritual and social development.
        </p>

        <p>
          Choose between a vast selection of{" "}
          <Link to="Majors">undergraduate majors</Link> and{" "}
          <Link to="Masters">graduate degree programs</Link>, ranging from world
          class studies in nursing to world changing fields such as{" "}
          <Link to="CompSci">computer science</Link>.
        </p>
      </section>
      <div class="mainpagebox">
        <div>
          <img src={Chad} alt="chadtest" />
          <h3>Undergraduate Education</h3>
          <p>
            <Link to="Majors">Undergraduate Majors</Link>
          </p>
        </div>
        <div>
          <img src={amongus} alt="chadtest" />
          <h3>Graduate Education</h3>
          <Link to="Masters"> Graduate Education </Link>
        </div>
        <div>
          <img src={Chad} alt="chadtest" />
          <h3>Campus Life</h3>
          <Link to="MolloyLife"> Campus Life </Link>
        </div>
      </div>
      <figure class="figure1">
        <img src="../images/lion.png" alt="molloy logo red" />
        <figcaption>
          Molloy University is accredited by the Middle States Commission on
          Higher Education
        </figcaption>
      </figure>
    </>
  );
}
