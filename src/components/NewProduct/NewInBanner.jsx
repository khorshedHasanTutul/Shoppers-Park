import React from 'react';
import { NewInPage } from '../../Service/AppService';

const NewInBanner = () => {
    const data=NewInPage.Banner;
    return (
        <section class="new-in-banner-area">
        <div class="container">
            <div class="new-in-banner-main">

                <div class="new-in-banner-single-item-left">
                    <img src={data.image} alt="img" />
                </div>

            </div>
        </div>
    </section>   
    );
};

export default NewInBanner;