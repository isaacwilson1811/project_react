import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from './authContext';

export function AuthRoute({ children, ...rest }) {
    const { isAuthed } = useContext(AuthContext);
    return (
        <Route {...rest} render={({ location }) => {
            if (isAuthed) {
                return children;
            }
            return (
                <Redirect to={{
                    pathname: "/login",
                    state: { from: location }
                }} />
            );
        }} />
    )
}