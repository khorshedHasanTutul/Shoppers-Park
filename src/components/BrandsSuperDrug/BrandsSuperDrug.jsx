import React from 'react'
import appData from '../DataSource/appData';
import BrandSuperDrugSlider from '../utilities/Slider/BrandSuperDrugSlider';

const BrandsSuperDrug = () => {
    const options={
        rewind: true,
        type: 'loop',
        autoplay: true,
        rewindSpeed: 1500,
        speed: 1000,
        perPage: 5,
        width:'100%'

    }
    return (
        <section class="all-brands-superdrag-area">
        <div class="container">
            {/* <!-- common heading --> */}
            <div class="hompe-common-title">
                <h2>All Brands</h2>
                <div class="my-header-underline"></div>
            </div>
            {/* <!-- common heading --> */}
            <div class="all-brands-superdrag-main owl-slider-perk">
                <div class="all-brands-superdrag-inner-flex owl-slider-perk-items">
                   
                   <BrandSuperDrugSlider data={appData.BrandSuperDrug} options={options} />

                </div>
            </div>
        </div>
    </section>
    )
}
export default BrandsSuperDrug;
