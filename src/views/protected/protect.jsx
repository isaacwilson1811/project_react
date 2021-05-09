import { useSessionStore } from '../../store';
import { Redirect, Route } from 'react-router-dom';

export function Protect({ children, ...rest }){
  const loggedIn = useSessionStore(state => state.loggedIn);
  return (
    <Route {...rest} render={({ location }) => {
        if (loggedIn) {
            return children;
        }
        return (
            <Redirect to={{
                pathname: "/logintest",
                state: { from: location }
            }} />
        );
    }} />
)
}