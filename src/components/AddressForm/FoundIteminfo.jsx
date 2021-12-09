import React from 'react'
import Card from '../utilities/Card/Card';

const FoundIteminfo = ({savedAddressInfo,getAddressData,activeButtonText}) => {
    const data=getAddressData.find(item=>item.Type===savedAddressInfo.text);
    console.log(data)
    return (
        <>
        {
        (data)?
            <Card className="mb-16 hover-card pointer">
        <h4 className="t-16 t-bold mb-8">{savedAddressInfo.text}</h4>
        <p className=" mb-4">{data.Name}-{data.Mobile}-{data.Email}</p>
        <p>{data.Province },{data.District },{data.Union}</p>
        <p>{data.Remarks}</p>
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