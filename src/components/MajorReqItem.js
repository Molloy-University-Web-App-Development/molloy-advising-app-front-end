export default function MajorReqItem({
  MajorName,
  Dept,
  StudyCode,
  Description,
  ReqCourse,
  ReqCourse2,
  ReqCourse3,
  ReqCourse4,
  CourseWarning,
  CourseWarning2,
  ReqCourse5,
  ReqCourse6,
  ReqCourse7,
  TotCredHrs,

  children
}) {
  return (
    <section>
      <h1>{MajorName}</h1>
      <h4>Sponsoring Department</h4>
      <p>{Dept}</p>
      <p>Molloy Program of Study Code: {StudyCode}</p>
      <p>{Description}</p>
      <h3>Requirements</h3>
      <h3>Required Courses</h3>

      <ul>
        <li>{ReqCourse}</li>
        <li>{ReqCourse2}</li>
        <li>{ReqCourse3}</li>
        <li>{ReqCourse4}</li>
      </ul>

      <p>{CourseWarning}</p>

      <p>{CourseWarning2}</p>
      <ul>
        <li>{ReqCourse5}</li>
        <li>{ReqCourse6}</li>
        <li>{ReqCourse7}</li>
      </ul>

      <p>Total Credit Hours: {TotCredHrs}</p>
    </section>
  );
}
