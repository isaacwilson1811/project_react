import { useContext } from 'react';
import { AuthContext } from '../globalContext';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export function NavHeader( {location} ) {
  const { isAuthed } = useContext(AuthContext);
  
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

        {isAuthed ? (
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