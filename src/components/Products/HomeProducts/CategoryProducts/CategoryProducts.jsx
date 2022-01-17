import React, { useState } from 'react'
import appData from '../../../DataSource/appData';
import PopUpAlert from '../../../utilities/Alert/PopUpAlert';
import CategoryWiseProduct from './CategoryWiseProduct';


const CategoryProducts = ({wishItemsGet}) => {
    const categoryData=appData.ShopCategory;
    const [alert, setalert] = useState(false)
    const closeModal=()=>{
        setalert(prevState=>!prevState)
    }
    return (
        <section class="catagory-product-area">
                      {
                           (alert)&&<PopUpAlert content={'Already in your cart.'} closeModal={closeModal} />
                      }
            {
                categoryData.map(item=>(
                    <div class="container">
                        <CategoryWiseProduct item={item} wishItemsGet={wishItemsGet} setalert={closeModal}/>
                    </div>
                ))
            }
        
    </section>
    )
}
export default CategoryProducts;
