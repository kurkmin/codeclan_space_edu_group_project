import React from 'react';


const UserDetail = ({ users, currentUser }) => {

  const userObject = users.find( user => user.name === currentUser);
  console.log("USER OBJECT" + currentUser);
  return (
    <>
      <h2>{userObject.name} <small>({userObject.age})</small></h2>
    </>
  )
}

export default UserDetail;