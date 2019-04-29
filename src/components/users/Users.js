import React from "react";
import User from "./User";

const Users = ({ users }) => {
  const userMapped = users.map(user => <User user={user} key={user.id} />);
  return (
    <div class="container">
      <h1>Welcome to play with Objects in React</h1>
      <fieldset>
        <legend>{userMapped}</legend>
      </fieldset>
    </div>
  );
};

export default Users;
