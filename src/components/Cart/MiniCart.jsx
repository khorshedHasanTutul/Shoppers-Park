import React, { useContext } from "react";
import cartContext from "../../Store/cart-context";

const MiniCart = ({ openCart }) => {
  const getCartContext = useContext(cartContext);
  const getCartModal = getCartContext.getCartModel;

  return (
    <div class="cart-box view-pop" onClick={openCart}>
      <div class="cart-items text-center">
        <span class="cart-count">{getCartModal.TotalItems}</span>
        <span> Items</span>
      </div>
      <div class="cart-bag text-center">
        <img src="/contents/assets/images/footerlogo.png" alt="img" />
      </div>
      <div class="cart-amount">
        <span>৳ </span>
        <span class="cart-amount-span">
          {getCartModal.TotalAmmount.toFixed(2)}
        </span>
      </div>
    </div>
  );
};
export default MiniCart;
