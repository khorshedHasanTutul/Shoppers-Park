import { SplideSlide,Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import React from 'react'
import CategorySingleItem from '../../Products/HomeProducts/CategoryProducts/CategorySingleItem';

const CategorySlider = ({data,options}) => {
    return (
        <Splide options={options}>
        {
            data.map((item,index)=>(
                <SplideSlide key={item.id || index}>
                    <CategorySingleItem item={item}/>
                </SplideSlide>
            ))
        }
    </Splide>
    )
}
export default CategorySlider;
