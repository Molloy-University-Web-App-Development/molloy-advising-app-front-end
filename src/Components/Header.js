import { HashLink } from "react-router-hash-link";
export default function Header({}) {
  return (
    <nav class="menu">
      <ul>
        <li>
          <HashLink to="/home#computercourses"> Computer Courses</HashLink>
        </li>
        <li>
          <HashLink to="/home/#mathcourses"> Math Courses</HashLink>
        </li>
      </ul>
    </nav>
  );
}
