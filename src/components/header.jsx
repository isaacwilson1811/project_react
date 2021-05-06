import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default function Header( {location} ) {
  
  return (
    <header>
      <Menu inverted>
        <Menu.Item name='blog' active={location.pathname.includes('/blog')}>
          <Link to='/blog'>Blog</Link>
        </Menu.Item>
        <Menu.Item name='about' active={location.pathname.includes('/about')}>
          <Link to='/about'>About</Link>
        </Menu.Item>
      </Menu>
    </header>
  );
}