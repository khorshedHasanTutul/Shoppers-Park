import React, { useContext, useEffect, useState} from 'react'
import {  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { callBack } from '../../../../Service/AppService'
import { cartAddedButton} from '../../../../Service/CartContent'
import authContext from '../../../../Store/auth-context'

const CategorySingleItem = ({item,wishItemsGet}) => {
    const authCtx = useContext(authContext)
    const [wishActiveItem, setwishActiveItem] = useState(false)

    const wishItemAddHandler=()=>{
        authCtx.wishList({
            id:item.Id
        })
    }
    const WishRemoveHandler=()=>{
        authCtx.wishRemovehandler({
            id:item.Id
        })
    }
    const getAllWishItem=authCtx.getwishlist;
    const findWishId=getAllWishItem.find(item2=>item2===item.Id);
    useEffect(() => {
        if(findWishId){
            setwishActiveItem(true)
        }
    }, [findWishId])
    
    return (

            <div class="single-product-catagory-item">

                <div class="hover-eff-product">
                    {
                        (!wishActiveItem)?<>
                                <a title="Add to Wishlist" onClick={wishItemAddHandler} href>
                                    <i class="fa fa-heart-o"></i>
                                </a>
                        </>:
                        <>
                        <a title="Remove Wishitem" onClick={WishRemoveHandler} href>
                            <i class="fa fa-heart"></i>
                        </a>
                        </>
                    }
                      
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
                                {
                                    (item.Ds>0)?<span class="item__price item__price--now">৳{(item.MRP-((item.MRP)*item.Ds)/100).toFixed(2)}</span>:
                                    <span class="item__price item__price--now">৳{item.MRP}</span>
                                }
                               
                                {item.Ds>0 ? <span class="price product-price"><del class="cross_price">৳ {item.MRP}</del></span> :
                                ''
                                }
                                
                            </div>
                            <a onClick={callBack(cartAddedButton,item)} href class="btn_cart" >
                                <i class="fa fa-shopping-cart" aria-hidden="true" ></i>
                                <h5 >Add to Cart</h5>
                            </a>
                        </div>
                    </Link>
                    </div>
    )
}
export default CategorySingleItem;