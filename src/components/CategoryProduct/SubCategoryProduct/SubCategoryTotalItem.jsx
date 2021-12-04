import React from 'react';
import appData from '../../DataSource/appData';
import SubCategoryItem from './SubCategoryItem';
import SubCategorySubItemList from './SubCategorySubItemList';

const SubCategoryTotalItem = ({categoryId,subCategoryId}) => {
    const catId=parseInt(categoryId)
    const subcatId=parseInt(subCategoryId)
    const categoryData=appData.ShopCategory.find(item=>item.categoryId===catId);
    const subcategoryData=categoryData.subCategory.find(item=>item.subCategory_id===subcatId);
    return (
        <>
        {
           
           subcategoryData.subCategoryItem.map(item=>(
                <SubCategorySubItemList item={item}  categoryId={catId} subCategoryId={subcatId}/>
            ))
        }
        </>
    );
};

export default SubCategoryTotalItem;