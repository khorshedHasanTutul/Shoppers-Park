import { createContext } from "react";

const authContext = createContext({
  login: (user) => {},
  getloginValue: [],
  logout: () => {},
  user: { id: "", name: "", email: "", phone: "", image: "" },
  isLoggedIn: false,
  userOtpId: { id: "" },
  registration: (user2) => {},
  getRegistrationValue: [],
});

export default authContext;
