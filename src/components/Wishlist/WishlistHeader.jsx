import React from 'react';
import { Link } from 'react-router-dom';

const WishlistHeader = () => {
    return (
        <section class="breadcrumb-main-area">
        <div class="container">
            <nav aria-label="breadcrumb" class="breadcrumb-main">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Wishlist</li>
                </ul>
            </nav>
        </div>
    </section>
    );
};

export default WishlistHeader;