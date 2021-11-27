import React from 'react';
import { Link } from 'react-router-dom';
import { callBack } from '../../Service/AppService';
import { cartAddedButton } from '../../Service/CartContent';

const ProductSingleItem = ({item}) => {
    return (
        <div class="single-product-catagory-item">
        <div class="hover-eff-product">
            <a title="Add to Wishlist" href> <i class="fa fa-heart-o" aria-hidden="true"> </i></a>
        </div>
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
                                <span class="item__price item__price--now">৳{item.MRP}</span>
                                {item.Ds>0 ? <span class="price product-price"><del class="cross_price">৳ {item.Ds}</del></span> :
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
    );
};

export default ProductSingleItem;