import React from 'react';
import { Link } from 'react-router-dom';
import appData from '../../../DataSource/appData';

const RelatedSingleItem = ({product_id}) => {
    const concatData=appData.categoryProducts.concat(appData.TrandingProducts);
    const productData=concatData.find(item=>item.Id===product_id);
    console.log(['productData',productData])
    const data=concatData.filter(item=>item.category_id===productData.category_id && item.brand_id===productData.brand_id);
    console.log(['data',data])
    return (
        <>
        {
           
            data.map(item=>(
                  <div class="recent-pro-del-flex">
            <Link to={'/product/'+item.Id}>
                <div class="product-del-s-img">
                    <img src="/contents/assets/images/blog/b1.jpg" alt="img" />
                </div>
                <div class="product-del-s-content">
                    <div class="product-del-s-title">
                        <h4>{item.Nm}</h4>
                    </div>
                    <div class="product-del-s-blog-desc">
                        <div class="basket-add">
                            <span class="item__price item__price--now">৳{item.MRP}</span>
                        </div>
                    </div>
                </div>
             </Link>
        </div>
            ))
         

        }
           </>
      
    );
};

export default RelatedSingleItem;