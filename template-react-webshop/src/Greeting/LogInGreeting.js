import React from 'react'

function LogInGreeting(props) {

    let greeting = '';
    props.isLoggedin
    ? greeting = 'Welcome!'
    : greeting = 'Please login';

  return (
    <h1>{greeting}</h1>
  )
}

export default LogInGreeting