import React, { useReducer } from "react";
import { addressType } from "../components/utilities/dictionaries";
import addressContext from "./address-context";

const initialState = () => {
  const initial = {
    division: [],
    district: [],
    area: [],
    activeType: { id: addressType.Home, type: "Home" },
    storeAddress: [],
  };
  return {
    ...initial,
  };
};

const reducer = (state, action) => {
  if (action.type === "STORE_DIVISION_ITEM") {
    let ctxDivision = state.division;
    ctxDivision = action.item;

    return {
      ...state,
      division: ctxDivision,
    };
  }

  if (action.type === "STORE_DISTRICT_ITEM") {
    let ctxDistrict = state.district;
    ctxDistrict = action.item;
    return {
      ...state,
      district: ctxDistrict,
    };
  }

  if (action.type === "STORE_AREA_ITEM") {
    let ctxArea = state.area;
    ctxArea = action.item;
    return {
      ...state,
      area: ctxArea,
    };
  }

  if (action.type === "SET_ACTIVE_TYPE") {
    let ctxActiveType = state.activeType;
    ctxActiveType = action.item;
    return {
      ...state,
      activeType: ctxActiveType,
    };
  }

  if (action.type === "STORE_ADDRESS") {
    let ctxAddress = [...state.storeAddress];
    const findIfExist = ctxAddress.find(
      (item) => item.type === action.item.type
    );
    if (!findIfExist) {
      ctxAddress.push(action.item);
    } else {
      const findIndex = ctxAddress.findIndex(
        (item) => item.type === action.item.type
      );
      ctxAddress.splice(findIndex, 1, action.item);
    }

    return {
      ...state,
      storeAddress: ctxAddress,
    };
  }
};

const AddressContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());

  const storeDivisionHandler = (item) => {
    dispatch({ type: "STORE_DIVISION_ITEM", item: item });
  };
  const storeDistrictHandler = (item) => {
    dispatch({ type: "STORE_DISTRICT_ITEM", item: item });
  };
  const storeAreaHandler = (item) => {
    dispatch({ type: "STORE_AREA_ITEM", item: item });
  };
  const activeTypeHandler = (item) => {
    dispatch({ type: "SET_ACTIVE_TYPE", item: item });
  };
  const storeAddressCtxHandler = (item) => {
    dispatch({ type: "STORE_ADDRESS", item: item });
  };

  const context = {
    storeDivision: storeDivisionHandler,
    getDivision: state.division,
    storeDistrict: storeDistrictHandler,
    getDistrict: state.district,
    storeArea: storeAreaHandler,
    getArea: state.area,
    setActiveType: activeTypeHandler,
    getActiveType: state.activeType,
    storeAddressCtx: storeAddressCtxHandler,
    getStoreAddressCtx: state.storeAddress,
  };

  return (
    <addressContext.Provider value={context}>
      {children}
    </addressContext.Provider>
  );
};

export default AddressContextProvider;
