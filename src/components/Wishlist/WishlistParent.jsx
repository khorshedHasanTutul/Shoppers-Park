import React from 'react';
import WishlistHeader from './WishlistHeader';
import WishlistNoProduct from './WishlistNoProduct';
import WishlistProduct from './WishlistProduct';

const WishlistParent = () => {
    return (
        <>
            <WishlistHeader />
            <section class="wishlist-area">
              <div class="container">
                  <div class="wishlist-main-item">
                    {/* <!-- wd-empty-page --> */}
                   <WishlistNoProduct />
                     {/* <!-- wd-empty-page --> */}
                     
                     <div class="add-product-wishlist-main-page">
                         <h3>Your products wishlist</h3>
                          <WishlistProduct />
                     </div>
                  </div>
              </div>
          </section>  
        </>
    );
};

export default WishlistParent;