import React from 'react'
import { Link } from 'react-router-dom';
import SubsSubCategoryitem from './SubsSubCategoryitem';

const SubCategory = ({categoryItem}) => {

    return (
        <ul>
            {
                categoryItem.subCategory.map((subCategoryItem)=>(
            <li>
                <Link to={'/subcategory/'+categoryItem.categoryId+'/'+subCategoryItem.subCategory_id}>{subCategoryItem.subCategoryName}<i class="fa fa-angle-right sub-menu-arrow-mobile" aria-hidden="true"></i></Link>
                <SubsSubCategoryitem categoryId={categoryItem.categoryId} subCategoryId={subCategoryItem.subCategory_id} subCategoryItem={subCategoryItem}/>
            </li>
                    
                ))
            }
            
        </ul>
    )
}
export default SubCategory;