import React from 'react';
import { Link } from 'react-router-dom';
import { Offers } from '../../Service/AppService';


const OffersImageArea = () => {
    const data=Offers.OffersBanner;

    return (
        <section class="beautifull-offer-area section-padding">
        <div class="container">
            {/* <!-- offer heading --> */}
            <div class="butifull-heading-title">
                <h4>{data.header}</h4>
            </div>
            {/* <!-- butifull single item --> */}
            <div class="butiful-offer-item-flex">
                {/* <!-- single item --> */}
                {
                    data.offersImage.map(item=>(
                        <div class="single-item-inner-left">
                        <Link to={item.url}>
                            <img src={item.image} alt="img" />
                        </Link>
                    </div>
                    ))
                }
               

            </div>
            {/* <!-- butifull single item --> */}
        </div>
    </section>
    );
};

export default OffersImageArea;