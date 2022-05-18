import React, { useState } from "react";

  function Hey() {
  const[set,setdata]=useState(false)

  return (
    <div>
      <h1>Testing Tools in Utube</h1>
      <select>
      {set && <p>Hello can i hide your data</p>}
          <option>Shiva</option>
          <option onClick={()=>setdata(!set)}>Tandav</option>
      </select>
      <button onClick={()=>setdata(!set)}>Tandav</button>
     
    </div>
  );
};

export default Hey;