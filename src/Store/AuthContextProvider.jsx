import { useReducer } from "react";
import authContext from "./auth-context";

const initialState = () => {
  let user = localStorage.getItem("USER");

  if (user) {
    user = JSON.parse(user);

    return {
      isLoggedIn: true,
      user: user,
    };
  }

  return {
    isLoggedIn: false,
    user: null,
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
  if(action.type==="USER_LOGOUT"){
      localStorage.removeItem('USER');
      return {
          ...state,
          isLoggedIn:false,
          user:null
      }
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());

  const loginHandler = (user) => {
    dispatch({ type: "USER_LOGIN", user: user });
  };
  const logoutHandler=()=>{
      dispatch({type:"USER_LOGOUT"})
  }
  const context = {
    login: loginHandler,
    logout:logoutHandler,
    isLoggedIn: state.isLoggedIn,
  };


  return (
    <authContext.Provider value={context}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
