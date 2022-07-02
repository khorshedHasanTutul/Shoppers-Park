import React, { useContext, useState } from "react";
import cartContext from "../../Store/cart-context";

const MiniCart = ({ openCart }) => {
  const getCartContext = useContext(cartContext);
  const getCartModal = getCartContext.getCartModel;

  const displayAmount = (amount = 0) =>
    amount % 1 !== 0.0 ? amount.toFixed(2) : parseInt(amount, 10);

  console.log(getCartModal.TotalAmmount.toFixed(2));

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
          {displayAmount(getCartModal.TotalAmmount)}
        </span>
      </div>
    </div>
  );
};
export default MiniCart;
