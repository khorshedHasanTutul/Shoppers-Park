import React from 'react';
import { Link } from 'react-router-dom';

const BrandCatItemHeader = ({data}) => {
    // const {id}=useParams();
    // const data=BrandData.find(item=>item.brand_id===parseInt(id) );
    return (
        <section class="breadcrumb-main-area">
                <div class="container">
                    <nav aria-label="breadcrumb" class="breadcrumb-main">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">{data.brand_name}</li>
                        </ul>
                    </nav>
                </div>
            </section>
    );
};

export default BrandCatItemHeader;