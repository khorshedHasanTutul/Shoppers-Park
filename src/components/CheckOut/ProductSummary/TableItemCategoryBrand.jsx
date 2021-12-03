import React from 'react'
import { Link } from 'react-router-dom';
import { BrandData } from '../../../Service/AppService';
import appData from '../../DataSource/appData';

const TableItemCategoryBrand = ({item}) => {
    const categoryData=appData.ShopCategory.find(item2=>item2.categoryId===item.category_id);
    const brandData=BrandData.find(item2=>item2.brand_id===item.brand_id);
    return (
        <td class="cart_description">
        <p class="product-name"><Link to={'/product/'+item.Id}>{item.Nm}</Link></p>
        <small class="cart_ref">Category : {categoryData.categoryName}</small>
        <br />
        <small>Brand: {brandData.brand_name} </small>
        </td>
    )
}
export default TableItemCategoryBrand;
