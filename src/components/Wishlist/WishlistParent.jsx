import React, { useState } from 'react';
import { WishService } from '../../Service/CartContent';
import WishlistHeader from './WishlistHeader';
import WishlistNoProduct from './WishlistNoProduct';
import WishlistProduct from './WishlistProduct';

const WishlistParent = () => {
    const [Wishlist, refresh] = useState(WishService.Get())
    WishService.Refresh=refresh;
    return (
        <>
            <WishlistHeader />
            <section class="wishlist-area">
              <div class="container">
                  <div class="wishlist-main-item">
                    {/* <!-- wd-empty-page --> */}
                    {
                        (Wishlist.Items.length<=0)&& <WishlistNoProduct />
                    }
                   
                     {/* <!-- wd-empty-page --> */}
                    {
                        (Wishlist.Items.length>0) && 
                    <div class="add-product-wishlist-main-page">
                         <h3>Your products wishlist</h3>
                          <WishlistProduct data={Wishlist.Items}/>
                     </div>
                    }
                     
                     
                  </div>
              </div>
          </section>  
        </>
    );
};

export default WishlistParent;