import React from 'react'
import { Link } from 'react-router-dom';

export const SubsSubCategoryitem = ({subCategoryItem,categoryId,subCategoryId,toggleClass}) => {
    return (
        <ul class="mega-menu3">

        <li><Link class="hover-special-view" to={'/subcategory/'+categoryId+'/'+subCategoryId}>View all {subCategoryItem.subCategoryName}</Link></li>
        {
            subCategoryItem.subCategoryItem.map((item)=>(
        
                    <li><Link to={'/categoryitem/'+categoryId+'/'+subCategoryId+'/'+item.subCategory_item}>{item.itemName}</Link></li>
                

            ))
        }
        
       
    </ul>
    )
}
export default SubsSubCategoryitem;
