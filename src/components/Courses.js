import { Link } from "react-router-dom";

export default function Courses({
  name,
  bio,
  summary,
  credits,
  prerequisite,
  distribution,
  offered
}) {
  return (
    <>
      <h1>{name}</h1>
      <p>({bio})</p>
      <p class="summary">{summary}</p>
      <h2 id="credit">Credits</h2>
      {credits}
      <h2>Prerequisite</h2>
      {prerequisite}
      <h2>Distribution</h2>
      {distribution}
      <h2>Offered</h2>
      {offered}
      <br />
      <br />
      <Link to="../">Go Back</Link>
    </>
  );
}
