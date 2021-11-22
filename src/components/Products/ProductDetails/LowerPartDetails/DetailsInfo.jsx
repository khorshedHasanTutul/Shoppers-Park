import React from 'react';
import { productdetailsAllData } from '../../../../Service/AppService';

const DetailsInfo = ({product_id}) => {
    const data=productdetailsAllData.productDetails.find(item=>item.id==product_id);
    return (
        <div class="tab-content detalis-page-tab-content">
        {/* <!-- product desc review information --> */}
        <div class="product-d-tab-content">
            <h4>Product Specification</h4>
            {
                (data)&& <p>{data.info}</p>
            }
           
        </div>
        {/* <!-- product desc review information --> */}
    </div>
    );
};

export default DetailsInfo;