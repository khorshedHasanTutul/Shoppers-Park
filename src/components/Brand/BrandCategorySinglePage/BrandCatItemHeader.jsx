import React from 'react';
import { useParams } from 'react-router';
import { BrandData } from '../../../Service/AppService';
import appData from '../../DataSource/appData';

const BrandCatItemHeader = ({data}) => {
    // const {id}=useParams();
    // const data=BrandData.find(item=>item.brand_id===parseInt(id) );
    console.log(data)
    return (
        <section class="breadcrumb-main-area">
                <div class="container">
                    <nav aria-label="breadcrumb" class="breadcrumb-main">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{data.brand_name}</li>
                        </ul>
                    </nav>
                </div>
            </section>
    );
};

export default BrandCatItemHeader;