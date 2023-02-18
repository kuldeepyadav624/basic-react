import React from "react";
import { useState } from "react";
function Form() {
    const [name, setName] = useState("");
    const [select, setSelect] = useState("");
    const [term, setTerm] = useState(false);

  const submitData=(e)=> {
    e.preventDefault();
    const data={
        name:name,
        select:select,
        term:term,
    }
    sessionStorage.setItem("userData",JSON.stringify(data));
    console.log(".......data",data);
    
  }
 
  return (
    <div>
      <form onSubmit={submitData}>
        <input type="text" placeholder="enter your name"  value={name} onChange={(e) => setName(e.target.value)}/>
        <br />
        <br  />
        <select onChange={(e) => setSelect(e.target.value)}>
          <option>select </option>
          <option>Haryana </option>
          <option>punjab </option>
          <option>mp </option>
          <option>up </option>
          <option>raj. </option>
          <option>Bihar </option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setTerm(e.target.checked)} />
        <span> Accept term and condition </span> <br />
        <br />
        <button  type="submit">submit</button>
      </form>
    </div>
  );
}

export default Form;
