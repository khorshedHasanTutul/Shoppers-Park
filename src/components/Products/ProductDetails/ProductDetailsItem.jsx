import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import cartContext from "../../../Store/cart-context";
import { BASE_URL, httpV2 } from "../../../Service/httpService2";
import SliderComponent from "../../utilities/Slider/SliderComponent";
import SmallSliderSingleItem from "./SmallSliderSingleItem";
import appContext from "../../../Store/app-context";
import { ADD_WISH_ITEM } from "../../../lib/endpoints";

const ProductDetailsItem = ({ product, setalert }) => {
  const cartCtx = useContext(cartContext);
  const appCtx = useContext(appContext);
  const [count, setCount] = useState(1);
  const [selectedImageStatus, setSelectedImageStatus] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const cartCtxModal = cartCtx.getCartModel;
  const [visibleSelectWish, setVisibleSelectWish] = useState(false);
  const getWishItems = appCtx.wishList.getWishItems;
  const findItem = getWishItems.find((item) => item === product.id);

  const options = {
    rewind: true,
    type: "slide",
    autoplay: true,
    rewindSpeed: 500,
    speed: 500,
    pauseOnHover: false,
    perPage: 2,
    width: "100%",
  };
  const smallSliderImages = product?.images;

  const findPrimaryImage = product?.images.find(
    (item) => item.isPrimary === true
  );
  console.log({ findPrimaryImage });

  const addToCartHandler = (item, e) => {
    e.preventDefault();
    if (cartCtxModal.Items.find((itemInner) => itemInner.id === product.id)) {
      setalert();
    } else {
      cartCtx.singleProductAdd(item, count);
    }
  };
  const addToWishHandler = (item) => {
    appCtx.wishList.storewishItems(item.id);
    httpV2.get({
      url: ADD_WISH_ITEM + item.id,
      before: () => {},
      successed: () => {},
      failed: () => {},
      always: () => {},
    });
  };

  const Increment = () => {
    setCount(parseInt(count) + 1);
  };
  const Decrement = () => {
    if (count > 1) setCount(parseInt(count) - 1);
  };
  const qtyChangeHandler = ({ target }) => {
    setCount(target.value);
  };

  const smallSliderImgHandler = (item) => {
    setSelectedImageStatus(true);
    setSelectedImage(item);
    console.log("clicked==>", item);
  };
  useEffect(() => {
    if (findItem) {
      setVisibleSelectWish(true);
    } else {
      setVisibleSelectWish(false);
    }
  }, [findItem]);

  return (
    <div class="inner-product-details-flex">
      <div class="product-d-left-img">
        <div class="det-img-padding">
          {/* <img src="/contents/assets/images/popUp.jpg" alt="" /> */}
          {(findPrimaryImage === null || findPrimaryImage === undefined) && (
            <img src="/contents/assets/images/no_productimg.jpg" alt="img" />
          )}
          {findPrimaryImage !== null && !selectedImageStatus && (
            <img
              src={BASE_URL + findPrimaryImage?.originalImageURL}
              alt="img"
            />
          )}
          {selectedImageStatus && (
            <img src={BASE_URL + selectedImage?.originalImageURL} alt="img" />
          )}
        </div>
        <div class="product-gallery-hover">
          <div class="splide product-gallery-splide">
            <div class="splide__track">
              <SliderComponent
                Template={SmallSliderSingleItem}
                options={options}
                data={smallSliderImages}
                imageChangedHandler={smallSliderImgHandler}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="product-desc-right-content">
        <div class="catagory-overly-main-bg">
          <div class="catagory-product-overly">
            <h4>{product.displayName}</h4>
          </div>

          <div class="product-review-main">
            <div class="rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">
                5 stars
              </label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">
                4 stars
              </label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">
                3 stars
              </label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">
                2 stars
              </label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">
                1 star
              </label>
            </div>
            <a href>No Review</a>
          </div>

          <div class="basket-add">
            {product.discountedPrice > 0 ? (
              <span class="item__price item__price--now">
                ৳{product.currentPrice.toFixed(2)}
              </span>
            ) : (
              <span class="item__price item__price--now">
                ৳{product.currentPrice.toFixed(2)}
              </span>
            )}

            {product.discountedPrice > 0 ? (
              <span class="price product-price">
                <del class="cross_price">
                  ৳ {product.originalPrice.toFixed(2)}
                </del>
              </span>
            ) : (
              ""
            )}
          </div>
          <div class="pd-brand-ctg">
            <ul>
              <li>
                Category :
                <a href>
                  {product.categories.map((item) => item.name).join(", ")}
                </a>
              </li>
              <li>
                Brand :<a href>{product.brand?.name}</a>
              </li>
            </ul>
          </div>
          <div class="input-group product_qty">
            <h1>Quantity:</h1>
            <span class="input-group-btn">
              <button
                class="btn btn-white btn-minus"
                type="button"
                onClick={Decrement}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </span>
            <input
              type="text"
              class="form-control no-padding add-color text-center height-25"
              maxlength="3"
              value={count}
              onChange={qtyChangeHandler}
            />
            <span class="input-group-btn">
              <button
                class="btn btn-red btn-plus"
                type="button"
                onClick={Increment}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </span>
          </div>

          <div class="pro-add-wish-flex">
            {/* <span onClick={animateCardHandler}> */}
            <a href onClick={addToCartHandler.bind(this, product)}>
              <div class="btn_cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                <h5>Add to Cart</h5>
              </div>
            </a>
            {/* </span> */}
            {!visibleSelectWish && (
              <div
                class="wishlist-btn"
                onClick={addToWishHandler.bind(null, product)}
              >
                <a href>
                  <i class="fa fa-heart-o" aria-hidden="true"></i>Add to
                  wishlist
                </a>
              </div>
            )}
            {visibleSelectWish && (
              <div class="wishlist-btn">
                <a href>
                  <i class="fa fa-heart-o" aria-hidden="true"></i>Already Added
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <AnimatedProduct when={anime} onStop={stopAnime} uiRef={cardRef}/> */}
    </div>
  );
};

export default ProductDetailsItem;
