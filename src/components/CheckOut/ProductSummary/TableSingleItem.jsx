import React, { useContext } from "react";
import cartContext from "../../../Store/cart-context";
import CartQuantityRow from "./CartQuantityRow";
import TableItemCategoryBrand from "./TableItemCategoryBrand";

const TableSingleItem = ({ data }) => {
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
          {item.Ds > 0 ? (
            <td class="price">
              <span>
                ৳ {(item.MRP - (item.MRP * item.Ds) / 100).toFixed(2)}
              </span>
            </td>
          ) : (
            <td class="price">
              <span>৳ {item.MRP.toFixed(2)}</span>
            </td>
          )}
          <CartQuantityRow item={item} />
          {item.Ds > 0 ? (
            <td class="price">
              <span>
                ৳{" "}
                {(
                  (item.MRP - (item.MRP * item.Ds) / 100) *
                  item.quantity
                ).toFixed(2)}
              </span>
            </td>
          ) : (
            <td class="price">
              <span>৳ {(item.MRP * item.quantity).toFixed(2)}</span>
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
