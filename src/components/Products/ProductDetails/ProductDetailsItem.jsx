import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useState } from "react";
import { BrandData, callBack } from "../../../Service/AppService";
import appData from "../../DataSource/appData";
import { Link } from "react-router-dom";
import { WishAddedButton } from "../../../Service/CartContent";
import cartContext from "../../../Store/cart-context";
import { BASE_URL } from "../../../Service/httpService2";
import SliderComponent from "../../utilities/Slider/SliderComponent";
import SmallSliderSingleItem from "./SmallSliderSingleItem";

const ProductDetailsItem = ({ product, setalert }) => {
  console.log({ product });
  const cartCtx = useContext(cartContext);
  const [count, setCount] = useState(1);
  const [selectedImageStatus, setSelectedImageStatus] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const cartCtxModal = cartCtx.getCartModel;

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

  const addToCartHandler = (item, e) => {
    e.preventDefault();
    if (cartCtxModal.Items.find((itemInner) => itemInner.id === product.id)) {
      setalert();
    } else {
      cartCtx.singleProductAdd(item, count);
    }
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

  console.log({ product });
  return (
    <div class="inner-product-details-flex">
      <div class="product-d-left-img">
        <div class="det-img-padding">
          {/* <img src="/contents/assets/images/popUp.jpg" alt="" /> */}
          {findPrimaryImage === null && (
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
            <div class="wishlist-btn">
              <a href>
                <i class="fa fa-heart-o" aria-hidden="true"></i>Add to wishlist
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <AnimatedProduct when={anime} onStop={stopAnime} uiRef={cardRef}/> */}
    </div>
  );
};

export default ProductDetailsItem;
