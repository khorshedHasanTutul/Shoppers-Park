import React from 'react';
import { useParams } from 'react-router';
import LowerDetails from './LowerPartDetails/LowerDetails';
import ProductDetailsHeader from './ProductDetailsHeader';
import ProductDetailsItem from './ProductDetailsItem';
import RelatedProductes from './RelatedProducts/RelatedProductes';

const ProductDetailsParent = () => {
    const {id}=useParams();
    return (
        <>
            <ProductDetailsHeader />
            <>
            <section class="product-details-area">
                <div class="container">
                    <div class="product-details-main">
                        <div class="product-details-inner-flex">
                            {/* <!-- product-details-left --> */}
                            <div class="product-details-left">
                                 {/* <!-- product item details --> */}
                                <ProductDetailsItem product_id={id}/>
                                {/* <!-- product item details --> */}
                                {/* <!-- product desc review information --> */}
                                <LowerDetails />
                                {/* <!-- product desc review information --> */}
                            </div>
                            {/* <!-- product-details-right --> */}
                            <div class="product-details-right">
                                {/* <!-- RELATED PRODUCTS --> */}
                               <RelatedProductes product_id={id}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            </>
        </>
    );
};

export default ProductDetailsParent;