
import { Checkout } from "../../Service/AppService";
import FoundIteminfo from "./FoundIteminfo";

const AddressList = ({addressSaved,addressButtonIndex,getAddressData,activeButtonText}) => {
  const savedAddressInfo=Checkout.SavingAddressTabData;
  var data;
  console.log(getAddressData)
  if(getAddressData.length===0){
     data=false;
  }
  return (
    <div>
      <h3 className="t-uppercase t-14 mb-8">Saved Addresses</h3>
      {
        savedAddressInfo.map((item,index)=>(
          (addressSaved || !data)?
          <FoundIteminfo savedAddressInfo={item} getAddressData={getAddressData} activeButtonText={activeButtonText}/>
          :''
        ))
      }
    </div>
    // <div></div>

  );
};

export default AddressList;
