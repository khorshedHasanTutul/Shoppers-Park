import { SplideSlide,Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import React from 'react'
import BannerTemplate from '../../Banner/BannerTemplate/BannerTemplate';

const Slider = ({data,options}) => {
    
    return (
        <Splide options={options}>
            {
                data.map((item,index)=>(
                    <SplideSlide key={item.id || index}>
                        <BannerTemplate item={item}/>
                    </SplideSlide>
                ))
            }
        </Splide>
    )
}
export default Slider;
