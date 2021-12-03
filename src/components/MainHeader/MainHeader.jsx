
import LowHeader from './LowHeader/LowHeader'
import TopHeader from './TopHeader/TopHeader'
import React, { useState, useEffect } from 'react';


export const MainHeader = () => {
    const [scroll, setScroll] = useState(false);
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
                </div>
            </div>
        </section>

    )
}
