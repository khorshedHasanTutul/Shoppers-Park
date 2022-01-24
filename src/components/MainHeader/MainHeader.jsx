
import LowHeader from './LowHeader/LowHeader'
import TopHeader from './TopHeader/TopHeader'
import React, { useState, useEffect } from 'react';
import PopUpAlert from '../utilities/Alert/PopUpAlert';


export const MainHeader = () => {
    const [scroll, setScroll] = useState(false);
    const [alertPopUp, setalertPopUp] = useState(true);
    const closeModal=()=>{
        setalertPopUp(prevState=>!prevState)
    }
    useEffect( () => (
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 40)
        })
    ),[]);
    return (
        <section className={`header-area ${scroll && 'toggle_ones'}`}>
            <div class="container">
                <div class="header-main-area">
                    <TopHeader/>
                    <LowHeader />
                    {
                        (alertPopUp)&& <PopUpAlert content={
                        "Dear Shoppers, Great news!! Were delighted to announch the launch of our new website www.shoppersperk.com Our aim is to provide our shoppers with an easier and safer way of shopping. Just visit our website, browse and select what you like... we’ll deliver to you. As a thank you for shopping on our new website we will give you a 5% discount on all items.Stay home, stay safe, shop on www.shoppersperk.com"} closeModal={closeModal} addingStyle={true}/>
                    }
                    
                </div>
            </div>
        </section>

    )
}
