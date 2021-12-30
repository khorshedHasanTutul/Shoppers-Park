import React from 'react'
import { Link } from 'react-router-dom';

export const SubsSubCategoryitem = ({subCategoryItem,categoryId,subCategoryId,toggleClass}) => {
    return (
        <ul class="mega-menu3">

        <li><Link class="hover-special-view" to={'/subcategory/'+categoryId+'/'+subCategoryId}><span onClick={toggleClass}>View all {subCategoryItem.subCategoryName}</span></Link></li>
        {
            subCategoryItem.subCategoryItem.map((item)=>(
                <>
                {
                    
                    (window.innerWidth>991)?
                    <li><Link to={'/categoryitem/'+categoryId+'/'+subCategoryId+'/'+item.subCategory_item}>{item.itemName}</Link></li>:
                    <li><Link to={'/categoryitem/'+categoryId+'/'+subCategoryId+'/'+item.subCategory_item}><span onClick={toggleClass}>{item.itemName}</span></Link></li>
                   
                }
                 </>
        
                    
                

            ))
        }
        
       
    </ul>
    )
}
export default SubsSubCategoryitem;
