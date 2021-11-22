import React from 'react';
import { useParams } from 'react-router';
import CategoryProductHeader from './CategoryProductHeader';
import TotalCategoryItem from './TotalCategoryItem';

const CategoryProduct = () => {
    const {id}=useParams();
    return (
        <>
        <CategoryProductHeader categoryId={id}/>
        <TotalCategoryItem categoryId={id}/>
        
        </>
    );
};

export default CategoryProduct;