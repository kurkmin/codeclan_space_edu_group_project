import React from 'react';

import NavBar from './NavBar';
import UserDetail from './UserDetails';

const Header = ({ users }) => {
  return (
    <header>
      <h1>TOP LEVEL</h1>
      <NavBar />
      <UserDetail users={users} />
    </header>
  )
}

export default Header;