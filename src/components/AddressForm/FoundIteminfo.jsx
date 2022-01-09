import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { callBack } from '../../Service/AppService';
import Card from '../utilities/Card/Card';

const FoundIteminfo = ({savedAddressInfo,getAddressData,selectedStatusIndex,setselectedStatusIndex,activeButtonText,selectedShippingInfo,savedAddressIndex}) => {
  const {pathname}=useLocation();

    const data=getAddressData?.find(item=>item.Type===savedAddressInfo.text);
    console.log({savedAddressInfo})

    const selectShippingAddressHandler=(savedAddressIndex,e)=>{
      const element=document.getElementsByClassName('hover-Effect');
      for(let i=0;i<element.length;i++){
        element[i].classList.remove("hover-Effect");
      }
      e.currentTarget.className+=' hover-Effect'
      setselectedStatusIndex(savedAddressIndex)
    }
    console.log({selectedStatusIndex, savedAddressIndex})
    return (
        <>
        {
        (data)?
            <Card className={(savedAddressIndex===0)? "mb-16 hover-card pointer hover-Effect" :"mb-16 hover-card pointer" } onClick={selectShippingAddressHandler.bind(this,savedAddressIndex)}>
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
                  (selectedStatusIndex===savedAddressIndex)&&
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