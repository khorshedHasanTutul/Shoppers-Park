import React, { useContext, useState } from "react";
import cartContext from "../../Store/cart-context";

const MiniCartQuantityRow = ({ item, setQtyAlert }) => {
  const cartCtx = useContext(cartContext);
  const [qty, setQty] = useState("");

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

  const qtyChangeHandler = ({ target }) => {
    if (target.value === "") {
      setQty(0);
    } else {
      setQty(target.value);
    }
    cartCtx.updateEditableQuantity(item, target.value);
  };
  const blurHandler = () => {
    if (qty === 0) {
      setQtyAlert(true);
      cartCtx.updateEditableQuantity(item, 1);
      setQty(1);
    }
  };

  return (
    <td class="card-plus-minuse">
      <div class="attributes input-group bootstrap-touchspin">
        <div class="qty-holder">
          <span>
            <a
              href
              onClick={qtyDecHandler.bind(this, item)}
              class="qty-dec-btn"
              title="Dec"
            >
              -
            </a>
          </span>
          <input
            type="text"
            name="product_qty"
            id="product_qty"
            class="qty-input"
            value={item.quantity}
            onChange={qtyChangeHandler}
            onBlur={blurHandler}
          />
          <span>
            <a
              onClick={qtyIncHandler.bind(this, item)}
              class="qty-inc-btn"
              title="Inc"
              href
            >
              +
            </a>
          </span>
        </div>
      </div>
    </td>
  );
};
export default MiniCartQuantityRow;
