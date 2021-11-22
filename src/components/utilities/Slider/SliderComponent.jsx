import { SplideSlide,Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import React from 'react';

const SliderComponent = ({data,options,Template}) => {
    return (
        <Splide options={options}>
            {
                data.map((item,index)=>(
                    <SplideSlide key={item.id || index}>
                        <Template item={item} />
                    </SplideSlide>
                ))
            }
        </Splide>
    );
};

export default SliderComponent;