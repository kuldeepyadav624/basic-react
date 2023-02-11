import React from 'react'
import Reduce from './Reduce';
import { useReducer } from 'react';

const initalvalue = (0);

function Reducer() {

    const[count,dispatch] = useReducer(Reducer , initalvalue)

// use reducer hook
  return (

    <div>
<button onClick={()=>dispatch ({type :"INC"})}> + </button>

<h1>{count}</h1>
<button onClick={()=>dispatch ({type :"DEC"})}> - </button>
    </div>
  )
}

export default Reducer;