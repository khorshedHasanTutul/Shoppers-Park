import { useReducer } from "react";
import authContext from "./auth-context";

const initialState = () => {
  const initial = {
    isLoggedIn: false,
    user: null,
    userOtpId: { id: "" },
    registration: { phone: "", password: "" },
  };
  
  let user = localStorage.getItem("USER");

  if (user) {
    user = JSON.parse(user);

    return {
      ...initial,
      isLoggedIn: true,
      user: user,
    };
  }

  return initial;
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

  const context = {
    login: loginHandler,
    logout: logoutHandler,
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    userOtpId: state.userOtpId,
    registration: registrationHandler,
  };

  return (
    <authContext.Provider value={context}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
