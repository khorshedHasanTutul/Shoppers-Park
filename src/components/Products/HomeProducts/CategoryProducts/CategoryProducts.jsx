import React from 'react'
import appData from '../../../DataSource/appData';
import CategoryWiseProduct from './CategoryWiseProduct';


const CategoryProducts = ({wishItemsGet}) => {
    const categoryData=appData.ShopCategory;



    return (
        <section class="catagory-product-area">
            {
                categoryData.map(item=>(
                    <div class="container">
                        <CategoryWiseProduct item={item} wishItemsGet={wishItemsGet}/>
                    </div>
                ))
            }
        
    </section>
    )
}
export default CategoryProducts;
