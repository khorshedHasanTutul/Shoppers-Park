import React, { useContext } from "react";
import cartContext from "../../../Store/cart-context";

export const CartQuantityRow = ({ item }) => {
  const cartCtx = useContext(cartContext);

  const qtyDecHandler = (findItem, e) => {
    e.preventDefault();
    let quantity = findItem.quantity - 1;
    cartCtx.updateQuantity(findItem, quantity);
  };

  const qtyIncHandler = (findItem, e) => {
    e.preventDefault();
    let quantity = findItem.quantity + 1;
    cartCtx.updateQuantity(findItem, quantity);
  };

  return (
    <td class="qty">
      <div class="input-group product_qty">
        <span class="input-group-btn" onClick={qtyDecHandler.bind(this, item)}>
          <button class="btn btn-white btn-minus" type="button">
            <i class="fa fa-minus" aria-hidden="true"></i>
          </button>
        </span>

        <input
          type="text"
          class="form-control no-padding add-color text-center height-25"
          maxlength="5"
          value={item.quantity}
          
        />

        <span class="input-group-btn" onClick={qtyIncHandler.bind(this, item)}>
          <button class="btn btn-red btn-plus" type="button">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </span>

      </div>
    </td>
  );
};
export default CartQuantityRow;
