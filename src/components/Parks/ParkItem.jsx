import React from 'react'
import appData from '../DataSource/appData';

const ParkItem = () => {
    return (
        <div class="product-add-main owl-slider-perk">
        <div class="product-add-main-flex owl-slider-perk-items">
            {/* <!-- single product --> */}
            {
                appData.BannerParkItem.map((parkItem)=>(
                    <div class="single-product-add">
                        <strong><span class="pink">{parkItem.colorText}</span> {parkItem.Boldtext} </strong>
                        <p>{parkItem.normalText}</p>
                    </div>
                ))
            }

        </div>
    </div>
    )
}
export default ParkItem;