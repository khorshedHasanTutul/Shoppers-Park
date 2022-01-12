import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { callBack } from '../../../../Service/AppService';
import SubsSubCategoryitem from './SubsSubCategoryitem';

const SubCategory = ({categoryItem,toggleClass}) => {
    const [count, setcount] = useState(0)
    const increment=()=>{
        setcount(count+1)
    }
    const decrement=()=>{
        setcount(count-1)
    }
    
    const clickedArrowHandler=({target})=>{
        const element=target.parentElement.nextSibling;
        if(count%2===0){
            element.classList+=' loaded-menu-display'
            increment();
        }
       
        else{
            element.classList.remove('loaded-menu-display')
            decrement();
        }

    }
    

    return (
        <ul>
            {
                categoryItem.subCategory.map((subCategoryItem,index)=>(
            <li>
                {
                    (window.innerWidth>991)?
                    <Link to={'/subcategory/'+categoryItem.categoryId+'/'+subCategoryItem.subCategory_id}>{subCategoryItem.subCategoryName}<i class="fa fa-angle-right sub-menu-arrow-mobile" aria-hidden="true"></i></Link>:
                    <Link to={'/subcategory/'+categoryItem.categoryId+'/'+subCategoryItem.subCategory_id}><span onClick={toggleClass}>{subCategoryItem.subCategoryName}</span><i class="fa fa-angle-right sub-menu-arrow-mobile" aria-hidden="true" onClick={clickedArrowHandler}></i></Link>
                }
                
                <SubsSubCategoryitem categoryId={categoryItem.categoryId} subCategoryId={subCategoryItem.subCategory_id} subCategoryItem={subCategoryItem} toggleClass={toggleClass}/>
            </li>
                    
                ))
            }
            
        </ul>
    )
}
export default SubCategory;