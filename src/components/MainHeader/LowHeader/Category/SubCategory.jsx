import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { callBack } from '../../../../Service/AppService';
import SubsSubCategoryitem from './SubsSubCategoryitem';

const SubCategory = ({categoryItem,toggleClass}) => {
    // const [count, setcount] = useState(0)
    // const increment=()=>{
    //     setcount(count+1)
    // }
    // useEffect(() => {
    //     if(window.innerWidth<=991){
    //         var element=document.getElementsByClassName("mega-menu3");
    //     if(count%2!==0){
    //         for(let i=0;i<element.length;i++)
    //         element[i].classList.remove("dropDown-hidden")
    //     }
    //     if(count%2===0){
    //         for(let i=0;i<element.length;i++)
    //         element[i].className+=" dropDown-hidden"
    //     }
    //     increment();
    //     }
        
    // }, [])

    // const clickedArrowHandler=(index)=>{
    //     increment();
    //     var element=document.getElementsByClassName("mega-menu3");
    //     if(count%2!==0){
    //         element[index].classList.remove("dropDown-hidden")
    //     }
    //     if(count%2===0){
    //         element[index].className+=" dropDown-hidden"
    //     }
    // }
    

    return (
        <ul>
            {
                categoryItem.subCategory.map((subCategoryItem,index)=>(
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