import logo from "../assets/mapp.jpg";
import React, { useState, useEffect } from "react";
import courseData from './courses';


export default function MajorSearch() {
  const [count, setCount] = useState(0);
  console.log("I rendered");
  let foo = 0;
  return (
    <div className="major-search">
      <img src={logo} alt="Molloy Logo" />
      <h1>Molloy Advising</h1>
      <select>
        <option>Select a Major</option>
      </select>
      {foo}
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {count}
    </div>
  );
}

export function MajorButton() {
  const [selectedMajor, setSelectedMajor] = useState("computer science");

  return (
    <>
      <label>
        Select a Major:
        <select
          value={selectedMajor}
          onChange={(e) => setSelectedMajor(e.target.value)}
        >
          <option value="nursing">Nursing</option>
          <option value="computer science">Computer Science</option>
          <option value="biology">Biology</option>
        </select>
      </label>
      <hr />
      <p>Your major: {selectedMajor}</p>
    </>
  );
}


export function CourseData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("courses.json");
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, []);

  if (data) {
    return <div>{data.course}</div>;
  } else {
    return null;
  }
}

export function MajorRequirementData() {
  const [data, setRequirementData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("req-courses.json");
      const newData = await response.json();
      setRequirementData(newData);
    };
    fetchData();
  }, []);

  if (data) {
    return <div>{data.requirement}</div>;
  } else {
    return null;
  }
}



function majorRequirementCourses(courseData, majorRequirementsData, major) {
  //const courseData = [{'majorCode': 'CSC', 'name': 'Computer Science 101'},{'majorCode': 'ACC', 'name': 'Accounting 101'}];
  const majorRequirementData = [{'majorCode': 'CSC'},{'majorCode': 'ACC'}];
  let offeredCourses = []
  
  for (let i = 0; i < courseData.length; i++){
    for (let j = 0; j < majorRequirementData.length; j++){
       if (courseData[i].majorCode === majorRequirementData[j].majorCode){
         offeredCourses.push(courseData[i].name)
       }
    }
  }
  return offeredCourses;


}
