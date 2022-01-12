import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import appData from '../../../DataSource/appData';
import HeaderLinksitem from '../LowHeaderLinks/HeaderLinksitem';
import CategoryItem from './CategoryItem';

const Category = () => {
    const [count, setcount] = useState(0)
    const [isActive, setActive] = useState(false);
    const screenWidth=window.innerWidth;
    
    const increment=()=>{
        setcount(count+1)
    }
    const decrement=()=>{
        setcount(count-1)
    }
    const toggleClass = () => {
        setActive(prevState=> !prevState)
    };

    const clickedArrowHandler=({target})=>{
        const element=target.parentElement.nextSibling;
        console.log(element)
        if(count%2===0){
            element.classList+=' loaded-menu-display'
            increment();
        }
       
        else{
            element.classList.remove('loaded-menu-display')
            decrement();
        }
    }

    return (
        <div>
          
        <div className="nav-icon" onClick={toggleClass}><i className="fa fa-bars"></i></div>
        <div className={`main-menu ${isActive && 'off-canvas'}`} >
                            <a href class="nav-icon"><span onClick={toggleClass}>×</span></a>
                            <ul>
                                {
                                    appData.MainCategory.map((item,index)=>(
                                        <li class="dropdown">
                                   
                                        {
                                            (screenWidth>991)?
                                            <>
                                            <a href>{item.name} <i class="fa fa-angle-down arrow-class" aria-hidden="true"></i></a>
                                            <ul class="dropdownmenu mega-menu">
                                            {/* start inner mega menu shop */}
                                            <CategoryItem />
                                            </ul>
                                            </>
                                            :
                                            <>
                                            <a href >{item.name}<i class="fa fa-angle-down arrow-class" aria-hidden="true" onClick={clickedArrowHandler}></i></a>
                                            <ul class="dropdownmenu mega-menu">
                                            {/* start inner mega menu shop */}
                                            <CategoryItem toggleClass={toggleClass}/>
                                            </ul>
                                            </>
    
                                        }
                                       
                                    </li>
                                    ))
                                }

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