import React, { useState } from 'react';
import HeaderLinksitem from '../LowHeaderLinks/HeaderLinksitem';
import CategoryItem from './CategoryItem';

const Category = () => {
    const [isActive, setActive] = useState();
    const toggleClass = () => {
        setActive(!isActive)
    };
    return (
        <div>
          
        <div className="nav-icon" onClick={toggleClass}><i className="fa fa-bars"></i></div>
        <div className={`main-menu ${isActive && 'off-canvas'}`} >
                            <a href="#" class="nav-icon"><span onClick={toggleClass}>×</span></a>
                            <ul>
                                <li class="dropdown">
                                    <a href="#">Shop Categories <i class="fa fa-angle-down arrow-class" aria-hidden="true"></i></a>
                                    <ul class="dropdownmenu mega-menu">
                                        {/* start inner mega menu shop */}
                                        <CategoryItem />
                                    </ul>
                                </li>
                                <HeaderLinksitem />

                            </ul>
                            {/* <!-- mobile menu hide  --> */}
                            <div class="mobile-height-area"></div>
                            <div class="mobile-menu-for-home">
                                <ul>
                                    <li>
                                        <a href="index.html"><i class="fa fa-home" aria-hidden="true"></i>Home</a>
                                    </li>
                                    <li>
                                        <a href="#demo-modal"><i class="fa fa-user" aria-hidden="true"></i>Login to my account</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i>Wishlist</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- mobile menu hide  --> */}
                        </div>
                    </div>
    )
}
export default Category;