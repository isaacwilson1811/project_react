import { useContext } from 'react';
import { AuthContext } from '../globalContext';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export function UserHeader( {location} ) {
  const { isAuthed, user, logout } = useContext(AuthContext);
  
  return (
    <header>
      <Menu style={{display:'flex',justifyContent:'flex-end'}} inverted color='teal' >

        {isAuthed ? (
        <>
        <Menu.Item>
          Welcome {user.email}
        </Menu.Item>

        <Menu.Item name ='logout' onClick={() => logout()}>
        <Link to="/login">Log Out</Link>
        </Menu.Item>
        </>
        ) : (
        <>
        <Menu.Item>
          Anonymous User
        </Menu.Item>

        <Menu.Item name ='login' active={location.pathname.includes('/login')}>
        <Link to="/login">Log In</Link>
        </Menu.Item>
        </>
        )}
      </Menu>
    </header>
  );
}