import React, { useContext } from "react";
import cartContext from "../../../Store/cart-context";
import CartQuantityRow from "./CartQuantityRow";
import TableItemCategoryBrand from "./TableItemCategoryBrand";

const TableSingleItem = ({ data, setQtyAlert }) => {
  const cartCtx = useContext(cartContext);
  const cartCtxModel = cartCtx.getCartModel;

  const removeCartItemHandler = (item) => {
    cartCtx.singleItemRemover(item);
  };

  return (
    <>
      {cartCtxModel.Items.map((item) => (
        <tr>
          <td class="cart_product">
            <a href>
              <img src={item.image} alt="img" />
            </a>
          </td>
          <TableItemCategoryBrand item={item} />
          {item.discountPrice > 0 ? (
            <td class="price">
              <span>৳ {item.currentPrice.toFixed(2)}</span>
            </td>
          ) : (
            <td class="price">
              <span>৳ {item.currentPrice.toFixed(2)}</span>
            </td>
          )}
          <CartQuantityRow item={item} setQtyAlert={setQtyAlert} />
          {item.discountPrice > 0 ? (
            <td class="price">
              <span>৳ {(item.currentPrice * item.quantity).toFixed(2)}</span>
            </td>
          ) : (
            <td class="price">
              <span>৳ {(item.currentPrice * item.quantity).toFixed(2)}</span>
            </td>
          )}
          <td class="action">
            <a onClick={removeCartItemHandler.bind(null, item)} href>
              <span>
                {" "}
                <i class="fa fa-times" aria-hidden="true"></i>
              </span>
            </a>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableSingleItem;
