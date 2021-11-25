import React from 'react';
import { Link } from 'react-router-dom';

const OffersHeaderSliderItem = ({item}) => {
    return (
        <div class="top-offer-sliter-item">
            <Link to={item.url}>
                <img src={item.image} alt="img" />
            </Link>
        </div>
    );
};

export default OffersHeaderSliderItem;