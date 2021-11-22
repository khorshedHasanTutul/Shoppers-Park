import React from 'react';
import { Offers } from '../../Service/AppService';

const OffersHeader = () => {

    return (
        <section class="top-offer-slider-area section-padding">
        <div class="container">
            <div class="top-offer-slider-heading">
                <h3>{Offers.OffersHeader.text}</h3>
            </div>
            <div class="top-offer-slider owl-slider-perk">
                <div class="top-offer-slider-inner-flex owl-slider-perk-items">
                    {/* <!-- single item --> */}
                    <div class="top-offer-sliter-item">
                        <a href="#">
                            <img src={Offers.OffersHeader.image} alt="img" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default OffersHeader;