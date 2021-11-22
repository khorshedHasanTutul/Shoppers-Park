import React from 'react';
import { callBack, productdetailsAllData } from '../../../../Service/AppService';

const ProductDetailsTabs = ({itemOPen}) => {
    return (
        <ul class="tabs">
            {
                productdetailsAllData.Tabinfo.map((item,index)=>(
                    <>
                    <li class="tab" onClick={callBack(itemOPen,index)}><label>{item.text}</label></li>
                    </>
                ))
            }
    </ul>
    );
};

export default ProductDetailsTabs;