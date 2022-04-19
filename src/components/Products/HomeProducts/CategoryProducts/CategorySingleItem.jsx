import React, { useContext, useRef, useState } from "react";
import {} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AnimatedProduct from "../../../AnimatedProduct/AnimatedProduct";
import cartContext from "../../../../Store/cart-context";
import { returnDataAsObjectProperties } from "../../../../Service/DataService";

const CategorySingleItem = ({ item, setalert }) => {
  const getReturnObjectData = returnDataAsObjectProperties(item);
  const [anime, setAnime] = useState(false);
  const cardRef = useRef(null);
  const cartCtx = useContext(cartContext);
  const cartCtxModal = cartCtx.getCartModel;

  const addToCartHandler = (item, e) => {
    e.preventDefault();
    cartCtx.storeCartItems(item);
  };

  const stopAnime = () => {
    setAnime(false);
  };

  const animateCardHandler = (item) => {
    if (cartCtxModal.Items.find((itemInner) => itemInner.Id === item.Id)) {
      setalert();
    } else {
      animationStartHandler();
    }
  };

  const animationStartHandler = () => {
    setAnime(true);
  };

  return (
    <>
      <div class="single-product-catagory-item" ref={cardRef}>
        <div class="hover-eff-product">
          <a title="Remove Wishitem" href>
            <i class="fa fa-heart-o"></i>
          </a>
        </div>

        <Link to={"/product/" + getReturnObjectData.Id}>
          {getReturnObjectData.Ds > 0 ? (
            <div class="group-price-drag">
              <span class="product-new-drag">
                {getReturnObjectData.Ds > 0 ? getReturnObjectData.Ds : ""}
                {getReturnObjectData.Ds > 0 ? "%" : ""}{" "}
              </span>
            </div>
          ) : (
            ""
          )}

          <img src={getReturnObjectData.image} alt="img" />
          <div class="catagory-overly-main-bg">
            <div class="catagory-product-overly">
              <h4>{getReturnObjectData.Nm}</h4>
            </div>
            <div class="basket-add">
              {getReturnObjectData.Ds > 0 ? (
                <span class="item__price item__price--now">
                  ৳
                  {(
                    getReturnObjectData.MRP -
                    (getReturnObjectData.MRP * getReturnObjectData.Ds) / 100
                  ).toFixed(2)}
                </span>
              ) : (
                <span class="item__price item__price--now">
                  ৳{getReturnObjectData.MRP}
                </span>
              )}

              {getReturnObjectData.Ds > 0 ? (
                <span class="price product-price">
                  <del class="cross_price">৳ {getReturnObjectData.MRP}</del>
                </span>
              ) : (
                ""
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
export default CategorySingleItem;
