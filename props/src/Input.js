import React, { useState } from 'react'

function Input() {
    const [data,setData]= useState(null);
    const[print,setPrint]=useState(false);
    function getdata(val){
     console.log(val.target.value);
     setData(val.target.value)
     setPrint(false)
    }
  return (
    <div>
        {
            print?
            <h1>{data}</h1>
            :null
}
        <input type="text" onChange={getdata}/>
        <button onClick={()=>setPrint(true)}>print data</button>
    </div>
  )
}

export default Input