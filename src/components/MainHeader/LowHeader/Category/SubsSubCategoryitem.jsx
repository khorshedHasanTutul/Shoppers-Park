import React from 'react'
import { Link } from 'react-router-dom';

export const SubsSubCategoryitem = ({subCategoryItem,categoryId,subCategoryId}) => {
    return (
        <ul class="mega-menu3">
        <li><a class="hover-special-view" href="#">View all Face Make Up</a></li>
        {
            subCategoryItem.subCategoryItem.map((item)=>(
                <li><Link to={'/categoryitem/'+categoryId+'/'+subCategoryId+'/'+item.subCategory_item}>{item.itemName}</Link></li>
            ))
        }
        
       
    </ul>
    )
}
export default SubsSubCategoryitem;
