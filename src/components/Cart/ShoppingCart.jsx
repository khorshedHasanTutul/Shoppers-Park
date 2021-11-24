import React, { useState } from 'react'
import { useEffect } from 'react';
import ContentCart from './ContentCart';
import MiniCart from './MiniCart';
import { CartService } from '../../Service/CartContent';
import { useLocation } from 'react-router';

const ShoppingCart = () => {
    const {pathname} =useLocation();
    console.log('location',pathname)
    const [isOpenCart, setisOpenCart] = useState(false)
    const toggleCart=()=>{
        setisOpenCart(prevState => !prevState)
    }
    if(pathname==='/checkout'){
        return null;
    }
    else 
    return ( 
        <div class="cart_box_container cart_info">
             {isOpenCart && <ContentCart closeCart={toggleCart} />}
            {!isOpenCart && <MiniCart openCart={toggleCart}/>}
           
           
        </div>
    )
}
export default ShoppingCart;