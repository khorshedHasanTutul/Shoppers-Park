import { createContext } from "react";

const authContext = createContext({
    login: (user) => {},
    getloginValue:[],
    logout:()=>{},
    user:{id:'',name:'',email:'',phone:'',image:''},
    isLoggedIn: false,
    userOtpId:{id:''},
    registration:(user2)=>{},
    getRegistrationValue:[],
    wishList: (item) => {},
    getwishlist:[],
    wishRemovehandler:(item)=>{},
    cartContext:(item)=>{},
    getCartContext:[],
    removeItemCart:(item)=>{},
    clearCart:()=>{}
});

export default authContext;