import React from 'react';

import styled from 'styled-components';

const UserDetailBox = styled.div`
  background-color: aliceblue;
`;

const UserDetail = ({ users, currentUser }) => {

  const userObject = users.find( user => user.name === currentUser);

  if(!userObject){
    return
  }

  console.log("USER OBJECT" + currentUser);
  return (
    <>
      <h2>{userObject.name} <small>({userObject.age})</small></h2>
    </>
  )
}

export default UserDetail;