import { Route, Switch, useLocation } from 'react-router-dom';
import { NavHeader, UserHeader } from './components';
import { Blog, About, Login, Drawing } from './views';
import { Protect, Profile} from './views/protected';
import { Delete } from './views/delete';

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

          <Route path="/login">
            <Login />
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

          <Protect path="/profile">
            <Profile />
          </Protect>

          <Route path='/delete'>
            <Delete />
          </Route>

          <Route path="/*">
            <Blog />
          </Route>

        </Switch>
      </section>

    </>
  );
}