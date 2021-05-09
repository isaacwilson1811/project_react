import { useSessionStore } from '../store';
import { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

export function LoginTest(){
  const [redirect, setRedirect] = useState(false);
  const [loginForm, setLoginForm] = useState({});
  const { state } = useLocation();
  const [currentUser, loggedIn, logIn] = 
  useSessionStore(state => [state.currentUser, state.loggedIn, state.logIn]);
  
  if (redirect) {
    return <Redirect to={state?.from || "/"} />;
  }

  const handleChange = (e) => {
    const { target: { value, name } } = e;
    setLoginForm({
        ...loginForm,
        [name]: value
    });
  }

  const handleLogIn = () =>{
    logIn(loginForm);
    setRedirect(true);
  }
  
  return (
    <>
    <h1>Welcome, {currentUser === null ? ('nobody') : (currentUser.name)}</h1>
    <p>You are {loggedIn ? ('logged in') : ('not logged in')}</p>
    {loggedIn ? (null) : (
      <>
      <input name='name' placeholder='name' onChange={handleChange} />
      <button onClick={handleLogIn}>Log In</button>
      </>
    )}
    </>
  )
}