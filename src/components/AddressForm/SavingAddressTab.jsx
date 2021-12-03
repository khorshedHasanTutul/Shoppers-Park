import React from 'react'
import { callBack, Checkout } from '../../Service/AppService'

const SavingAddressTab = ({activeButtonAddress}) => {
    const count=1;
    return (
        Checkout.SavingAddressTabData.map((item,index)=>(
            <button className={'brick fill primary t-16 '+(index === 0 && count===1 ? "active" : "")} onClick={callBack(activeButtonAddress,index)}>{item.text}</button>
        ))
        
    )
}
export default SavingAddressTab;