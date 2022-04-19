import { createContext } from "react";

const cartContext = createContext({
  storeCartItems: (item) => {},
  getCartModel: {},
  clearCart: {},
  singleItemRemover: (item) => {},
  updateQuantity: (item, qty) => {},
  singleProductAdd: (item, qty) => {},
  updateEditableQuantity: (item, qty) => {},
});
export default cartContext;
