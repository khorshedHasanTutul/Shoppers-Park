import React from 'react';
import { callBack, productdetailsAllData } from '../../../../Service/AppService';

const ProductDetailsTabs = ({itemOPen,tabsData}) => {
    return (
        <ul class="tabs">
            {
                productdetailsAllData.Tabinfo.map((item,index)=>(
                    <>
                    <li class="tab" onClick={callBack(itemOPen,index)}><label for={'tab'+(index+4)}>{item.text}</label></li>
                    </>
                ))
            }
        </ul>
    );
};

export default ProductDetailsTabs;