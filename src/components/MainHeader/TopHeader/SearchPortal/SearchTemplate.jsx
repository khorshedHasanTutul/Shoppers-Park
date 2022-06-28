import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../../../Store/cart-context";
import AnimatedProduct from "../../../AnimatedProduct/AnimatedProduct";
import appData from "../../../DataSource/appData";

const SearchTemplate = ({ item, closeSearch, lowerSearchvalue, setalert }) => {
  const cartCtx = useContext(cartContext);
  const cartCtxModal = cartCtx.getCartModel;

  const [anime, setAnime] = useState(false);
  const cardRef = useRef(null);
  const categoryData = appData.ShopCategory.find(
    (item2) => item2.categoryId === item.category_id
  );

  const addToCartHandler = (item, e) => {
    e.preventDefault();
    cartCtx.storeCartItems(item);
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

  const stopAnime = () => {
    setAnime(false);
  };

  const getHTML = () => {
    return {
      __html: item.Nm.toLowerCase().replace(
        lowerSearchvalue,
        `<span class="t-pink">${lowerSearchvalue}</span>`
      ),
    };
  };

  return (
    <div class="search-result__items" ref={cardRef}>
      {/* <!-- search result --> */}
      <div class="result-card">
        <div class="result-card__img">
          <img src={item.image} alt="product_image" />
        </div>
        <div class="result-card__details">
          <Link
            to={"/product/" + item.Id}
            class="result-card__details--name"
            onClick={closeSearch}
          >
            <span dangerouslySetInnerHTML={getHTML()}></span>
          </Link>
          <p class="result-card__details--price">
            <span>Price: </span>
            {item.Ds > 0 ? (
              <span class="current">
                ৳{(item.MRP - (item.MRP * item.Ds) / 100).toFixed(2)}
              </span>
            ) : (
              <span class="current">৳{item.MRP}</span>
            )}

            {item.Ds > 0 ? (
              <span class="original">
                <del class="cross_price">৳ {item.MRP}</del>
              </span>
            ) : (
              ""
            )}
          </p>
          <Link
            to={"/category/" + item.category_id}
            class="result-card__details--category"
            href
            onClick={closeSearch}
          >
            <span>Category: </span>
            <span class="current">{categoryData.categoryName}</span>
          </Link>
        </div>

        <div
          class="result-card__details--actions"
          onClick={addToCartHandler.bind(this, item)}
        >
          <button>
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <span onClick={animateCardHandler.bind(null, item)}>
              <strong> Add to Cart</strong>
            </span>
          </button>
        </div>
      </div>
      <AnimatedProduct when={anime} onStop={stopAnime} uiRef={cardRef} />
    </div>
  );
};

export default SearchTemplate;
