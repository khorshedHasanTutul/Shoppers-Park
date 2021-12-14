import { useReducer } from "react";
import authContext from "./auth-context";

const initialState = () => {
  
  const initial = {
    isLoggedIn: false,
    user: null,
    userOtpId: { id: "" },
    registration: { phone: "", password: "" },
    wishList: []
  };
  
  let user = localStorage.getItem("USER");
  let wishList =localStorage.getItem("WISHLIST");

  let storedUser = {};
  let isLoggedIn = false;
  if (user) {
    storedUser = JSON.parse(user);
    isLoggedIn = true;
  }

  let storedWishlist = [];
  if(wishList){
    storedWishlist = JSON.parse(wishList)
  }

  return {
    ...initial,
    user: storedUser,
    isLoggedIn: isLoggedIn,
    wishList: storedWishlist
  };
};

const reducer = (state, action) => {


  if (action.type === "USER_LOGIN") {
    localStorage.setItem("USER", JSON.stringify(action.user));

    return {
      ...state,
      user: action.user,
      isLoggedIn: true,
    };
  }
  if (action.type === "USER_LOGOUT") {
    localStorage.removeItem("USER");
    return {
      ...state,
      isLoggedIn: false,
      user: null,
    };
  }
  if (action.type === "USER_REGISTRATION") {
    return {
      ...state,
      user2:action.user2
    };
  }


  if(action.type==="WISHITEMS_ADDED") {
    
    const updatedWishlist = [...state.wishList];

    updatedWishlist.push(action.item.id);

    localStorage.setItem('WISHLIST', JSON.stringify(updatedWishlist));


    return {
      ...state,
      wishList: updatedWishlist
    }
  }

  if(action.type==="WISHITEMS_REMOVED"){
    let getWishItem=localStorage.getItem("WISHLIST");
    if(getWishItem){
      getWishItem=JSON.parse(getWishItem);
    }
    const findLocalindex=getWishItem.findIndex(item2=>item2.Id===action.item.id)
    const index = state.wishList.findIndex(item2 => item2.Id === action.item.id);
    state.wishList.splice(index, 1);
    getWishItem.slice(findLocalindex,1);
    localStorage.setItem('WISHLIST', JSON.stringify(getWishItem));
    return {
      ...state,
      wishList: state.wishList
    }
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());

  const loginHandler = (user) => {
    dispatch({ type: "USER_LOGIN", user: user });
  };
  const logoutHandler = () => {
    dispatch({ type: "USER_LOGOUT" });
  };
  const registrationHandler = (user2) => {
    dispatch({ type: "USER_REGISTRATION", user:user2 });
  };
  const wishlistItemAddHandler=(item)=>{
    console.log('dispatch',item)
    dispatch({type:"WISHITEMS_ADDED",item:item});
  };
  const wishRemovehandler=(item)=>{
    dispatch({type:"WISHITEMS_REMOVED",item:item});
  }

  const context = {
    login: loginHandler,
    logout: logoutHandler,
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    userOtpId: state.userOtpId,
    registration: registrationHandler,
    wishList: wishlistItemAddHandler,
    getwishlist:state.wishList,
    getloginValue:state.user,
    wishRemovehandler:wishRemovehandler,
  };

  return (
    <authContext.Provider value={context}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
