import React, { useState } from 'react';
import { useParams } from 'react-router';
import PopUpAlert from '../../utilities/Alert/PopUpAlert';
import LowerDetails from './LowerPartDetails/LowerDetails';
import ProductDetailsHeader from './ProductDetailsHeader';
import ProductDetailsItem from './ProductDetailsItem';
import RelatedProductes from './RelatedProducts/RelatedProductes';

const ProductDetailsParent = () => {
    const [alert, setalert] = useState(false)
    const closeModal=()=>{
        setalert(prevState=>!prevState)
    }
    const {id}=useParams();
    return (
        <>
            <ProductDetailsHeader />
            {
                (alert)&&<PopUpAlert content={'Already in your cart.'} closeModal={closeModal} />
            }
            <>
            <section class="product-details-area">
                <div class="container">
                    <div class="product-details-main">
                        <div class="product-details-inner-flex">
                            {/* <!-- product-details-left --> */}
                            <div class="product-details-left">
                                 {/* <!-- product item details --> */}
                                <ProductDetailsItem product_id={id} setalert={closeModal}/>
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