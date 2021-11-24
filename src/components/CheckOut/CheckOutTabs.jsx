import React, { useEffect } from 'react';
import { callBack, Checkout } from '../../Service/AppService';

const CheckOutTabs = ({tabInformation}) => {
    const data=Checkout.TabData;
    return (
        <ul class="tabs">
            {
    
                data.map((item,index)=>(
                    <li class="tab"><label for="tab7" onClick={callBack(tabInformation,index)} >{item.tabText}</label></li> 
                ))
            }
        </ul>
    );
};

export default CheckOutTabs;