import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { callBack } from '../../../../Service/AppService';
import { cartAddedButton, WishAddedButton, WishRemoveItem } from '../../../../Service/CartContent';


const TrandingProductItem = ({item,wishItemsGet}) => {
    const [selectedWish, setselectedWish] = useState(false)
    // const Wishlist=WishService.Get();
    var findItem=wishItemsGet.Items.find(item2=>item2.Id===item.Id);
    useEffect(() => {
        if(findItem){
            setselectedWish(true);
        }
        return () => {
          
        }
    }, [selectedWish,findItem])
    const refreshHeart=()=>{
        setselectedWish(prevState=>!prevState)
    }


    return (
        <div class="single-product-catagory-item">
        <div class="hover-eff-product">
                    {
                      (!selectedWish && !findItem)?
                      <a title="Add to Wishlist" onClick={callBack(WishAddedButton,item)} href>
                      <i class="fa fa-heart-o" aria-hidden="true" onClick={refreshHeart}></i>
                      </a>:
                       <a title="Remove Wish Item" href onClick={callBack(WishRemoveItem,item)}>
                       <i class="fa fa-heart" aria-hidden="true" onClick={refreshHeart}></i>
                       </a>
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
