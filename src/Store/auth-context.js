import { createContext } from "react";

const authContext = createContext({
    login: (user) => {},
    logout:()=>{},
    user:{id:'',name:'',email:'',phone:''},
    isLoggedIn: false,
    userOtpId:{id:''},
    registration:(user2)=>{},
});

export default authContext;