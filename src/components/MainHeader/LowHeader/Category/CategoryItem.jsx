import React, { useEffect, useState } from 'react'
import SubCategory from './SubCategory';
import appData from '../../../DataSource/appData';
import { Link } from 'react-router-dom';
import { callBack } from '../../../../Service/AppService';

const CategoryItem = ({toggleClass}) => {
    const [count, setcount] = useState(0)
    const increment=()=>{
        setcount(count+1)
    }
    useEffect(() => {
        if(window.innerWidth<=991){
            var element=document.getElementsByClassName("loaded");
        if(count%2!==0){
            for(let i=0;i<element.length;i++)
            element[i].classList.remove("dropDown-hidden")
        }
        if(count%2===0){
            for(let i=0;i<element.length;i++)
            element[i].className+=" dropDown-hidden"
        }
        increment();
        }
        
    }, [])

    const clickedArrowHandler=(index)=>{
        increment();
        var element=document.getElementsByClassName("loaded");
        if(count%2!==0){
            element[index].classList.remove("dropDown-hidden")
        }
        if(count%2===0){
            element[index].className+=" dropDown-hidden"
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
                        <Link title={categoryItem.categoryName} to={'/category/'+categoryItem.categoryId}>{categoryItem.categoryName}<i class="fa fa-angle-right sub-menu-arrow-right" aria-hidden="true" onClick={callBack(clickedArrowHandler,index) }></i></Link>
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
