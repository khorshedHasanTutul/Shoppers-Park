import { useReducer } from "react";
import authContext from "./auth-context";

const initialState = () => {
  const initial = {
    isLoggedIn: false,
    user: null,
    userOtpId: { id: "" },
    registration: { phone: "", password: "" },
  };

  let user = localStorage.getItem("USERV1.1");
  let storedUser = {};
  let isLoggedIn = false;
  if (user) {
    storedUser = JSON.parse(user);
    isLoggedIn = true;
  }

  return {
    ...initial,
    user: storedUser,
    isLoggedIn: isLoggedIn,
  };
};

const reducer = (state, action) => {
  if (action.type === "USER_LOGIN") {
    console.log(action.user);
    localStorage.setItem("USERV1.1", JSON.stringify(action.user));
    return {
      ...state,
      user: action.user,
      isLoggedIn: true,
    };
  }
  if (action.type === "USER_LOGOUT") {
    localStorage.removeItem("USERV1.1");
    return {
      ...state,
      isLoggedIn: false,
      user: null,
    };
  }
  if (action.type === "USER_REGISTRATION") {
    return {
      ...state,
      registration: action.user,
    };
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
    dispatch({ type: "USER_REGISTRATION", user: user2 });
  };

  const context = {
    login: loginHandler,
    logout: logoutHandler,
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    userOtpId: state.userOtpId,
    registration: registrationHandler,
    getRegistrationValue: state.registration,
    getloginValue: state.user,
  };

  return (
    <authContext.Provider value={context}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
