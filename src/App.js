import { Route, Switch, useLocation } from 'react-router-dom';
// import { NavHeader, UserHeader } from './components';
import { NavHeader } from './components/navHeaderTest';
import { UserHeader } from './components/userHeaderTest';

import { Blog, About, Login, Drawing } from './views';
import { LoginTest } from './views/loginTest';
import { Secret } from './views/protected/secret';
import { Protect } from './views/protected/protect';
// import { useSessionStore } from './store';
import { AuthRoute } from './globalContext/authRoute';

export default function App() {
  const location = useLocation();
  // const loggedIn = useSessionStore(state => state.loggedIn);
  
  return (
    <>
      <div style={{backgroundColor:'black',display:'flex',justifyContent:'space-between'}}>
      <NavHeader location={location} />
      <UserHeader location={location} />
      </div>

      <section className='view'>
        <Switch>

          <Route path="/logintest">
            <LoginTest />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/drawing">
            <Drawing />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Protect path="/secret">
            <Secret />
          </Protect>

          <Route path="/*">
            <Blog />
          </Route>

        </Switch>
      </section>

    </>
  );
}