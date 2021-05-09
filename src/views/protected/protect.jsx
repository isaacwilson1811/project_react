import { useSessionStore } from '../../store';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';

export function Protect({ children, ...rest }) {
    const loggedIn = useSessionStore(state => state.loggedIn);

    const [redirect, setRedirect] = useState(false);



    if (redirect) {
        return (
            <Redirect to={{
                pathname: "/login"
            }} />
        )
    }

    return (
        <Route {...rest} render={({ }) => {
            if (loggedIn) {
                return children;
            }else{
                setRedirect(true);
            }
            
        }} />
    )
}