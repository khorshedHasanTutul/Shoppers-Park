import { Checkout } from "../../Service/AppService";
import Card from "../utilities/Card/Card";

const AddressList = ({addressSaved,addressButtonIndex,phone,email,name,district,division,area}) => {
  const data=Checkout.SavingAddressTabData;
  return (
    <div>
      <h3 className="t-uppercase t-14 mb-8">Saved Addresses</h3>
      {
        data.map((item,index)=>(
          (addressSaved)&&
          (index===addressButtonIndex)?
          <Card className="mb-16 hover-card pointer">
        <h4 className="t-16 t-bold mb-8">{item.text}</h4>
        <p className=" mb-4">{name}({phone})</p>
        <p className="mb-4">{email}</p>
        <p>{district },{division }, {area}</p>
      </Card>:
      <Card className="mb-16 hover-card pointer">
          <p>No Address saved in {item.text} slot</p>
      </Card>
      
        ))
      }
      {
      }
    </div>
  );
};

export default AddressList;
