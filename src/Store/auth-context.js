import { createContext } from "react";

const authContext = createContext({
    login: (user) => {},
    logout:()=>{},
    isLoggedIn: false
});

export default authContext;