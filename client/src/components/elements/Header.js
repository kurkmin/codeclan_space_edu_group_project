import React, { useState } from 'react';

import NavBar from './NavBar';
import styled from 'styled-components';
import UserDetail from './UserDetails';


const HeaderBox = styled.header`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const UserBox = styled.div`
  padding: 0 3rem;
`;

const BrandBox = styled.div`
  padding: 0 3rem;
`;

const NavBox = styled.div`
  padding: 0 3rem;
`;


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
    <HeaderBox>
      <BrandBox>
        <h1>SpaceClan Discover</h1>
      </BrandBox>

      <NavBox>
        <NavBar />
      </NavBox>

      <UserBox>
        <select onChange={handleSelect}>
          {userOptions}
        </select>
        <UserDetail user={selectedUser} />
      </UserBox>
    </HeaderBox>
  )
}

export default Header;