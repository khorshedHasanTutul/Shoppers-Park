import React from 'react'
import { callBack, Checkout } from '../../Service/AppService'

const SavingAddressTab = ({activeButtonAddress}) => {
    return (
        Checkout.SavingAddressTabData.map((item,index)=>(
            <button className="brick fill primary t-16 " onClick={callBack(activeButtonAddress,index)}>{item.text}</button>
        ))
        
    )
}
export default SavingAddressTab;