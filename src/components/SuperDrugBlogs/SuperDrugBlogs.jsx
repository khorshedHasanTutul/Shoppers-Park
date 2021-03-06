import React from 'react'
import { BlogData } from '../../Service/AppService';
import SliderComponent from '../utilities/Slider/SliderComponent';
import SuperDrugBlockItem from './SuperDrugBlockItem';

const SuperDrugBlogs = () => {
    const options={
        rewind: true,
        type: 'loop',
        autoplay: true,
        rewindSpeed: 1500,
        speed: 1000,
        perPage: 3,
        width:'100%',
        breakpoints: {
            375: {
                perPage: 1,
            },
            575: {
                perPage: 1,
            },
            767: {
                perPage: 2,
            },
            991: {
                perPage: 3,
            },
      }

    }
    const data=BlogData;
    return (
        <section class="shop-your-way-to-superdrag-area">
        <div class="container">
            {/* <!-- common heading --> */}
            <div class="hompe-common-title">
                <h2>{data.HeaderAreaText}</h2>
                <div class="my-header-underline"></div>
            </div>
            {/* <!-- common heading --> */}
            <div class="shop-way-superdrag-main owl-slider-perk">
                <div class="shop-way-superdrag-inner-flex owl-slider-perk-items">
                    {/* <!-- single item --> */}
                    <SliderComponent options={options} data={data.BlogArea} Template={SuperDrugBlockItem}/>
                </div>
            </div>
        </div>
    </section>
    )
}
export default SuperDrugBlogs;
