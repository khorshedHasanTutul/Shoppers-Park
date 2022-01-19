import React from 'react'
import { useLocation } from 'react-router-dom';
import { callBack } from '../../Service/AppService';
import Card from '../utilities/Card/Card';

const FoundIteminfo = ({setactiveButtonText,setaddressButtonIndex,addressButtonIndex,savedAddressInfo,getAddressData,selectedStatusIndex,setselectedStatusIndex,activeButtonText,selectedShippingInfo,savedAddressIndex}) => {
  // const getLengthofData=getAddressData.length;
  const {pathname}=useLocation()
  console.log({selectedStatusIndex})
    const data=getAddressData?.find(item=>item.Type===savedAddressInfo.text);
    console.log({savedAddressInfo})

    const selectShippingAddressHandler=(savedAddressIndex,addressButtonIndex,e)=>{
      var element2 = document.querySelectorAll(".address-btn-group");
      for (let i = 0; i < element2[0].childNodes.length - 1; i++) {
        element2[0].childNodes[i].classList.remove("active");
      }
       element2[0].children[savedAddressIndex].className+=' active'
      const element=document.getElementsByClassName('hover-Effect');
      for(let i=0;i<element.length;i++){
        element[i].classList.remove("hover-Effect");
      }
      e.currentTarget.className+=' hover-Effect'
      setselectedStatusIndex(savedAddressIndex)
      setaddressButtonIndex(savedAddressIndex)
      if(savedAddressIndex===0){
        setactiveButtonText('Home');
      }
      else if(savedAddressIndex===1){
        setactiveButtonText('Office');
      }
      else if(savedAddressIndex===2){
        setactiveButtonText('Home Town');
      }
    }
    console.log({addressButtonIndex, savedAddressIndex})
    return (
        <>
        {
        (data)?
            <Card className={(savedAddressIndex===addressButtonIndex)? "mb-16 hover-card pointer hover-Effect" :"mb-16 hover-card pointer" } onClick={selectShippingAddressHandler.bind(this,savedAddressIndex,addressButtonIndex)}>
              {
                (pathname==="/profile/address")?
                <div className="span hover-card pointer">
              <h4 className="t-16 t-bold mb-8">{savedAddressInfo.text} Address</h4>
              <p className=" mb-4">{data.Name}-{data.Mobile}-{data.Email}</p>
              <p>{data.Province },{data.District },{data.Upazila}</p>
              <p>{data.Remarks}</p>
              </div>:
              
              <div className="span hover-card pointer" onClick={callBack(selectedShippingInfo,data,savedAddressInfo)}>
                {
                  (savedAddressIndex===addressButtonIndex)&&
                  <p className='selected address'><i class="fa fa-check" aria-hidden="true"></i>
                    Selected
                  </p>
                }
              
              <h4 className="t-16 t-bold mb-8">{savedAddressInfo.text} Address</h4>
              <p className=" mb-4">{data.Name}-{data.Mobile}-{data.Email}</p>
              <p>{data.Province },{data.District },{data.Upazila}</p>
              <p>{data.Remarks}</p>
              </div>
              }
      </Card>

        :
        <Card className="mb-16 hover-card pointer">
          <p>No Address saved in {savedAddressInfo.text} slot</p>
      </Card>
}
      </>
        
    )
}
export default FoundIteminfo;