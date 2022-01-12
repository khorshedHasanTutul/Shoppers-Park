import React, { useEffect, useState } from 'react'
import SubCategory from './SubCategory';
import appData from '../../../DataSource/appData';
import { Link } from 'react-router-dom';
import { callBack } from '../../../../Service/AppService';

const CategoryItem = ({toggleClass,indexofCategory}) => {
    
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
        <>
        <li class="sd-nav__item sd-nav__item--level-2" onClick={toggleClass}>
            <Link title="New In" to="/newinShop">New In</Link>
        </li>

        {
            appData.ShopCategory.map((categoryItem,index)=>(
                <>
                <li class="sd-nav__item sd-nav__item--level-2">
            {
                (window.innerWidth>991)?
                    <>
                        <Link title={categoryItem.categoryName} to={'/category/'+categoryItem.categoryId}>{categoryItem.categoryName}<i class="fa fa-angle-right sub-menu-arrow-right" aria-hidden="true"></i></Link>
                        <ul class="loaded mega-menu mega-menu2">
                                <li class="sd-nav__section-wrapper">
                                    <Link to={'/category/'+categoryItem.categoryId}>View all{categoryItem.categoryName}</Link>
                                    <SubCategory  categoryItem={categoryItem}/>
                                </li>
                        </ul>
                    </>:
                    <>
                        <Link title={categoryItem.categoryName} to={'/category/'+categoryItem.categoryId}>{categoryItem.categoryName}<i class="fa fa-angle-right sub-menu-arrow-right" aria-hidden="true" onClick={clickedArrowHandler}></i></Link>
                            <ul class="loaded mega-menu mega-menu2">
                                <li class="sd-nav__section-wrapper">
                                    <Link to={'/category/'+categoryItem.categoryId}><span onClick={toggleClass}>View all{categoryItem.categoryName}</span></Link>
                                    <SubCategory  categoryItem={categoryItem}  toggleClass={toggleClass} indexnum={index}/>
                                </li>
                            </ul>
                    </>
            }
                </li>
                </>
            ))
        }
        
        </>
    )
}
export default CategoryItem;
