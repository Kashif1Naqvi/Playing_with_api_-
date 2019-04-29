import React from "react";

const ContactList = ({ contact }) => (
  <div>
    <p className="form-control">ContactId:{contact.id}</p>
    <p className="form-control">type:{contact.type}</p>
    <p className="form-control">Number:{contact.number}</p>
  </div>
);

export default ContactList;
