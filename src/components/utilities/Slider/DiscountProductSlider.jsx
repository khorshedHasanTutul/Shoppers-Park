import { SplideSlide,Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import React from 'react'
import DiscountProductItem from '../../DiscountProductShop/DiscountProductItem';

const DiscountProductSlider = ({data,options}) => {
    return (
        <Splide options={options}>
        {
            data.map((item,index)=>(
                <SplideSlide key={item.id || index}>
                    <DiscountProductItem item={item} />
                </SplideSlide>
            ))
        }
    </Splide>
    )
}
export default DiscountProductSlider;