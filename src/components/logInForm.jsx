import { useSessionStore } from '../store';
import { useUserStore } from '../store';
import { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';

export function LoginForm(){

  const { state } = useLocation();
  const [redirect, setRedirect] = useState(false);
  const [loginForm, setLoginForm] = useState({});
  const [currentUser, loggedIn, logIn] = useSessionStore(state => [state.currentUser, state.loggedIn, state.logIn]);
  const checkUserExists = useUserStore(state => state.checkUserExists);
  
  if(redirect) {return <Redirect to={state?.from || "/"} />}

  const handleInputChange = (e) => {
    const { target: { value, name } } = e;
    setLoginForm({...loginForm, [name]: value});
  }

  const handleLogIn = () =>{
    let foundUser = checkUserExists(loginForm.email.toString());
    if(foundUser == null){return}
    else{
      logIn(foundUser);
      // setRedirect(true);
    }
    
  }

  return(
    <>
    <div style={{width: 400,margin: '32px auto'}}>
    <p>You are {loggedIn ? ('currently logged in.') : ('not logged in.')}</p>
    <h1>{currentUser === null ? ('Please Log In') : (`Welcome, ${currentUser.firstName} ${currentUser.lastName}`)}</h1>
    
    {loggedIn ? (null) : (
      <>
      
    <Form style={{width: 400,margin: '32px auto'}} onSubmit={()=>{handleLogIn()}}>
      <Form.Field>
          <label>Email Address</label>
          <input name='email' placeholder='email' onChange={handleInputChange} />
      </Form.Field>
      <Form.Field>
          <label>Password</label>
          <input name='password' type='password' placeholder='password' onChange={handleInputChange} />
      </Form.Field>
      <Button type='submit'>Log In</Button>
    </Form>
      </>
    )}


    </div>
    </>
  )
}