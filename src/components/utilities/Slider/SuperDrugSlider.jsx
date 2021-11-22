import { SplideSlide,Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import React from 'react'
import SuperDrugBlockItem from '../../SuperDrugBlogs/SuperDrugBlockItem';

const SuperDrugSlider = ({data,options}) => {
    return (
        <Splide options={options}>
        {
            data.map((item,index)=>(
                <SplideSlide key={item.id || index}>
                    <SuperDrugBlockItem item={item} />
                </SplideSlide>
            ))
        }
    </Splide>
    )
}
export default SuperDrugSlider;