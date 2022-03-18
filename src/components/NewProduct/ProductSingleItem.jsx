import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { callBack } from "../../Service/AppService";
import {
  cartAddedButton,
  WishAddedButton,
  WishRemoveItem,
  WishService,
} from "../../Service/CartContent";
import authContext from "../../Store/auth-context";
import cartContext from "../../Store/cart-context";
import AnimatedProduct from "../AnimatedProduct/AnimatedProduct";

const ProductSingleItem = ({ item, setalert }) => {
  const authCtx = useContext(authContext);
  const cartCtx = useContext(cartContext);
  const cartCtxModal = cartCtx.getCartModel;
  const [selectedWish, setselectedWish] = useState(false);
  const [anime, setAnime] = useState(false);
  const cardRef = useRef(null);
  const Wishlist = WishService.Get();
  var findItem = Wishlist.Items.find((item2) => item2.Id === item.Id);

  const addToCartHandler = (item,e) => {
      e.preventDefault();
    cartCtx.storeCartItems(item);
  };

  useEffect(() => {
    if (findItem) {
      setselectedWish(true);
    }
    return () => {};
  }, [selectedWish, findItem]);

  const refreshHeart = () => {
    setselectedWish((prevState) => !prevState);
  };
  const stopAnime = () => {
    setAnime(false);
  };

  const animateCardHandler = (item) => {
    if (cartCtxModal.Items.find((itemInner) => itemInner.Id === item.Id)) {
      setalert();
    } else {
      authCtx.cartContext(item);
      animationStartHandler();
    }
  };

  const animationStartHandler = () => {
    setAnime(true);
  };

  return (
    <div class="single-product-catagory-item" ref={cardRef}>
      <div class="hover-eff-product">
        {!selectedWish && !findItem ? (
          <a
            title="Add to Wishlist"
            onClick={callBack(WishAddedButton, item)}
            href
          >
            <i
              class="fa fa-heart-o"
              aria-hidden="true"
              onClick={refreshHeart}
            ></i>
          </a>
        ) : (
          <a
            title="Remove Wish Item"
            href
            onClick={callBack(WishRemoveItem, item)}
          >
            <i
              class="fa fa-heart"
              aria-hidden="true"
              onClick={refreshHeart}
            ></i>
          </a>
        )}
      </div>
      <Link to={"/product/" + item.Id}>
        {item.Ds > 0 ? (
          <div class="group-price-drag">
            <span class="product-new-drag">
              {item.Ds > 0 ? item.Ds : ""}
              {item.Ds > 0 ? "%" : ""}{" "}
            </span>
          </div>
        ) : (
          ""
        )}
        <img src={item.image} alt="img" />
        <div class="catagory-overly-main-bg">
          <div class="catagory-product-overly">
            <h4>{item.Nm}</h4>
          </div>
          <div class="basket-add">
            {item.Ds > 0 ? (
              <span class="item__price item__price--now">
                ৳{(item.MRP - (item.MRP * item.Ds) / 100).toFixed(2)}
              </span>
            ) : (
              <span class="item__price item__price--now">৳{item.MRP}</span>
            )}

            {item.Ds > 0 ? (
              <span class="price product-price">
                <del class="cross_price">৳ {item.MRP}</del>
              </span>
            ) : (
              ""
            )}
          </div>
          <span onClick={animateCardHandler.bind(null, item)}>
            <a
              onClick={addToCartHandler.bind(this, item)}
              href
              class="btn_cart"
            >
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              <h5>Add to Cart</h5>
            </a>
          </span>
        </div>
      </Link>
      <AnimatedProduct when={anime} onStop={stopAnime} uiRef={cardRef} />
    </div>
  );
};

export default ProductSingleItem;
