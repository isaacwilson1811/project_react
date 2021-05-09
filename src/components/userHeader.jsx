import { useSessionStore } from '../store';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export function UserHeader() {
  const [currentUser, loggedIn, logOut] = 
  useSessionStore(state => [state.currentUser, state.loggedIn, state.logOut]);
  
  return (
    <header>
      <Menu style={{display:'flex',justifyContent:'flex-end'}} inverted color='teal'>

        {
          loggedIn ? (
            <Menu.Item active={true}>
              {currentUser.name}
            </Menu.Item>
          ) : (null)
        }
        
        <Menu.Item>
          <Link onClick={logOut} to="/login">{loggedIn ? 'Log Out' : 'Log In'}</Link>
        </Menu.Item>

      </Menu>
    </header>
  );
}