import React, { useState } from 'react'
import { useEffect } from 'react';
import ContentCart from './ContentCart';
import MiniCart from './MiniCart';
import { CartService } from '../../Service/CartContent';

const ShoppingCart = () => {
    const [isOpenCart, setisOpenCart] = useState(false)
    const toggleCart=()=>{
        setisOpenCart(prevState => !prevState)
    }
    return (
        <div class="cart_box_container cart_info">
             {isOpenCart && <ContentCart closeCart={toggleCart} />}
            {!isOpenCart && <MiniCart openCart={toggleCart}/>}
           
           
        </div>
    )
}
export default ShoppingCart;