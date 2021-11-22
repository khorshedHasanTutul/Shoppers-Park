import AddressCard from "../AddressCard/AddressCard";
import AddAddress from "./AddAddress/AddAddress";
import { useState } from "react";

const Address = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState({});

  const onAddAddressHandler = ({ title, address }) => {
    setAddresses((prevState) => [
      ...prevState,
      { title, address, time: new Date() },
    ]);

    // Consume API Now
  };

  const bindAddressForm = (pickedAddress) => {
    setSelectedAddress(pickedAddress);
  };

  const removeAddress = (address) => {
    const i = addresses.findIndex(a => a.title === address.title);
    addresses.splice(i, 1);
    setAddresses([...addresses]);
  };

  const setPrimaryAddress = (address) => {};

  return (
    <div className='mt-8'>
      <AddAddress
        onAddressSubmit={onAddAddressHandler}
        address={selectedAddress}
      />

    </div>
  );
};

export default Address;
