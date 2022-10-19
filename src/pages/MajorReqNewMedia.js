import MajorReqItem from "../components/MajorReqItem";
import { Link } from "react-router-dom";

export default function MajorReqNewMedia() {
  return (
    <>
      <MajorReqItem
        MajorName="New Media Major"
        Dept="New Media"
        StudyCode="NMD"
        Description="New media refers to all media technologies invented since the television. That means computers, the internet, video games, virtual reality, memes, and so much more! Studying new media means you look at the content, histories, and cultural effects of these different kinds of media. By studying new media we can better understand things like how social media can sway a presidential election, how an app like Uber can completely change the way we work and travel, or how playing video games became something that can make you a millionaire."
        ReqCourse="NMD 244 - Online Content Production | 3 Credits"
        ReqCourse2="NMD 246 - Civic Engagement with New Media | 3 Credits"
        ReqCourse3="NMD 309 – History of Digital Media | 3 Credits"
        ReqCourse4="NUR 2020 | Advancing Nursing II | 5,000,000 Credits"
        CourseWarning=""
        CourseWarning2="Plus 3 other NMD courses (9 credits), 200 level or higher, selected in consultation with advisor."
        ReqCourse5="NMD Level 2"
        ReqCourse6="NMD Level 2"
        ReqCourse7="NMD Level 2"
        TotCredHrs="18"
      ></MajorReqItem>
      <Link to="../">Go Back</Link>
    </>
  );
}
