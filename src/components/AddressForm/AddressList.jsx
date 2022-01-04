
import { Checkout } from "../../Service/AppService";
import FoundIteminfo from "./FoundIteminfo";

const AddressList = ({addressSaved,addressButtonIndex,getAddressData,activeButtonText,selectedShippingInfo}) => {
  
  const savedAddressInfo=Checkout.SavingAddressTabData;
  var data;
  if(getAddressData?.length===0){
     data=false;
  }
  return (
    <div>
      <h3 className="t-uppercase t-14 mb-8">Saved Addresses</h3>
      {
        (getAddressData.length>0)&&
        <h4 className="shippingAddress t-uppercase t-14 mb-8">Select One for chosen Shipping Address</h4>
      }
      {
        savedAddressInfo.map((item,index)=>(
          (addressSaved || !data)?
          <FoundIteminfo savedAddressInfo={item} getAddressData={getAddressData} activeButtonText={activeButtonText} selectedShippingInfo={selectedShippingInfo}/>
          :''
        ))
      }
    </div>
    // <div></div>

  );
};

export default AddressList;
