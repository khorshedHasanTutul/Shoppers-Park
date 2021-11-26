import React from 'react'
import SubCategory from './SubCategory';
import appData from '../../../DataSource/appData';
import { Link } from 'react-router-dom';

const CategoryItem = () => {
    
    
    return (
        <>
        <li class="sd-nav__item sd-nav__item--level-2">
            <Link title="New In" to="/newinShop">New In <i class="fa fa-angle-right sub-menu-arrow-right" aria-hidden="true"></i></Link>
        </li>

        {
            appData.ShopCategory.map((categoryItem)=>(
                <li class="sd-nav__item sd-nav__item--level-2">
            <Link title="Make Up" to={'/category/'+categoryItem.categoryId}>{categoryItem.categoryName}<i class="fa fa-angle-right sub-menu-arrow-right" aria-hidden="true"></i></Link>
            <ul class="loaded mega-menu mega-menu2">
                <li class="sd-nav__section-wrapper">
                    <Link to={'/category/'+categoryItem.categoryId}>View all{categoryItem.categoryName}</Link>
                    <SubCategory  categoryItem={categoryItem}/>
                </li>
            </ul>
        </li>
            ))
        }
        
        </>
    )
}
export default CategoryItem;
