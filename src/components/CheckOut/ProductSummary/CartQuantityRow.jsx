import React, { useContext, useState } from "react";
import cartContext from "../../../Store/cart-context";

export const CartQuantityRow = ({ item,setQtyAlert }) => {
  const cartCtx = useContext(cartContext);
  const [qty, setQty] = useState("")

  const qtyDecHandler = (findItem, e) => {
    e.preventDefault();
    let quantity = parseInt(findItem.quantity) - 1;
    cartCtx.updateQuantity(findItem, quantity);
  };

  const qtyIncHandler = (findItem, e) => {
    e.preventDefault();
    let quantity = parseInt(findItem.quantity) + 1;
    cartCtx.updateQuantity(findItem, quantity);
  };

  const qtyChangeHandler=({target})=>{
    if(target.value===""){
      setQty(0)
    }
    else{
      setQty(target.value);
    }
    cartCtx.updateEditableQuantity(item,target.value);
  }
  const blurHandler=()=>{
    if(qty===0){
      setQtyAlert(true)
      cartCtx.updateEditableQuantity(item,1)
      setQty(1)
    }
    
  }



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
          onChange={qtyChangeHandler}
          onBlur={blurHandler}
          
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
