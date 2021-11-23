import React from 'react';
import { callBack, Checkout } from '../../../Service/AppService';

const DelivaryStatus = ({statusFunction}) => {
    const data=Checkout.DelivaryStatus;
    return (
        <>
        {
            data.map((item,index)=>(
            <p>
            <input type="radio" id={item.id} name="radio-group"  onClick={callBack(statusFunction,index)}/>
            <label for={item.id}>{item.text}</label>
            </p>
            ))
        }
        </>
        
    );
};

export default DelivaryStatus;