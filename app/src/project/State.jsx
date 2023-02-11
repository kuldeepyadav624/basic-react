import React from 'react'
import { useState } from 'react'

const State=() => {
    const [name , setName] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const [number , setNumber] = useState();

  return (
    <div>
        <fieldset>
        <legend>signup</legend>

        <label htmlFor=" "> Name*</label>
        <input type="name" placeholder='Name' value={name} onChange = {(e) => setName(e.target.value) }/><br />{name} <br />

        <label htmlFor=" "> Email*</label>
        <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br />{email} <br /> 

        <label htmlFor=" "> password*</label>
        <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br />  {password} <br />

        <label htmlFor=" "> Number*</label>
        <input type="number" placeholder='Enter Number'value={number}  onChange={(e)=>setNumber(e.target.value)} /><br />{number} <br /> 

        <button>signup</button>
        
        </fieldset>
    </div>
  )
}

export default State