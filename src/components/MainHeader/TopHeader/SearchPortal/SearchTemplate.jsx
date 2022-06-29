import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { returnDataAsObject } from "../../../../Service/DataService";
import { BASE_URL } from "../../../../Service/httpService2";
import cartContext from "../../../../Store/cart-context";
import AnimatedProduct from "../../../AnimatedProduct/AnimatedProduct";

const SearchTemplate = ({ item, closeSearch, lowerSearchvalue, setalert }) => {
  const convertItem = returnDataAsObject(item);
  const cartCtx = useContext(cartContext);
  const cartCtxModal = cartCtx.getCartModel;

  const [anime, setAnime] = useState(false);
  const cardRef = useRef(null);

  const addToCartHandler = (item, e) => {
    e.preventDefault();
    cartCtx.storeCartItems(item);
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

  const stopAnime = () => {
    setAnime(false);
  };

  const getHTML = () => {
    return {
      __html: convertItem.name
        .toLowerCase()
        .replace(
          lowerSearchvalue,
          `<span class="t-pink">${lowerSearchvalue}</span>`
        ),
    };
  };

  return (
    <div class="search-result__items">
      {/* <!-- search result --> */}
      <div class="result-card" ref={cardRef}>
        <div class="result-card__img">
          <img src={BASE_URL + convertItem.image} alt="img" />
        </div>
        <div class="result-card__details">
          <Link
            to={"/product/" + convertItem.id}
            class="result-card__details--name"
            onClick={closeSearch}
          >
            <span dangerouslySetInnerHTML={getHTML()}></span>
          </Link>
          <p class="result-card__details--price">
            <span>Price: </span>
            {convertItem.discountPrice > 0 ? (
              <span class="current">৳{convertItem.currentPrice}</span>
            ) : (
              <span class="current">৳{convertItem.currentPrice}</span>
            )}

            {convertItem.discountPrice > 0 ? (
              <span class="original">
                <del class="cross_price">৳ {convertItem.currentPrice}</del>
              </span>
            ) : (
              ""
            )}
          </p>
          {/* <Link
            to={"/category/" + convertItem.}
            class="result-card__details--category"
            href
            onClick={closeSearch}
          >
            <span>Category: </span>
            <span class="current">{categoryData.categoryName}</span>
          </Link> */}
        </div>

        <div
          class="result-card__details--actions"
          onClick={addToCartHandler.bind(this, convertItem)}
        >
          <button>
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <span onClick={animateCardHandler.bind(null, convertItem)}>
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
