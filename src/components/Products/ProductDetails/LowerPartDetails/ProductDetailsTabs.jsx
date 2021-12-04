import React from 'react';
import { callBack, productdetailsAllData } from '../../../../Service/AppService';

const ProductDetailsTabs = ({itemOPen,tabsData}) => {
    const count=1;
    return (
        <ul class="tabs">
            {
                productdetailsAllData.Tabinfo.map((item,index)=>(
                    <>
                    <li class="tab" ><label onClick={callBack(itemOPen,index,item)} class={(index === 0 && count===1 ? "product-details-activeTab" : "")} >{item.text}</label></li>
                    </>
                ))
            }
        </ul>
    );
};

export default ProductDetailsTabs;