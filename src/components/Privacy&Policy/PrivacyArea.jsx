import React from 'react';
import { Priivacy } from '../../Service/AppService';

const PrivacyArea = () => {
    const data=Priivacy;
    return (
        <section class="return-policy-area">
        <div class="container">
            <div class="return-policy-main">
                <h2>{data.header}</h2>
                <h2>{data.itemText}</h2>
                <p>{data.paragraph}</p>
            </div>
        </div>
    </section>
    );
};

export default PrivacyArea;