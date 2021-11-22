import React from 'react'
import Category from './Category/Category';
import { Link } from 'react-router-dom';

const LowHeader = () => {
    return (
        <div class="header-bottom-flex">
            <Category />
            
            <div class="wishlist-offer">
                <ul>
                 <Link to="/">Request a Order</Link>
                </ul>
            </div>
            
        </div>
    )
}

export default LowHeader;
