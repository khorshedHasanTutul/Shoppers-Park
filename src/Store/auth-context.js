import { createContext } from "react";

const authContext = createContext({
    login: (user) => {},
    getloginValue:[],
    logout:()=>{},
    user:{id:'',name:'',email:'',phone:''},
    isLoggedIn: false,
    userOtpId:{id:''},
    registration:(user2)=>{},
    wishList: (item) => {},
    getwishlist:[],
    wishRemovehandler:(item)=>{}
});

export default authContext;