import React from 'react'

const MiniCart = ({openCart}) => {
    return (
        <div class="cart-box view-pop" onClick={openCart}>
                    <div class="cart-items text-center">
                        <span class="cart-count">0</span>
                        <span>Items</span>
                    </div>
                    <div class="cart-bag text-center">
                        <img src="/contents/assets/images/footerlogo.png" alt="img" />
                    </div>
                    <div class="cart-amount">
                        <span>৳ </span>
                        <span class="cart-amount-span">0</span>
                    </div>
        </div>
    )
}
export default MiniCart;
