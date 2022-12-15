import { HashLink } from "react-router-hash-link";
export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <HashLink to="/">Home</HashLink>
        </li>
        <li>
          <HashLink to="/academiccalendar">Fall 2022</HashLink>
        </li>
        <li>
          <HashLink to="/spring2022">Spring 2023</HashLink>
        </li>
      </ul>
    </nav>
  );
}
