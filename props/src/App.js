import React from 'react';
import './App.css';
import Header from './Header';
import Login from './Login'

function App() {
  return (
   <div className='props'>
    <Header/>
    <h1>props in react</h1>
    <Login name={"kuldeep"} email = {"ykuldeep624@gmail.com"}other ={{address:'delhi',mobile:'000'}}/>
    <Login name={"yadav"} email = {"yadav624@gmail.com"}other ={{address:'jaipur',mobile:'111'}}/>
    <Login name={"sk"} email = {"sk624@gmail.com"}other ={{address:'haryana',mobile:'222'}}/>
    <Login name={"pk"} email = {"pk624@gmail.com"}other ={{address:'gurugram',mobile:'333'}}/>
    

   </div>
  );
}

export default App;
