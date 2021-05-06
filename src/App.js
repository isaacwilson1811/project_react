import { Route, Switch, useLocation } from 'react-router-dom';
import { Header } from './components';
import { Blog, About } from './views';

export default function App() {
  const location = useLocation();
  
  return (
    <>
      <Header location={location} />

      <section>
        <Switch>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/about">
            <About />
          </Route>

        </Switch>
      </section>

    </>
  );
}