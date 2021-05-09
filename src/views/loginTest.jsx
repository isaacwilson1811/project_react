import { useSessionStore } from '../store';
import { useState } from 'react';

export function LoginTest(){
  const [loginForm, setLoginForm] = useState({});
  const [currentUser, loggedIn, logIn, logOut] = 
  useSessionStore(state => [state.currentUser, state.loggedIn, state.logIn, state.logOut]);

  const handleChange = (e) => {
    const { target: { value, name } } = e;
    setLoginForm({
        ...loginForm,
        [name]: value
    });
  }
  
  return (
    <>
    <h1>Welcome, {currentUser === null ? ('nobody') : (currentUser.name)}</h1>
    <p>You are {loggedIn ? ('logged in') : ('not logged in')}</p>
    <input name='name' placeholder='name' onChange={handleChange} />
    <button onClick={()=>{logIn(loginForm)}}>Log In</button>
    <span> | </span>
    <button onClick={logOut}>Log Out</button>
    </>
  )
}