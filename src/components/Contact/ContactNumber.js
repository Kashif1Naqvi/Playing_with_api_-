import React from "react";
import ContactList from "./ContactList";

const ContactNumber = ({ contacts }) => {
  const contactsMapped = contacts.map(contact => (
    <ContactList contact={contact} key={contact.id} />
  ));
  return <div>{contactsMapped}</div>;
};

export default ContactNumber;
