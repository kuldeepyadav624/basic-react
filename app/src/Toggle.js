import { useState } from "react"
import React from 'react'

function Toggle() {
    const [status, setStatus]=useState("true");
  return (
    <div>
{
    status?<h1>hello kuldeep</h1>:null
}
        {/* <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>Show</button> */}
        <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  )
}

export default Toggle

