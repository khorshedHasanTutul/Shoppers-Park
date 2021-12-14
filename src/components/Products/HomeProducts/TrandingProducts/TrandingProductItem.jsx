import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { callBack } from '../../../../Service/AppService';
import { cartAddedButton } from '../../../../Service/CartContent';
import authContext from '../../../../Store/auth-context';


const TrandingProductItem = ({item,wishItemsGet}) => {
    const authCtx = useContext(authContext)
    const [wishActiveItem, setwishActiveItem] = useState(false)

    const getAllWishItem=authCtx.getwishlist;
    const findWishId=getAllWishItem.find(item2=>item2===item.Id);
    useEffect(() => {
        if(findWishId){
            setwishActiveItem(true)
        }
        return () => {
            
        }
    }, [findWishId])


    return (
        <div class="single-product-catagory-item">
                <div class="hover-eff-product">
                    {
                        (!wishActiveItem)?<>
                                <a title="Add to Wishlist" href>
                                    <i class="fa fa-heart-o"></i>
                                </a>
                        </>:
                        <>
                        <a title="Remove Wishitem" href>
                            <i class="fa fa-heart"></i>
                        </a>
                        </>
                    }
                      
                </div>
        <Link to={'/product/'+item.Id}>
        {
        item.Ds>0 ? <div class="group-price-drag"><span class="product-new-drag">{item.Ds>0 ? item.Ds:''}{item.Ds>0 ? '%':''} </span></div> : ''
        }
            <img src="/contents/assets/images/Jimmy-Choo-Eau-de-Parfum-100ml-285053.jpg" alt="img" />
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
                <a href class="btn_cart" onClick={callBack(cartAddedButton,item)}>
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    <h5>Add to Cart</h5>
                </a>
            </div>
        </Link>
    </div>
    )
}
export default TrandingProductItem;
