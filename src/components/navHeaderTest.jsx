import { useSessionStore } from '../store';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export function NavHeader( {location} ) {
  const loggedIn = useSessionStore(state => state.loggedIn);
  
  return (
    <header>
      <Menu inverted>

        <Menu.Item name='blog' active={location.pathname.includes('/blog')}>
          <Link to='/blog'>Blog</Link>
        </Menu.Item>

        <Menu.Item name='about' active={location.pathname.includes('/about')}>
          <Link to='/about'>About</Link>
        </Menu.Item>

        <Menu.Item name='drawing' active={location.pathname.includes('/drawing')}>
          <Link to='/drawing'>Drawing Canvas</Link>
        </Menu.Item>

        {loggedIn ? (
        <Menu.Item name='secret' active={location.pathname.includes('/secret')}>
          <Link to='/secret'>Secret</Link>
        </Menu.Item>
        ) : (
        <>
        </>
        )}

      </Menu>
    </header>
  );
}