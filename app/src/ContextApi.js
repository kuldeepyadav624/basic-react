import React, {createContext} from 'react'
import Context from './Context';
const FirstName = createContext();
const LastName = createContext();

function ContextApi() {
  return (
    <div>
        <FirstName.Provider value={"kuldeep"}> 
        <LastName.Provider value={"yadav"}>
           <Context/>
           </LastName.Provider>
           </FirstName.Provider>
    </div>
  )
}

export default ContextApi
export {FirstName, LastName}