import React, { useState } from 'react'
import { CartService } from '../../Service/CartContent';
import CartTableItem from './CartTableItem';
import { Link } from 'react-router-dom';

const ContentCart = ({closeCart}) => {
    const [cartModel, referesh] = useState(CartService.Get());
    CartService.Refresh=referesh;
    return (
        <div class="cart-box-view">
                    <div class="cart-box-inner-view">
                        <div class="cart-header no_margin card-header-flex-for-sale">
                            <div class="card-select-item">
                                <img src="/contents/assets/images/add-cart.png" alt="img" />
                                <strong class="car-box-title SearchFont">
                                    {
                                        (cartModel.Items.length>0)?<span>{cartModel.Items.length}</span>:''
                                    }
                                    
                                    <span> Item</span>
                                </strong>
                            </div>
                            <div class="card-select-cross view-pop" onClick={closeCart}>
                                <img src="/contents/assets/images/x-button.png" alt="img" />
                            </div>
                        </div>
                        <div class="cart-body text-center">
                            <div class="cart-table-wrap">
                                <span class="happy-shopping">Happy Shopping!! </span>
                                <table class="cart-table">
                                    <tbody>
                                        <CartTableItem data={cartModel.Items}/>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="cart-footer">
                            <Link to={'/checkout'} id="checkout-button" class="btn btn-success pull-left">Order Now</Link>
                            <span class="btn btn-info cart-amount-span cart-amount-span">৳ <span>{cartModel.TotalAmount}</span></span>
                            <a class="block-btn-card">
                                <i class="fa fa-shopping-cart fa-2x pull-right"></i>
                                <div class="clearfix"></div>
                            </a>
                        </div>
                    </div>
                </div>
    )
}

export default ContentCart;