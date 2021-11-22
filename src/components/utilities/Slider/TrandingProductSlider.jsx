import { SplideSlide,Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import React from 'react'
import TrandingProductItem from '../../Products/HomeProducts/TrandingProducts/TrandingProductItem';

const TrandingProductSlider = ({data,options}) => {
    return (
        <Splide options={options}>
        {
            data.map((item,index)=>(
                <SplideSlide key={item.id || index}>
                    <TrandingProductItem item={item} />
                </SplideSlide>
            ))
        }
    </Splide>
    )
}
export default TrandingProductSlider;
