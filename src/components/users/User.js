import React from "react";
import Addresses from "../Addresses/Addresses";
import ContactNumber from "../Contact/ContactNumber";
import Languages from "../Languages/Languages";

const User = ({ user }) => (
  <div className="text-muted" key={user.id}>
    <li className="form-control">ID:{user.id}</li>
    <hr />
    <p className="form-control">FirstName:{user.firstName}</p>
    <p className="form-control">LastName:{user.lastName}</p>
    {/* <p>Active:{console.log("codeis",(user.active))}</p> */}
    <p className="form-control">Gender:{user.gender}</p>
    <p className="form-control">Joining Date:{user.joiningdate}</p>
    <p className="form-control">loggedInAt :{user.loggedInAt}</p>
    <p className="form-control">occupation :{user.occupation}</p>
    <fieldset>
      <legend>Addresses</legend>
      <Addresses address={user.addresses} />
    </fieldset>
    <fieldset>
      <legend>Contact Information</legend>
      <ContactNumber contacts={user.contactNumbers} />
    </fieldset>
    <fieldset>
      <legend>Contact Information</legend>
      <Languages languages={user.languages} />
    </fieldset>
  </div>
);

export default User;
