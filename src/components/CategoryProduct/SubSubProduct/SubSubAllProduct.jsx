import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { callBack } from "../../../Service/AppService";
import { cartAddedButton, WishAddedButton } from "../../../Service/CartContent";
import authContext from "../../../Store/auth-context";
import cartContext from "../../../Store/cart-context";
import AnimatedProduct from "../../AnimatedProduct/AnimatedProduct";
import appData from "../../DataSource/appData";
import ProductsInfoModel from "../../Products/ProductsInfoModel";

const SubSubAllProduct = ({ subCategoryId, products, setalert }) => {
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

  if (products.length === 0) {
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
        {products.map((item) => (
          <ProductsInfoModel item={item} setalert={setalert} from={"api"} />
        ))}
      </>
    );
};

export default SubSubAllProduct;
