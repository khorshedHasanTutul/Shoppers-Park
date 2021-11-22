import React from 'react';
import { Link } from 'react-router-dom';

const WishlistNoProduct = () => {
    return (
        <div class="wd-empty-page-content">
        <div class="wd-empty-inner-content">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
            <h1>Wishlist is empty.</h1>
            <p>You don't have any products in the wishlist yet.</p>
            <p>You will find a lot of interesting products on our "Shop" page.</p>
            <div class="shop-all-offer-btn">
                <Link to="/">Return to shop</Link>
            </div>
            
        </div>
    </div>
    );
};

export default WishlistNoProduct;