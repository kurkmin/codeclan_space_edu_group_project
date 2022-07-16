import React from 'react';

import NavBar from './NavBar';
import UserDetail from './UserDetails';

const Header = () => {
  return (
    <header>
      <h1>TOP LEVEL</h1>
      <NavBar />
      <UserDetail />
    </header>
  )
}

export default Header;