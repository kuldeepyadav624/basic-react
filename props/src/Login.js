import React from 'react'

function Login(props) {
  return (
    <div className='prop'>
      <h1>name={props.name} </h1>
      <h2>email={props.email}</h2>
      <h3>Address={props.other.address}</h3>
      <h4>mobile.no={props.other.mobile}</h4>
    </div>
  )
}

export default Login