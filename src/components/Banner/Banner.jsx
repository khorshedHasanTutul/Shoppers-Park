import React from 'react'
import appData from '../DataSource/appData';
import Slider from '../utilities/Slider/Slider';

export const Banner = () => {
    const data=appData.BannerImage;
    const options={
        rewind: true,
        type: 'loop',
        autoplay: true,
        rewindSpeed: 1000,
        speed: 500,
        pauseOnHover:false
    }
    return (
        <section class="banner-slider-index-item">
                {/* <!-- banner slider area --> */}
               <Slider data={data} options={options} />
            </section>
    )
}
export default Banner;