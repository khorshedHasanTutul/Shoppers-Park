import { createContext } from "react";

const authContext = createContext({
    login: (user) => {},
    logout:()=>{},
    user:{id:'',name:'',email:'',phone:''},
    isLoggedIn: false
});

export default authContext;