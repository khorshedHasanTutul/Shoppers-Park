import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderLinksitem from '../LowHeaderLinks/HeaderLinksitem';
import CategoryItem from './CategoryItem';

const Category = () => {
    const [count, setcount] = useState(0)
    const [isActive, setActive] = useState(false);
    const screenWidth=window.innerWidth;
    const increment=()=>{
        setcount(count+1)
    }

    const toggleClass = () => {
        setActive(prevState=> !prevState)
    };

    useEffect(() => {
        if(screenWidth<=991){
            var element=document.getElementsByClassName("dropdownmenu");
        if(count%2!==0){
            element[0].classList.remove("dropDown-hidden")
        }
        if(count%2===0){
            element[0].className+=" dropDown-hidden"
        }
        increment();
        }
        
    }, [])

    const clickedArrowHandler=()=>{
        increment();
        var element=document.getElementsByClassName("dropdownmenu");
        if(count%2!==0){
            element[0].classList.remove("dropDown-hidden")
        }
        if(count%2===0){
            element[0].className+=" dropDown-hidden"
        }
    }

    return (
        <div>
          
        <div className="nav-icon" onClick={toggleClass}><i className="fa fa-bars"></i></div>
        <div className={`main-menu ${isActive && 'off-canvas'}`} >
                            <a href class="nav-icon"><span onClick={toggleClass}>×</span></a>
                            <ul>
                                <li class="dropdown">
                                   
                                    {
                                        (screenWidth>991)?
                                        <>
                                        <a href>Shop Categories <i class="fa fa-angle-down arrow-class" aria-hidden="true"></i></a>
                                        <ul class="dropdownmenu mega-menu">
                                        {/* start inner mega menu shop */}
                                        <CategoryItem />
                                        </ul>
                                        </>
                                        :
                                        <>
                                        <a href>Shop Categories <i class="fa fa-angle-down arrow-class" aria-hidden="true" onClick={clickedArrowHandler}></i></a>
                                        <ul class="dropdownmenu mega-menu">
                                        {/* start inner mega menu shop */}
                                        <CategoryItem toggleClass={toggleClass}/>
                                        </ul>
                                        </>

                                    }
                                   
                                </li>
                                <HeaderLinksitem toggleClass={toggleClass}/>

                            </ul>
                            {/* <!-- mobile menu hide  --> */}
                            <div class="mobile-height-area"></div>
                            <div class="mobile-menu-for-home">
                                <ul>
                                    <li>
                                        <Link to="/"><i class="fa fa-home" aria-hidden="true"></i>Home</Link>
                                    </li>
                                    <li>
                                        <a href="#demo-modal"><i class="fa fa-user" aria-hidden="true"></i>Login to my account</a>
                                    </li>
                                    <li>
                                        <Link to="/wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i>Wishlist</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- mobile menu hide  --> */}
                        </div>
                    </div>
    )
}
export default Category;