import logo from "../assets/mapp.jpg";
import React, { useState } from 'react';

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
      <button onClick={() => setCount(count + 1)}>
    Click me
  </button>
  {count}
    </div>
     
  );
}

function MajorButton (){
  const [selectedMajor, setSelectedMajor] = useState('computer science');

  return (
    <select
    value={selectedMajor}
    onChange={e => setSelectedMajor(e.target.value)}
    >
      <option value="nursing">Nursing</option>
      <option value="computer science">Computer Science</option>
      <option value="biology">Biology</option>
  );
}
