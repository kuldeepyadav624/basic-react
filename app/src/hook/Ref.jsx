import React from 'react'
import { useState, useEffect, useRef } from 'react'

function Ref() {
    const [kuldeep, setKuldeep] = useState("");
    // const [yadav, setYadav ] = useState ();
    const count = useRef(0);

    useEffect(()=>{
        // setYadav ( yadav + 1);
        count.current = count.current + 5;
    });

  return (
    <div>
<input type="text" value={kuldeep} onChange ={(e)=>setKuldeep(e.target.value)}/>
{/* <p>{yadav}</p> */}
<p>{count.current}</p>
    </div>
  )
}

export default Ref