import React, { useState, createContext } from 'react';
export const AuthContext = createContext({});

class Auth {
    static keyword = 'user';
    static isAuthed = () => {
        return Boolean(localStorage.getItem(Auth.keyword));
    }
    static getUser = () => {
        const userInfo = localStorage.getItem(Auth.keyword);
        if (!userInfo) {
            return {};
        }
        try {
            return JSON.parse(userInfo);
        } catch(e) {
            return {};
        }
    }
    static updateUser = (user) => {
        localStorage.setItem(Auth.keyword, JSON.stringify(user));
    }
    static login = (userInfo, cb) => {
        localStorage.setItem(Auth.keyword, JSON.stringify({ email: userInfo.email }));
        cb && cb();
    }
    static logout = (cb) => {
        localStorage.removeItem(Auth.keyword);
        cb && cb();
    }
}

export function ContextProvider(props) {
    const [isAuthed, setIsAuthed] = useState(Auth.isAuthed());
    const [user, setUser] = useState(Auth.getUser());
    return (
        <AuthContext.Provider value={{
            isAuthed,
            user,
            updateUser: (user) => {
                setUser(user);
                Auth.updateUser(user);
            },
            logout: (cb) => {
                Auth.logout(cb);
                setIsAuthed(Auth.isAuthed());
            },
            login: ({email, password}, cb) => {
                setUser({
                    ...user,
                    email
                })
                Auth.login({email, password}, cb);
                setIsAuthed(Auth.isAuthed());
            }
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}