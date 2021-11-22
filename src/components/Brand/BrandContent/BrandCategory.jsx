import React from 'react'
import appData from '../../DataSource/appData';

const BrandCategory = () => {
    const data=appData.ShopCategory;
    return (
        <select id="sortCat" data-role="none">
           <option value="" data-role="none">All</option> 
            {
                data.map((categoryItem)=>(
                    <option value="" data-role="none">{categoryItem.categoryName}</option>
                ))
               
            }
           
           
        </select>
    )
}
export default BrandCategory;