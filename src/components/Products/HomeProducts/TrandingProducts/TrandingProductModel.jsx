import React, { useContext, useRef, useState } from "react";
import {} from "@fortawesome/free-solid-svg-icons";
import cartContext from "../../../../Store/cart-context";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../../Service/httpService2";
import AnimatedProduct from "../../../AnimatedProduct/AnimatedProduct";

const TrandingProductModel = ({ item, setalert, from }) => {
  const [anime, setAnime] = useState(false);
  const cardRef = useRef(null);
  const cartCtx = useContext(cartContext);
  const cartCtxModal = cartCtx.getCartModel;
  const returnAsObject = (item) => {
    const productInfo = {
      id: item[0],
      name: item[1],
      displayName: item[2],
      PackSize: item[3],
      image: item[4],
      currentPrice: item[5],
      discountPrice: item[7],
      orginalPrice: item[6],
      stockUnit: item[9],
      discountedPercentage: item[8],
      rank: item[10],

      // Brand_id: item[11],
      // Unit_id: item[12],
    };
    return productInfo;
  };
  let getReturnObjectData;
  getReturnObjectData = returnAsObject(item);

//   console.log("trandingItem=>", getReturnObjectData);

  const addToCartHandler = (item, e) => {
    e.preventDefault();
    cartCtx.storeCartItems(item);
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

//   console.log({ getReturnObjectData });

  return (
    <>
      <div class="single-product-catagory-item" ref={cardRef}>
        <div class="hover-eff-product">
          <a title="Remove Wishitem" href>
            <i class="fa fa-heart-o"></i>
          </a>
        </div>

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
              <img src="/contents/assets/images/no_productimg.jpg" alt="img" />
            ) : (
              <img src={`${BASE_URL}${getReturnObjectData.image}`} alt="img" />
            )}
          </div>

          <div class="catagory-overly-main-bg">
            <div class="catagory-product-overly">
              <h4>{getReturnObjectData.displayName}</h4>
            </div>
            <div class="basket-add">
              <span class="item__price item__price--now">
                ???{getReturnObjectData.currentPrice}
              </span>
              {getReturnObjectData.discountPrice > 0 && (
                <span class="price product-price">
                  <del class="cross_price">
                    ??? {getReturnObjectData.orginalPrice}
                  </del>
                </span>
              )}
            </div>
            <span onClick={animateCardHandler.bind(null, getReturnObjectData)}>
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
        <AnimatedProduct when={anime} onStop={stopAnime} uiRef={cardRef} />
      </div>
    </>
  );
};
export default TrandingProductModel;
