import CalendarItem from "../components/CalendarItem";
import { useState, useEffect } from "react";
import logo from ".././assets/molloylogo.png";

export default function AcademicCalendar() {
  const [calendarData, setCalendarData] = useState([]);
  useEffect(() => {
    fetch("calendar.json")
      .then((result) => result.json())
      .then((responseData) => setCalendarData(responseData));
  }, []);
  return (
    <>
      <h1>Fall 2022</h1>
      <aside class="lightbox" id="note">
        <figure>
          <a href="#" class="close"></a>
          <figcaption>
            <h2>Note:</h2>
            <ul>
              <li>
                Classes for Fall Long Session run the full term beginning in the
                first week and ending in the last week of Fall term.
              </li>
              <li>
                Subterms: Two <q>Seven Week sessions</q> and four{" "}
                <q>Three Week sessions</q> are available.
              </li>
              <li>
                Calendar dates and deadlines are listed under Fall Subterms at
                the end of this section.
              </li>
            </ul>
          </figcaption>
        </figure>
      </aside>
      <a href="#note">Open note</a>

      <CalendarItem
        date="08-01"
        day="Monday"
        description="Payment of tuition due for advance registered students."
      />
      <CalendarItem
        date="09-02"
        day="Friday"
        description="College offices closed."
      />
      <CalendarItem
        date="09-05"
        day="Monday"
        description="Labor Day - College offices closed. Move-in Day for dorms is announced
        in the Events Calendar. Students also notified."
      />
      <CalendarItem
        date="09-07"
        day="Wednesday"
        description="Classes begin for Fall."
      />
      <CalendarItem
        date="09-13"
        day="Tuesday"
        description="Last date to Add/Drop a course. Online Registration Open—Office of the
        Registrar. Full payment of tuition and fees required. (Students with
        classes scheduled to meet once-a-week for the first time on September 13
        will have until September 14 to correct their schedule.)"
      />
      <CalendarItem
        date="09-14"
        day="Wednesday"
        description='Withdrawal Period Begins: A grade of "WA" will be assigned from
        September 14 until October 25 or the midpoint of subterms. From October
        26 to December 13 a "WA" or "WF" grade may be assigned. (
          "WA" grades are not computed in GPA. "WF" grades are computed
        as failure in GPA.) Faculty enter withdrawal grades online for their
        courses with Last Date of Attendance, if requested or if a student stops
        attending a class.'
      />
      <CalendarItem
        date="09-14"
        day="Wednesday"
        description="Registration for auditors, Prime (age 62 and over) and alumni auditors
        through the Office of the Registrar. MILL members make arrangements
        through the Director of Special Programs."
      />
      <h3>September 15 - Thursday</h3>
      <p>
        Incompletes for Spring 2022 and Summer Sessions 2022 become <q>F.</q>
      </p>
      <h3>September 27—Tuesday</h3>
      <p>Last day to declare a course Pass/Fail.</p>
      <h3>October 1—Saturday</h3>
      <p>
        Deadline for filing Application for Graduation Reviews for December 2022
        or January 2023 degree award date.
      </p>
      <h3>October 1—Saturday</h3>
      <p>
        Deadline for submitting online Health and Accident Insurance waivers for
        all full-time undergraduate students.
      </p>
      <h3>TBD—Thursday, MASS</h3>
      <p>
        Mass, Madison Theatre — 10:30 am–11:30 am. Class meeting times will be
        shortened to allow all students to attend:
      </p>
      <p>
        <strong>Usual Time | New Time</strong>
      </p>
      <p>7:30 am–8:55 am | 7:30 am–8:35 am</p>
      <p>9:05 am–10:30 am | 8:45 am–9:50 am</p>
      <p>
        <strong>10:00 am - 11:30 am | Convocation Time</strong>
      </p>
      <p>10:40 am–12:05 pm | 11:40 am–12:45 pm</p>
      <p>12:15 pm–1:40 pm | 12:55 pm–2:00 pm</p>
      <p>1:50 pm–3:15 pm | 2:10 pm–3:15 pm</p>
      <h3>October 10 - Monday</h3>
      <p>Columbus Day—College closed.</p>
      <h3>October 24—Monday - November 18—Friday</h3>
      <p>
        Early registration and advisement begins for continuing matriculated
        students for Winter Intersession 2023 and Spring 2023. Newly accepted
        Graduate and new Doctoral students may be registered by their Schools.
        Registration times are by assigned times for Web Groups. Details will be
        posted in the Lion's Den Portal.
      </p>
      <h3>October 26—Wednesday</h3>
      <p>
        Withdrawal Period Continues: A grade of <q>WA</q> will be assigned from
        September 14 until October 25 or the midpoint of subterms. From October
        26 to December 13 a <q>WA</q> or <q>WF</q> grade may be assigned. (
        <q>WA</q> grades are not computed in GPA. <q>WF</q> grades are computed
        as failure in GPA.) Faculty enter withdrawal grades online for their
        courses with Last Date of Attendance, if requested or if a student stops
        attending a class. Last day to withdraw from a course with a <q>WA</q>{" "}
        or <q>WF.</q> Faculty should enter withdrawal grades directly for their
        courses. Withdrawal grades due by December 13.
      </p>
      <h3>October 26-Wednesday</h3>
      <p>Mid-semester appraisals due.</p>
      <h3>November 8-Tuesday</h3>
      <p>Election Day—Offices open. Classes in session.</p>
      <h3>November 11-Friday</h3>
      <p>
        Veterans’ Day. No classes. Offices closed. See Events Calendar for
        special Veteran's Week events. Tuesday November 15 is a make-up day for
        Friday classes.
      </p>
      <h3>November 15-Tuesday</h3>
      <p>
        Friday classes held this day. This is a makeup day for Veteran's Day.
      </p>
      <h3>November 21—Monday</h3>
      <p>
        Registration for Spring is on-going for continuing students in-person
        and online with advisor approval. Non-degree or non-matriculated
        undergraduates may register. New students entering in the Spring must
        have confirmed with Admissions and will be given appointments for
        advisement and registration. All <q>reserved</q> courses for
        Intersession or Spring must be approved by the advisor by December 1.
      </p>
      <h3>November 23 - November 27—Wednesday - Sunday</h3>
      <p>Thanksgiving Recess—College closed.</p>
      <h3>November 28—Monday</h3>
      <p>
        All Intersession <q>reserved</q> courses not approved by the advisor are
        subject to being dropped after this date. Online registrations allowed
        until the Add/Drop period ends at the beginning of Intersession on
        January 3. Dropped students may register for open seats if available.
      </p>
      <h3>November 28—Monday</h3>
      <p>
        Intersession course tuition and fees are due. After this date, full
        payment is due within one business day after registration.
      </p>
      <h3>December 1—Thursday</h3>
      <p>
        Deadline for filing Application for Graduation Reviews for May 2023
        candidates. Late applications still accepted for December 2022 and
        January 2023.
      </p>
      <h3>December 13—Tuesday</h3>
      <p>
        Withdrawal Period Ends: A grade of <q>WA</q> will be assigned from
        September 14 until October 25 or the midpoint of subterms. From October
        26 to December 13 a <q>WA</q> or <q>WF</q> grade may be assigned. (
        <q>WA</q> grades are not computed in GPA. <q>WF</q> grades are computed
        as failure in GPA.) Faculty enter withdrawal grades online for their
        courses with Last Date of Attendance, if requested or if a student stops
        attending a class.
      </p>
      <h3>December 14 - 20—Wednesday - Tuesday</h3>
      <p>
        Final examination or last class meetings. Refer to schedule as posted in
        Lion's Den portal.
      </p>
      <h3>December 20—Tuesday</h3>
      <p>
        Recorded award date of December 2022 degrees and certificates. No
        ceremony. Deadline for any outstanding incomplete or missing work for
        students graduating with December degree award date is December 20.
      </p>
      <h3>December 21—Wednesday</h3>
      <p>Nursing Pinning Ceremony.</p>
      <h3>December 22 —Thursday (12:00 noon)</h3>
      <p>
        Grades due to Office of the Registrar 48 hours after last class or final
        examination. <strong>All grades must be received by noon.</strong>
      </p>
      <h3>December 22—Thursday</h3>
      <p>College offices open.</p>
      <h3>December 23 - January 2—Friday - Monday</h3>
      <p>College closed.</p>
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
