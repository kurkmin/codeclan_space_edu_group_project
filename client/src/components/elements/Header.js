import React, { useState } from 'react';

import NavBar from './NavBar';
import styled from 'styled-components';
import UserDetail from './UserDetails';


const HeaderBox = styled.header`
  width: 100%;
  min-height: 8vw;
  margin-bottom: 2rem;
  display: flex;
  justify-content: right;
  flex: 0 0 100%;
  align-content: center;
  background-color: #333;
  `;

const UserBox = styled.div`
  padding: 0 3rem;
  `;

const BrandBox = styled.div`
  padding: 0 3rem;
  `;

const NavBox = styled.div`
  flex-grow: 2;
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
        <UserDetail currentUser={selectedUser} users={users} />
      </UserBox>
    </HeaderBox>
  )
}

export default Header;