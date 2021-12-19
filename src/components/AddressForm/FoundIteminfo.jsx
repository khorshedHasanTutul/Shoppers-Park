import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../utilities/Card/Card';

const FoundIteminfo = ({savedAddressInfo,getAddressData,activeButtonText}) => {
    const data=getAddressData.find(item=>item.Type===savedAddressInfo.text);
    return (
        <>
        {
        (data)?
            <Card className="mb-16 hover-card pointer">
              <span >
              <h4 className="t-16 t-bold mb-8">{savedAddressInfo.text}</h4>
              <p className=" mb-4">{data.Name}-{data.Mobile}-{data.Email}</p>
              <p>{data.Province },{data.District },{data.Upazila}</p>
              <p>{data.Remarks}</p>
              </span>
        
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