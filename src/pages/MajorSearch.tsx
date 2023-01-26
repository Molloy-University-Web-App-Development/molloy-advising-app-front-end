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
