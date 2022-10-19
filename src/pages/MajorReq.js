import MajorReqItem from "../components/MajorReqItem";

// Type all HTML formatting into this file

export default function MajorReq() {
  return (
    <>
      <h1 id="compSciMinor">Welcome to the future.</h1>
      <MajorReqItem
        MajorName="Computer Science Minor"
        Dept="Mathematics and Computer Studies"
        StudyCode="CSCMI"
        Description="This is designed to give students sufficient background 
      and knowledge for further studies in graduate school or for 
      positions involving computer programming."
        ReqCourse="CSC 1030 | Visual Programming | 3 Credits"
        ReqCourse2="CSC 1200 | Functional Programming I | 3 Credits"
        ReqCourse3="CSC 2350 | Object-Oriented Programming & Design | 3 Credits"
        ReqCourse4="CSC 2440 | Data Structures | 4 Credits"
        CourseWarning="Complete 3-4 Credits of CSC 2000/3000-level or CIS 2240 or CIS 3390 (3-4 Credits)"
        CourseWarning2="Complete either (3-4 credits)"
        ReqCourse5="MAT 1180 | Pre-Calculus | 3 Credits"
        ReqCourse6="MAT 2200 | Calculus for Science and Business | 3 Credits"
        ReqCourse7="MAT 2210 | Calculus I | 4 Credits"
        TotCredHrs="22-24"
      ></MajorReqItem>
    </>
  );
}
