import { useContext } from 'react';
import { AuthContext } from '../globalContext';
import { Menu, Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export function Header( {location} ) {
  const { isAuthed, user, logout } = useContext(AuthContext);
  
  return (
    <header>
      <Menu inverted>

        <Menu.Item name='blog' active={location.pathname.includes('/blog')}>
          <Link to='/blog'>Blog</Link>
        </Menu.Item>

        <Menu.Item name='about' active={location.pathname.includes('/about')}>
          <Link to='/about'>About</Link>
        </Menu.Item>

        <Menu.Item name='secret' active={location.pathname.includes('/secret')}>
        <Link to='/secret'>Secret</Link>
        </Menu.Item>

        {isAuthed ? (
        <>
        <Menu.Item>
          Welcome {user.email}
        </Menu.Item>

        <Menu.Item name ='logout' onClick={() => logout()}>
        Log Out
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