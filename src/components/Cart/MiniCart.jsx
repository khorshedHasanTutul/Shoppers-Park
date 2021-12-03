import React, { useState } from 'react'
import { CartService } from '../../Service/CartContent';

const MiniCart = ({openCart}) => {
    const [CartContent, setCartContent] = useState(CartService.Get())
    CartService.Refresh=setCartContent;
    return (
        <div class="cart-box view-pop" onClick={openCart}>
                    <div class="cart-items text-center">
                        <span class="cart-count">{CartContent.Items.length}</span>
                        <span> Items</span>
                    </div>
                    <div class="cart-bag text-center">
                        <img src="/contents/assets/images/footerlogo.png" alt="img" />
                    </div>
                    <div class="cart-amount">
                        <span>৳ </span>
                        <span class="cart-amount-span">{(CartContent.TotalAmount).toFixed(2)}</span>
                    </div>
        </div>
    )
}
export default MiniCart;
