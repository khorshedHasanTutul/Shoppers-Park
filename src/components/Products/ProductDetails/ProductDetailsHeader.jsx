import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetailsHeader = () => {
    return (
        <section class="breadcrumb-main-area">
                <div class="container">
                    <nav aria-label="breadcrumb" class="breadcrumb-main">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Product Details</li>
                        </ul>
                    </nav>
                </div>
            </section>
    );
};

export default ProductDetailsHeader;