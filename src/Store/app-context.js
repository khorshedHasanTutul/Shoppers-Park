import { createContext } from "react";

const appContext = createContext({
  searchQuery: {
    storeSearchQuery: (text = "") => {},
    searchQuery: "",
  },
  orderCreated: {
    orderStatus: (isChecked) => {},
    currentOrderStatus: false,
  },
  wishList: {
    storewishItems: (item) => {},
    getWishItems: [],
    removewishItem: (item) => {},
  },
});

export default appContext;
