import Card from "../../../utilities/Card/Card";
import AddressForm from '../../../AddressForm/AddressForm';

const AddAddress = ({ onAddressSubmit, address }) => {
  return (
    <Card className="mb-16">
      <AddressForm />
    </Card>
  );
};

export default AddAddress;
