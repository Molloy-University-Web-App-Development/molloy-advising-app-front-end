import CalendarItem from "../components/CalendarItem";
import { useState, useEffect } from "react";

export default function Spring2022() {
  const [calendarData, setCalendarData] = useState([]);
  useEffect(() => {
    fetch("calendar.json")
      .then((result) => result.json())
      .then((responseData) => setCalendarData(responseData));
  }, []);
  return (
    <>
      <h1>Spring 2023</h1>
      <aside class="lightbox" id="note">
        <figure>
          <a href="#" class="close"></a>
          <figcaption>
            <h2>Note:</h2>
            <ul>
              <li>
                Classes for Spring Long session run the full term beginning in
                the first week and ending in the last week of Spring term.
              </li>
              <li>
                Subterms: Two <q>Seven Week sessions</q> and four{" "}
                <q>Three Week sessions</q> are available. Calendar dates and
                deadlines are listed under Spring 2023 subterms at the end of
                this section.
              </li>
            </ul>
          </figcaption>
        </figure>
      </aside>
      <a href="#note">Open note</a>

      {calendarData.map((calendarItemData) => (
        <CalendarItem {...calendarItemData} />
      ))}
      <h3>March 6 - April 12—Monday - Wednesday</h3>
      <p>
        Early registration and advisement begins for continuing matriculated
        students for Summer and Fall. Newly accepted Graduate and new Doctoral
        students may be registered by their Schools. Registration times are by
        assigned times for Web Groups. Details will be posted in the Lion's Den
        Portal.
      </p>
      <h3>March 8—Wednesday</h3>
      <p>Mid-semester appraisals due.</p>
      <h3>March 9—Thursday</h3>
      <p>
        Withdrawal Period Continues: A grade of "WA" will be assigned from
        January 24 until March 8 or the midpoint of subterms. From March 9 to
        May, 5 a "WA" or "WF", grade may be assigned. ("WA" grades are not
        computed in GPA. "WF" Grades are computed as failure in "GPA".) Faculty
        enter withdrawal grades online for their courses with Last Date of
        Attendance, if requested or if a student stops attending a class.{" "}
      </p>
      <h3>March 13 - 19—Monday - Sunday</h3>
      <p>Spring Recess—No classes (College offices will remain open.)</p>
      <h3>April 6- 10—Thursday - Monday</h3>
      <p>Easter Recess—College closed.</p>
      <h3>April 12—Wednesday</h3>
      <p>
        Early registration for continuing matriculated students ends.
        Registration will continue as On-going Registration and be open to newly
        accepted undergraduate students. All 'reserved" courses for Summer or
        Fall must be approved by the advisor by April 21. Dropped students may
        register for open seats if available.
      </p>
      <h3>April 13—Thursday</h3>
      <p>
        Registration for Fall is on-going for continuing students in-person and
        online with advisor clearance will be available. Non-degree or
        non-matriculated undergraduates may register. New transfer students
        entering in Fall must have confirmed with Admissions and will be given
        appointments for advisement and registration. New freshmen beginning in
        the Fall will be registered in Learning Communities by Admissions.
      </p>
      <h3>April 13—Thursday</h3>
      <p>
        Summer course tuition and fees are due. After this date, full payment is
        due within one business day for all registrations and all in-person.
        Summer registration is available in-person until the first two days of
        the term. (See summer calendar for specific dates.)
      </p>
      <h3>April 18—Tuesday</h3>
      <p>Founders’ Day—College closed. Honors Convocation—7:30 pm.</p>
      <h3>April 21—Friday</h3>
      <p>
        All Summer 'reserved' courses not approved by the advisor will be
        dropped after this date. Online registrations allowed until the first
        day of Summer sessions. (See each subterm in Summer calendar.)
      </p>
      <h3>May 1—Monday</h3>
      <p>Last day that classes meet on regular schedule.</p>
      <h3>May 2, 3, 4, 5—Tuesday - Friday</h3>
      <p>Snow Make-Up Days, if necessary, otherwise Study Days.</p>
      <h3>May 5—Friday</h3>
      <p>
        Withdrawal Period Ends: A grade of <q>WA</q> will be assigned from
        January 24 until March 8 or the midpoint of subterms. From March 9 to
        May, 5 a <q>WA</q> or <q>WF</q>, grade may be assigned. (<q>WA</q>{" "}
        grades are not computed in GPA. <q>WF</q> Grades are computed as failure
        in <q>GPA</q>.) Faculty enter withdrawal grades online for their courses
        with Last Date of Attendance, if requested or if a student stops
        attending a class.{" "}
      </p>
      <h3>May 6 - 12—Saturday - Friday</h3>
      <p>
        Final examination or last class meeting. Final examination or last class
        meetings. Refer to schedule as posted in Lion's Den portal.
      </p>
      <h3>May 12—Friday</h3>
      <p>
        May 12, 2023 will be the recorded award date and exit date for May
        degrees and certificates. Deadline for any outstanding incomplete or
        missing work for students graduating with a May degree award date is May
        12, 2023.{" "}
      </p>
      <h3>May 15—Monday (9:00 am)</h3>
      <p>
        All students’ grades due in Office of the Registrar 48 hours after each
        last class or final examination: last date for all submissions.
      </p>
      <h3>
        Pinning, Hooding, Alumni and Commencement Events and Ceremonies —TBA
      </h3>
      <p>
        The Office of Student Affairs will announce these events and ceremonies
        through the Molloy College website. The Event Calendar will also have
        details.
      </p>
      <h3>May 29—Monday</h3>
      <p>Memorial Day—College closed.</p>
      <section>
        <a href="#img2">
          <img
            src="https://www.molloy.edu/Images/News/MU%20vertical.png"
            alt="Molloy Logo"
          />
        </a>
      </section>
    </>
  );
}
