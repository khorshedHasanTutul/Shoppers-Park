import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../Store/cart-context";
import MiniCartQuantityRow from "./MiniCartQuantityRow";

const CartTableItem = ({ data, setQtyAlert }) => {
  const ctxCart = useContext(cartContext);
  const getCartModal = ctxCart.getCartModel;

  const removeCartItemHandler = (item) => {
    ctxCart.singleItemRemover(item);
  };

  return (
    <>
      {getCartModal.Items.map((item, index) => (
        <tr class="close">
          <td class="card-title-heading">
            <Link to={"/product/" + item.id}>
              <span class="SearchProductName SearchFont">{item.displayName}</span>
            </Link>
            <br />
            {item.discountPrice > 0 ? (
              <del class="SearchDelPrice SearchDelPriceDel1">
                ৳ {item.orginalPrice}
              </del>
            ) : (
              ""
            )}
            {item.discountPrice > 0 ? (
              <strong class="SearchPrice SearchDelPriceDel2">
                ৳{item.currentPrice.toFixed(2)}
              </strong>
            ) : (
              <strong class="SearchPrice SearchDelPriceDel2">
                ৳{item.currentPrice.toFixed(2)}
              </strong>
            )}
          </td>
          <MiniCartQuantityRow item={item} setQtyAlert={setQtyAlert} />
          <td class="amount-for-popup">
            <span class="SearchFont SearchDelPrice">
              {item.discountPrice > 0 ? <aside>৳</aside> : <span>৳</span>}
              {item.discountPrice > 0 && (
                <del class="add-postion">
                  {(item.orginalPrice * item.quantity).toFixed(2)}
                </del>
              )}
              <br />
              <span class="SearchFont SearchPrice">
                {(item.currentPrice * item.quantity).toFixed(2)}
              </span>
            </span>
          </td>
          <td class="amount-inner-crose">
            <span onClick={removeCartItemHandler.bind(null, item)}>
              <a href>
                <i class="fa fa-times text-danger"></i>
              </a>
            </span>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CartTableItem;
