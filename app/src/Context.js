import React, { useContext } from 'react'
import { FirstName, LastName } from './ContextApi'

function Context() {
    const fname = useContext (FirstName);
    const lname = useContext(LastName);
  return (
    <div>
<h1>my name is {fname} {lname}</h1>
    </div>
  )
}

export default Context
