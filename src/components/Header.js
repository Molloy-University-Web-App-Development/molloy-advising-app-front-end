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
      <ul class="menu">
        <li class="menu">
          <HashLink to="/#tittle">Home</HashLink>
        </li>
        <li class="menu">
          <HashLink to="/#first">Main courses</HashLink>
        </li>
        <li class="menu">
          <HashLink to="/#second">secondary courses</HashLink>
        </li>
        <li class="menu">
          <HashLink to="#credit">credit</HashLink>
        </li>
      </ul>
    </nav>
  );
}
