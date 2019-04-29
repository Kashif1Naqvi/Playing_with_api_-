import React from "react";
import AddressList from "./AddressList";

const Addresses = ({ address }) => {
  const addressList = address.map(address => (
    <AddressList address={address} key={address.id} />
  ));
  return <div>{addressList}</div>;
};

export default Addresses;
