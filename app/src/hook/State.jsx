import React from 'react';
import { useState } from 'react';


const State = () => {
  const [count,setCount] = useState(0);

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>+</button>
      <h1>{count}</h1>
      <button onClick={()=> count === 0 ? setCount (0) : setCount(count-1)}>-</button>
    </div>
  )
}

export default State