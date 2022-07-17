import React, { useState } from 'react';

import NavBar from './NavBar';
import UserDetail from './UserDetails';

const Header = ({ users }) => {

  const userOptions = users.map((user) => (
    < option key={user._id} > {user.name} </option >
  ));

  const [selectedUser, setSelectedUser] = useState("");
  const handleSelect = (event) => {
    setSelectedUser(event.target.value)
    console.log(selectedUser)
  }

  return (
    <header>
      <h1>TOP LEVEL</h1>
      <NavBar />

      {/* users dropdown menu  */}
      <select onChange={handleSelect}>
        {userOptions}
      </select>
      <UserDetail user={selectedUser} />
    </header>
  )
}

export default Header;