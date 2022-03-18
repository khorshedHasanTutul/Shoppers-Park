import React, { useContext } from "react";
import cartContext from "../../Store/cart-context";

const MiniCartQuantityRow = ({ item }) => {
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
