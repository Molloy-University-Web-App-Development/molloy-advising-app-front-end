import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <HashLink to="/">Home</HashLink>
        </li>
        <li>
          <HashLink to="/Majors">Undergraduate Majors</HashLink>
        </li>
        <li>
          <HashLink to="/Masters">Graduate Degree Programs</HashLink>
        </li>
        <li>
          <HashLink to="/Doctorates">Doctoral Programs</HashLink>
        </li>
        <li>
          <HashLink to="MolloyLife">Molloy Life</HashLink>
        </li>
      </ul>
    </nav>
  );
}
