import { SplideSlide,Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import React from 'react'
import BrandsSuperDrugItem from '../../BrandsSuperDrug/BrandsSuperDrugItem';

const BrandSuperDrugSlider = ({data,options}) => {
    return (
        <Splide options={options}>
        {
            data.map((item,index)=>(
                <SplideSlide key={item.id || index}>
                    <BrandsSuperDrugItem item={item} />
                </SplideSlide>
            ))
        }
    </Splide>
    )
}
export default BrandSuperDrugSlider;