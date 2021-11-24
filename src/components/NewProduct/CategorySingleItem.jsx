import React from 'react';
import { Link } from 'react-router-dom';

const CategorySingleItem = ({item}) => {
    return (
        <div class="tranding-h-single-slide">
        <Link to={'/category/'+item.categoryId}>
            <img src={item.image} alt="img" />
            <span>{item.categoryName}</span>
        </Link>
    </div>
    );
};

export default CategorySingleItem;