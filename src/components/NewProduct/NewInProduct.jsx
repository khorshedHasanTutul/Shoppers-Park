import React, { useState } from 'react';
import { NewInPage } from '../../Service/AppService';
import appData from '../DataSource/appData';
import PopUpAlert from '../utilities/Alert/PopUpAlert';
import SliderComponent from '../utilities/Slider/SliderComponent';
import ProductSingleItem from './ProductSingleItem';


const NewInProduct = () => {
    const [alert, setalert] = useState(false)
    const closeModal=()=>{
        setalert(prevState=>!prevState)
    }
    const options={
        rewind: true,
        type: 'loop',
        autoplay: true,
        rewindSpeed: 1500,
        speed: 1000,
        perPage:5,
        width:'100%',
        breakpoints: {
            375: {
                perPage: 2,
            },
            575: {
                perPage: 2,
            },
            991: {
                perPage: 3,
            },
            992: {
                perPage: 5,
            },
            1200: {
                perPage: 5,
            }
      }
    }
    const concatData=appData.categoryProducts;
    const date=new Date().getDate();
    const data=concatData.filter(item=>(item.created_at-date<=7)? item : '')
    return (
        <section class="top-new-in-product-area">
                        {
                            (alert)&&<PopUpAlert content={'Already in your cart.'} closeModal={closeModal} />
                        }
            <div class="container">
                <div class="butifull-heading-title">
                    <h4>{NewInPage.ProductAreaHeader}</h4>
                </div>
                <div class="product-catagory-main-flex owl-slider-perk">
                    <div class="product-catagory-inner-flex owl-slider-perk-items">
                        {/* <!-- single item --> */}
                       
                        {
                                (data.length>=5)&& <SliderComponent options={options} data={data} Template={ProductSingleItem} setalert={closeModal} />
                            }
                            {
                                 (data.length<5)&&
                                 (data.map(item=>(
                                     <ProductSingleItem item={item} setalert={closeModal}/>
                                 )))
                            }
                        {/* <!-- next prev --> */}
                    </div>
                </div>
            </div>
        </section> 
    );
};

export default NewInProduct;