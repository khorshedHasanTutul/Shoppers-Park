import React from 'react';
import FestivalCategoryProduct from './FestivalCategoryProduct';
import FestivalHeader from './FestivalHeader';

const FestivalParent = () => {
    return (
        <>
            <FestivalHeader />
            <section class="catagory-product-area">
            <div class="container">
               <FestivalCategoryProduct />
            </div>
           </section>  
        </>
    );
};

export default FestivalParent;