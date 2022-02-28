import React, { useState } from 'react'
import LogInGreeting from '../Greeting/LogInGreeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


function LogIn() {

    const [isLoggedin, setIsloggedIn] = useState(false);

    const handleLogInClick = () => {
        setIsloggedIn(true)
    }

    const handleLogOutClick = () => {
        setIsloggedIn(false)
    }
    
    let button = '';
    if (isLoggedin) {
      button = <LogoutButton handleLogOutClick={handleLogOutClick} />
    } else {
     button = <LoginButton handleLogInClick={handleLogInClick} />
    }
    
    

  return (
    <div>
      <LogInGreeting isLoggedin={isLoggedin}/>
        {button}
    </div>
  ) 
    


}

export default LogIn