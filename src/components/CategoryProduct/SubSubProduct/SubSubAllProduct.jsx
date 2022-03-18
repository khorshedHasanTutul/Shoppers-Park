import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { callBack } from "../../../Service/AppService";
import { cartAddedButton, WishAddedButton } from "../../../Service/CartContent";
import authContext from "../../../Store/auth-context";
import cartContext from "../../../Store/cart-context";
import AnimatedProduct from "../../AnimatedProduct/AnimatedProduct";
import appData from "../../DataSource/appData";

const SubSubAllProduct = ({
  categoryId,
  subCategoryId,
  subItemId,
  setalert,
}) => {
  const [anime, setAnime] = useState(false);
  const cardRef = useRef(null);
  const cartCtx = useContext(cartContext);
  const cartCtxModal = cartCtx.getCartModel;

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
  const addToCartHandler = (item, e) => {
    e.preventDefault();
    cartCtx.storeCartItems(item);
  };

  const animationStartHandler = () => {
    setAnime(true);
  };

  const concatData = appData.categoryProducts;
  const data = concatData.filter(
    (item) =>
      item.category_id === categoryId.categoryId &&
      item.subCategory_id === subCategoryId.subCategory_id &&
      item.subCategory_item_id === subItemId.subCategory_item
  );
  if (data.length === 0) {
    return (
      <div className="pro-not-found-img">
        <strong>
          {" "}
          <img src="/contents/assets/images/no-product-found.png" alt="" />{" "}
        </strong>
      </div>
    );
  } else
    return (
      <>
        {data.map((item) => (
          <div class="single-product-catagory-item" ref={cardRef}>
            <div
              class="hover-eff-product"
              onClick={callBack(WishAddedButton, item)}
            >
              <a title="Add to Wishlist" href>
                {" "}
                <i class="fa fa-heart-o" aria-hidden="true"></i>
              </a>
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
                    <span class="item__price item__price--now">
                      ৳{item.MRP}
                    </span>
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
        ))}
      </>
    );
};

export default SubSubAllProduct;
