import React from 'react'


const BannerTemplate = ({item}) => {
    return (
        <div class="banner-slider-main owl-slider-perk">
                    <div class="banner-slider-main-flex owl-slider-perk-items">
    
                        <div class="single-banner-slider">
                            <a href><img src={item.image} alt="img" /></a>
                        </div>

                    </div>
        </div>
    )
}
export default BannerTemplate;
