import React from 'react'
import { Link } from 'react-router-dom';
import SubsSubCategoryitem from './SubsSubCategoryitem';

const SubCategory = ({categoryItem,toggleClass}) => {

    return (
        <ul>
            {
                categoryItem.subCategory.map((subCategoryItem)=>(
            <li>
                {
                    (window.innerWidth>991)?
                    <Link to={'/subcategory/'+categoryItem.categoryId+'/'+subCategoryItem.subCategory_id}>{subCategoryItem.subCategoryName}<i class="fa fa-angle-right sub-menu-arrow-mobile" aria-hidden="true"></i></Link>:
                    <Link to={'/subcategory/'+categoryItem.categoryId+'/'+subCategoryItem.subCategory_id}><span onClick={toggleClass}>{subCategoryItem.subCategoryName}</span><i class="fa fa-angle-right sub-menu-arrow-mobile" aria-hidden="true"></i></Link>
                }
                
                <SubsSubCategoryitem categoryId={categoryItem.categoryId} subCategoryId={subCategoryItem.subCategory_id} subCategoryItem={subCategoryItem} toggleClass={toggleClass}/>
            </li>
                    
                ))
            }
            
        </ul>
    )
}
export default SubCategory;