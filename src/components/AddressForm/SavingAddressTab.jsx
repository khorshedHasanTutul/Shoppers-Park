import React, { useEffect, useState } from 'react'
import { callBack, Checkout } from '../../Service/AppService'

const SavingAddressTab = ({activeButtonAddress,getAddressData}) => {
    const [indexCheck, setindexCheck] = useState(0)

    const count=1;
    useEffect(() => {
        if(getAddressData.length>0){
            if(getAddressData.find(item=>item.Type==='Home')){
                setindexCheck(0)
            }
            else if(getAddressData.find(item=>item.Type==='Office')){
                setindexCheck(1)
            }
            else if(getAddressData.find(item=>item.Type==='Home Town')){
                setindexCheck(2)
            }
        }
    }, [getAddressData])
    return (
        Checkout.SavingAddressTabData.map((item,index)=>(
            <button className={'brick fill primary t-16 '+(index === indexCheck && count===1 ? "active" : "")} onClick={callBack(activeButtonAddress,index,item)}>{item.text}</button>
        ))
        
    )
}
export default SavingAddressTab;