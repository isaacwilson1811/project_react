import { Route, Switch, useLocation } from 'react-router-dom';
import { NavHeader, UserHeader } from './components';
import { Blog, About, Login } from './views';
import { Secret } from './views/protected/secret';
import { AuthRoute } from './globalContext/authRoute';

export default function App() {
  const location = useLocation();
  
  return (
    <>
      <div style={{backgroundColor:'black',display:'flex',justifyContent:'space-between'}}>
      <NavHeader location={location} />
      <UserHeader location={location} />
      </div>

      <section className='view'>
        <Switch>
        
          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <AuthRoute path="/secret">
            <Secret />
          </AuthRoute>

          <Route path="/*">
            <Blog />
          </Route>

        </Switch>
      </section>

    </>
  );
}