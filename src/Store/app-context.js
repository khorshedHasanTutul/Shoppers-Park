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
  singleTask: {
    storeNotification: (count) => {},
    getTotalNotifiaction: "",
  },
});

export default appContext;
