import { Checkout } from "../../Service/AppService";
import FoundIteminfo from "./FoundIteminfo";
import { useLocation } from "react-router-dom";

const AddressList = ({addressSaved,addressButtonIndex,getAddressData,activeButtonText,selectedShippingInfo}) => {
  
  const savedAddressInfo=Checkout.SavingAddressTabData;
  const {pathname}=useLocation()
  var data;
  if(getAddressData?.length===0){
     data=false;
  }
  return (
    <div>
      <h3 className="t-uppercase t-14 mb-8">Saved Addresses</h3>
      {
        (getAddressData.length>0 && pathname==="/checkout")&&
        <>
        <h4 className="shippingAddress t-uppercase t-14 mb-8">Select Your Shipping Address</h4>
        {/* <span><i class="fas fa-arrow-alt-circle-down"></i></span> */}
        </>

      }
      {
        savedAddressInfo.map((item,index)=>(
          (addressSaved || !data)?
          <FoundIteminfo savedAddressInfo={item} getAddressData={getAddressData} activeButtonText={activeButtonText} selectedShippingInfo={selectedShippingInfo} savedAddressIndex={index}/>
          :''
        ))
      }
    </div>
    // <div></div>

  );
};

export default AddressList;
