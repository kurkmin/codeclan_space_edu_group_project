import React from 'react';

const UserDetail = ({ users }) => {
  const userOptions = users.map((user) => (

    < option > {user.name} </option >
  ));
  return (
    <>
      <h2>User Details</h2>
      <select>
        {userOptions}
      </select>
    </>
  )
}

export default UserDetail;