import { HashLink } from "react-router-hash-link";
export default function Header({}) {
  return (
    <nav>
      <ul>
        <li>
          <HashLink class="menu" to="/home/#computercourses">
            {" "}
            Computer Courses
          </HashLink>
        </li>
        <li>
          <HashLink class="menu" to="/home/#mathcourses">
            {" "}
            Math Courses
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}
