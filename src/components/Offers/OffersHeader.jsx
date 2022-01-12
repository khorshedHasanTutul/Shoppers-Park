import React from 'react';
import { Offers } from '../../Service/AppService';
import SliderComponent from '../utilities/Slider/SliderComponent';
import OffersHeaderSliderItem from './OffersHeaderSliderItem';


const OffersHeader = () => {

    const options={
        rewind: true,
        type: 'loop',
        autoplay: true,
        rewindSpeed: 1500,
        speed: 1000,
        perPage: 1,
        width:'100%',
        breakpoints: {
            375: {
                perPage: 1,
            },
            575: {
                perPage: 1,
            },
            991: {
                perPage: 1,
            },
            992: {
                perPage: 1,
            },
            1200: {
                perPage: 1,
            }
      }
       
    }

    const data=Offers.OffersHeader.SliderInfo;

    return (
        <section class="top-offer-slider-area section-padding">
        <div class="container">
            <div class="top-offer-slider-heading">
                <h3>{Offers.OffersHeader.text}</h3>
            </div>
            <div class="top-offer-slider owl-slider-perk">
                <div class="top-offer-slider-inner-flex owl-slider-perk-items">
                    {/* <!-- single item --> */}
                    <SliderComponent options={options} data={data} Template={OffersHeaderSliderItem} />
                </div>
            </div>
        </div>
    </section>
    );
};

export default OffersHeader;