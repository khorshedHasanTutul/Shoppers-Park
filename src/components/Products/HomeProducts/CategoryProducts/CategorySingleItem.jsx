import React, { useContext, useEffect, useRef, useState} from 'react'
import {  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { callBack } from '../../../../Service/AppService'
import { cartAddedButton} from '../../../../Service/CartContent'
import authContext from '../../../../Store/auth-context'
import AnimatedProduct from '../../../AnimatedProduct/AnimatedProduct'
import PopUpAlert from '../../../utilities/Alert/PopUpAlert'

const CategorySingleItem = ({item,wishItemsGet}) => {
    const [anime, setAnime] = useState(false);
    const authCtx = useContext(authContext)
    const cardRef = useRef(null)
    const [wishActiveItem, setwishActiveItem] = useState(false)
    const [alert, setalert] = useState(false)

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
    const stopAnime = () => {
        setAnime(false);
      }
    
    const getAllWishItem=authCtx.getwishlist;
    const findWishId=getAllWishItem.find(item2=>item2===item.Id);
    useEffect(() => {
        if(findWishId){
            setwishActiveItem(true)
        }
    }, [findWishId])

    const animateCardHandler=(item)=>{
        const getCartContext=authCtx.getCartContext;
        if(getCartContext.find(itemInner=>itemInner.Id===item.Id)){
            setalert(true)
        }
        else{
            authCtx.cartContext(item)
            animationStartHandler()
        }

        
    }
    const animationStartHandler=()=>{
        setAnime(true);
    }
    const closeModal=()=>{
        setalert(prevState=>!prevState)
    }
    
    return (
        <>
        <div class="single-product-catagory-item" ref={cardRef}>

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
                            <span onClick={animateCardHandler.bind(null,item)}>
                            <a onClick={callBack(cartAddedButton,item)} href class="btn_cart">
                                <i class="fa fa-shopping-cart" aria-hidden="true" ></i>
                                <h5 >Add to Cart</h5>
                            </a>
                            </span>

                        </div>
                    </Link>
                    <AnimatedProduct when={anime} onStop={stopAnime} uiRef={cardRef}/>
                   
                    </div>

                    {
                    (alert)&&<PopUpAlert content={'Already in your cart.'} closeModal={closeModal} />
                    }
        </>

            
                    
    )
}
export default CategorySingleItem;