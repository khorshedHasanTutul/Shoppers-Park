import React, { useContext, useState } from 'react'
import { CartClear, CartService } from '../../Service/CartContent';
import CartTableItem from './CartTableItem';
import { Link } from 'react-router-dom';
import authContext from '../../Store/auth-context';
import ModalPOpUp from '../MainHeader/TopHeader/AuthenticationPortal/ModalPOpUp';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import PopUpAlert from '../utilities/Alert/PopUpAlert';
import { callBack } from '../../Service/AppService';

const ContentCart = ({closeCart,setalert,setloginPopupModel,setorderNowPressed}) => {
    const authCtx=useContext(authContext)
    const [cartModel, referesh] = useState(CartService.Get());
    CartService.Refresh=referesh;
    const history=useHistory();

    const productFound=(evt)=>{
        if(cartModel.Items.length===0){
            evt.preventDefault();
            // alert('Please Select at least one product');
            setalert(true)
            return false;
        }
        else if(authCtx.isLoggedIn!==true){
            evt.preventDefault();
            setloginPopupModel(true)
            setorderNowPressed(true)
        }
        else{
            closeCart();
        }
    }
    const clearCartHandler=(e)=>{
        authCtx.clearCart();
        callBack(CartClear)(e);
    }

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
                                        <CartTableItem data={cartModel}/>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="cart-footer">
                            <div>
                            <Link to={'/checkout'} onClick={productFound}   id="checkout-button" class="btn btn-success pull-left">Order Now</Link>
                           
                            <span class="btn btn-info cart-amount-span cart-amount-span">৳ <span>{(cartModel.TotalAmount.toFixed(2))}</span></span>
                            </div>
                            <div className='clear-button btn' onClick={clearCartHandler}>
                                <span onClick={closeCart}> Clear Cart</span> 
                            </div>
                            {/* callBack(CartClear) */}

                          
                            {/* <div className='button-card-clear'>
                                <a class="block-btn-card" href>
                                    <div class="clearfix"></div>
                                </a>
                                <div className='clear-button'>
                                   hji
                                </div>

                            </div> */}
                           
                        </div>
                    </div>
                    
                </div>
               
    )
}

export default ContentCart;