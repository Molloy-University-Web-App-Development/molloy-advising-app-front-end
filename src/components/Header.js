import { HashLink } from "react-router-hash-link";
export default function Header({
  name,
  dept,
  position,
  startDate,
  endDate,
  children
}) {
  return (
    <nav class="menu">
      <ul>
        <li>
          <HashLink to="#tittle">Home</HashLink>
        </li>
        <li>
          <HashLink to="#first">Main courses</HashLink>
        </li>
        <li>
          <HashLink to="#second">secondary courses</HashLink>
        </li>
      </ul>
    </nav>
  );
}
