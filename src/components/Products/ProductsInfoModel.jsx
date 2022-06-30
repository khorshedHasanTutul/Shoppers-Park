import React, { useContext, useEffect, useRef, useState } from "react";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  returnDataAsObject,
  returnDataAsObjectProperties,
} from "../../Service/DataService";
import cartContext from "../../Store/cart-context";
import { Link } from "react-router-dom";
import AnimatedProduct from "../AnimatedProduct/AnimatedProduct";
import { BASE_URL, httpV2 } from "../../Service/httpService2";
import appContext from "../../Store/app-context";
import { ADD_WISH_ITEM, REMOVE_WISH_ITEM } from "../../lib/endpoints";
import authContext from "../../Store/auth-context";
import ModalPOpUp from "../MainHeader/TopHeader/AuthenticationPortal/ModalPOpUp";

const ProductsInfoModel = ({ item, setalert, from }) => {
  const [loginModal, setLoginModal] = useState(false);
  const authCtx = useContext(authContext);
  const appCtx = useContext(appContext);
  const [anime, setAnime] = useState(false);
  const cardRef = useRef(null);
  const cartCtx = useContext(cartContext);
  const cartCtxModal = cartCtx.getCartModel;
  let getReturnObjectData;
  if (from === "api") {
    getReturnObjectData = returnDataAsObject(item);
  } else {
    getReturnObjectData = returnDataAsObjectProperties(item);
  }
  const [visibleSelectWish, setVisibleSelectWish] = useState(false);
  const getWishItems = appCtx.wishList.getWishItems;
  console.log({ getWishItems });
  const findItem = getWishItems.find((item) => item === getReturnObjectData.id);

  const closeLoginModal = () => {
    setLoginModal((prevState) => !prevState);
  };

  const addToCartHandler = (item, e) => {
    e.preventDefault();
    cartCtx.storeCartItems(item);
  };

  const addToWishHandler = (item) => {
    if (authCtx.isLoggedIn === true) {
      appCtx.wishList.storewishItems(item.id);
      httpV2.get({
        url: ADD_WISH_ITEM + getReturnObjectData.id,
        before: () => {},
        successed: () => {},
        failed: () => {},
        always: () => {},
      });
    } else setLoginModal(true);
  };

  const removeFromWishHandler = (item) => {
    appCtx.wishList.removewishItem(item);
    httpV2.get({
      url: REMOVE_WISH_ITEM + getReturnObjectData.id,
      before: () => {},
      successed: () => {},
      failed: () => {},
      always: () => {},
    });
  };

  const stopAnime = () => {
    setAnime(false);
  };

  const animateCardHandler = (item) => {
    if (cartCtxModal.Items.find((itemInner) => itemInner.id === item.id)) {
      setalert();
    } else {
      animationStartHandler();
    }
  };

  const animationStartHandler = () => {
    setAnime(true);
  };

  useEffect(() => {
    if (findItem) {
      setVisibleSelectWish(true);
    } else {
      setVisibleSelectWish(false);
    }
  }, [findItem]);

  

  // console.log({ getReturnObjectData });

  return (
    <>
      <div class="single-product-catagory-item" ref={cardRef}>
        {!visibleSelectWish && (
          <div
            class="hover-eff-product"
            onClick={addToWishHandler.bind(null, getReturnObjectData)}
          >
            <a title="Add to wish" href>
              <i class="fa fa-heart-o"></i>
            </a>
          </div>
        )}
        {visibleSelectWish && (
          <div
            class="hover-eff-product"
            onClick={removeFromWishHandler.bind(null, getReturnObjectData)}
          >
            <a title="Remove to wish" href>
              <i class="fa fa-heart"></i>
            </a>
          </div>
        )}

        <div>
          <Link to={"/product/" + getReturnObjectData.id}>
            {getReturnObjectData.discountPrice > 0 ? (
              <div class="group-price-drag">
                {getReturnObjectData.discountedPercentage > 0 && (
                  <span class="product-new-drag">
                    {getReturnObjectData.discountedPercentage > 0
                      ? getReturnObjectData.discountedPercentage.toFixed(2)
                      : ""}
                    {getReturnObjectData.discountedPercentage > 0 ? "%" : ""}
                  </span>
                )}
              </div>
            ) : (
              ""
            )}
            <div className="product-img">
              {getReturnObjectData.image === null ? (
                <img
                  src="/contents/assets/images/no_productimg.jpg"
                  alt="img"
                />
              ) : (
                <img
                  src={`${BASE_URL}${getReturnObjectData.image}`}
                  alt="img"
                />
              )}
            </div>

            <div class="catagory-overly-main-bg">
              <div class="catagory-product-overly">
                <h4>{getReturnObjectData.displayName}</h4>
              </div>
              <div class="basket-add">
                <span class="item__price item__price--now">
                  ৳{getReturnObjectData.currentPrice}
                </span>
                {getReturnObjectData.discountPrice > 0 && (
                  <span class="price product-price">
                    <del class="cross_price">
                      ৳ {getReturnObjectData.orginalPrice}
                    </del>
                  </span>
                )}
              </div>
              <span
                onClick={animateCardHandler.bind(null, getReturnObjectData)}
              >
                <a
                  onClick={addToCartHandler.bind(this, getReturnObjectData)}
                  href
                  class="btn_cart"
                >
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  <h5>Add to Cart</h5>
                </a>
              </span>
            </div>
          </Link>
        </div>
        <AnimatedProduct when={anime} onStop={stopAnime} uiRef={cardRef} />
      </div>
      {loginModal && <ModalPOpUp ModalOpen={closeLoginModal} />}
    </>
  );
};
export default ProductsInfoModel;
