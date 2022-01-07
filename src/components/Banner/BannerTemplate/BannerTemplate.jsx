import React from 'react'
import { Link } from 'react-router-dom';


const BannerTemplate = ({item}) => {
    return (
        <div class="banner-slider-main owl-slider-perk">
                    <div class="banner-slider-main-flex owl-slider-perk-items">
    
                        <div class="single-banner-slider">
                            <Link to={item.to} ><img src={item.image} alt="img" /></Link>
                        </div>

                    </div>
        </div>
    )
}
export default BannerTemplate;
