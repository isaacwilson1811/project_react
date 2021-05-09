import { useContext, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { AuthContext } from '../globalContext';
import { Form, Button } from 'semantic-ui-react';

export function Login(props) {
const [redirect, setRedirect] = useState(false);
const [loginForm, setLoginForm] = useState({});
const { isAuthed, updateUser, user, login, logout } = useContext(AuthContext);
const { state } = useLocation();

if (redirect) {
return <Redirect to={state?.from || "/"} />;
}
if (isAuthed) {
return (
        <button onClick={() => logout(() => setRedirect(false))}>Log out</button>
    );
}

const handleChange = (e) => {
    const { target: { value, name } } = e;
    setLoginForm({
        ...loginForm,
        [name]: value
    });
}

return (
    <Form style={{
        width: 400,
        margin: '32px auto'
    }} onSubmit={() => login(loginForm, () => setRedirect(true))}>
        <Form.Field>
            <label>Email Address</label>
            <input name='email' placeholder='email' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
            <label>Password</label>
            <input name='password' type='password' placeholder='password' onChange={handleChange} />
        </Form.Field>
        <Button type='submit'>Submit</Button>
    </Form>
);
}