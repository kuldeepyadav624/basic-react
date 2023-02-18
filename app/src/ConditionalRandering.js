import React, { useState } from 'react'

function ConditionalRandering() {
    const [randering,setRandering]=useState(1)
    // const randering=3
  return (
    //1,2,3
    <div>
        {
        randering==1?<h1>Welcome Kuldeep1</h1>:randering==2?<h1>Welcome Kuldeep2</h1>:<h1>Welcome Kuldeep3</h1>
    }
    </div>
  )
}

export default ConditionalRandering