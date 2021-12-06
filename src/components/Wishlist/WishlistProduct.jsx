import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { callBack } from '../../Service/AppService';
import { cartAddedButton, WishRemoveItem, WishService } from '../../Service/CartContent';

const WishlistProduct = () => {
    const [wishRemove, setwishRemove] = useState(WishService.Get())
    WishService.Refresh=setwishRemove;

    useEffect(() => {
       setwishRemove(WishService.Get())
        return () => {
            
        }
    }, [setwishRemove])
    return (
        <section class="catagory-product-area">
        <div class="catagory-main-product-area">
            {/* <!-- single product catagory main area --> */}
            <div class="product-catagory-main-flex owl-slider-perk">
                <div class="product-catagory-inner-flex owl-slider-perk-items">
                    {/* <!-- single item --> */}
                    {
                        wishRemove.Items.map(item=>(
                            <div class="single-product-catagory-item">
                            <div class="wishlist-cross-btn" onClick={callBack(WishRemoveItem,item)}>
                                <a href><i class="fa fa-times" aria-hidden="true" ></i>
                                    removed</a>
                            </div>
                            {/* <div class="hover-eff-product">
                                <a title="Add to Wishlist" href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                            </div> */}
                            <Link to={'/product/'+item.Id}>
                            {
                            item.Ds>0 ? <div class="group-price-drag"><span class="product-new-drag">{item.Ds>0 ? item.Ds:''}{item.Ds>0 ? '%':''} </span></div> : ''
                            }
                                <img src={item.image} alt="img" />
                                <div class="catagory-overly-main-bg">
                                    <div class="catagory-product-overly">
                                        <h4>{item.Nm}</h4>
                                    </div>
                                    <div class="basket-add">
                                            {
                                                (item.Ds>0)?<span class="item__price item__price--now">৳{(item.MRP-((item.MRP)*item.Ds)/100).toFixed(2)}</span>:
                                                <span class="item__price item__price--now">৳{item.MRP}</span>
                                            }
                                            
                                            {item.Ds>0 ? <span class="price product-price"><del class="cross_price">৳ {item.MRP}</del></span> :
                                            ''
                                            }
                                            
                                    </div>
                                    <div class="btn_cart" onClick={callBack(cartAddedButton,item)}>
                                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        <h5>Add to Cart</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        ))
                    }

                   
                </div>
            </div>
            {/* <!-- single product catagory main area --> */}
        </div>
</section>
    );
};

export default WishlistProduct;