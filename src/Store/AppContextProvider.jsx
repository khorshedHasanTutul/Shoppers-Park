import React, { useReducer } from "react";
import appContext from "./app-context";

const initialWishItem = {
  Items: [],
  
};

const initialSearchQuery = {
  searchQuery: "",
};
const initialOrder = {
  orderStatus: false,
};

const wishItemsReducer = (state, action) => {
  if (action.type === "STORE_WISH_ITEM") {
    const wishedItems = [...state.Items];
    wishedItems.push(action.item);
    return {
      ...state,
      Items: wishedItems,
    };
  }

  if (action.type === "REMOVE_WISH_ITEM") {
    const wishedItems = [...state.Items];
    const findItem = wishedItems.filter((item) => item !== action.item.id);
    return {
      ...state,
      Items: findItem,
    };
  }
};

const productAnimeReducer = (state, action) => {
  if (action.type === "STORE_SEARCH_QUERY") {
    return {
      searchQuery: action.searchQuery,
    };
  }
  return initialSearchQuery();
};

const orderReducer = (state, action) => {
  if (action.type === "STATUS_CHANGED_ORDER") {
    return {
      orderStatus: action.isChecked,
    };
  }
  return initialOrder;
};

const AppContextProvider = ({ children }) => {
  const [wishState, dispatchWish] = useReducer(
    wishItemsReducer,
    initialWishItem
  );

  const [searchQueryState, dispatchSearchQuery] = useReducer(
    productAnimeReducer,
    initialSearchQuery
  );

  const [orderStatusState, dispatchOrderStatus] = useReducer(
    orderReducer,
    initialOrder
  );

  const addToWishItemsHandler = (item) => {
    dispatchWish({ type: "STORE_WISH_ITEM", item: item });
  };
  const removeWishItemHandler = (item) => {
    dispatchWish({ type: "REMOVE_WISH_ITEM", item: item });
  };
  const storeSearchQuery = (text) => {
    dispatchSearchQuery({ type: "STORE_SEARCH_QUERY", searchQuery: text });
  };
  const orderStatusFunction = (isChecked) => {
    dispatchOrderStatus({ type: "STATUS_CHANGED_ORDER", isChecked: isChecked });
  };

  const searchQuery = {
    storeSearchQuery,
    searchQuery: searchQueryState.searchQuery,
  };

  const orderCreated = {
    orderStatus: orderStatusFunction,
    currentOrderStatus: orderStatusState.orderStatus,
  };

  const wishItems = {
    storewishItems: addToWishItemsHandler,
    getWishItems: wishState.Items,
    removewishItem: removeWishItemHandler,
  };

  const context = {
    searchQuery: { ...searchQuery },
    orderCreated: { ...orderCreated },
    wishList: { ...wishItems },
  };

  return <appContext.Provider value={context}>{children}</appContext.Provider>;
};

export default AppContextProvider;
