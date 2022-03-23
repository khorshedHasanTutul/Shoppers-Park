import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../Store/cart-context";
import MiniCartQuantityRow from "./MiniCartQuantityRow";

const CartTableItem = ({ data,setQtyAlert }) => {
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
            <Link to={"/product/" + item.Id}>
              <span class="SearchProductName SearchFont">{item.Nm}</span>
            </Link>
            <br />
            {item.Ds > 0 ? (
              <del class="SearchDelPrice SearchDelPriceDel1">৳ {item.MRP}</del>
            ) : (
              ""
            )}
            {item.Ds > 0 ? (
              <strong class="SearchPrice SearchDelPriceDel2">
                ৳{(item.MRP - (item.MRP * item.Ds) / 100).toFixed(2)}
              </strong>
            ) : (
              <strong class="SearchPrice SearchDelPriceDel2">
                ৳{item.MRP.toFixed(2)}
              </strong>
            )}
          </td>
          <MiniCartQuantityRow item={item} setQtyAlert={setQtyAlert} />
          <td class="amount-for-popup">
            <span class="SearchFont SearchDelPrice">
              {item.Ds > 0 ? <aside>৳</aside> : <span>৳</span>}
              {item.Ds > 0 && (
                <del class="add-postion">
                  {(item.MRP * item.quantity).toFixed(2)}
                </del>
              )}
              <br />
              <span class="SearchFont SearchPrice">
                {(
                  (item.MRP - (item.MRP * item.Ds) / 100) *
                  item.quantity
                ).toFixed(2)}
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
