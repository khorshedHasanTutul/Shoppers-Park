import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  getCategories,
  getCategoryDataToObj,
  getMainCategories,
} from "../../../../Service/DataService";
import HeaderLinksitem from "../LowHeaderLinks/HeaderLinksitem";
import CategoryItem from "./CategoryItem";

const Category = () => {
  // this functionalist are doing for mobile responsive menu items
  const [count, setcount] = useState(0);
  const [isActive, setActive] = useState(false);
  const screenWidth = window.innerWidth;

  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };
  const classRemoverHandler = () => {
    const classfinded = document.getElementsByClassName("loaded-menu-display");
    for (let i = 0; i < classfinded.length; i++) {
      classfinded[i].classList.remove("loaded-menu-display");
    }
  };
  const toggleClass = () => {
    setActive((prevState) => !prevState);
    classRemoverHandler();
  };

  const clickedArrowHandler = ({ target }) => {
    //  classRemoverHandler()
    const element = target.parentElement.nextSibling;
    if (count % 2 === 0) {
      element.classList += " loaded-menu-display";
      increment();
    } else {
      element.classList.remove("loaded-menu-display");
      decrement();
    }
  };
  console.log({ getCategories });

  return (
    <div>
      <div className="nav-icon" onClick={toggleClass}>
        <i className="fa fa-bars"></i>
      </div>
      <div className={`main-menu ${isActive && "off-canvas"}`}>
        <a href class="nav-icon">
          <span onClick={toggleClass}>×</span>
        </a>
        <ul>
          {getCategories[0].map((catMap) => {
            const getObjFrom = getCategoryDataToObj(catMap);
            console.log({ getObjFrom });
            return (
              <li class="dropdown">
                {/* screen size bigger than 991px  allow this  */}
                {screenWidth > 991 ? (
                  <>
                    <a href>
                      {getObjFrom.name}
                      <i
                        class="fa fa-angle-down arrow-class"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <ul class="dropdownmenu mega-menu">
                      {/* start inner mega menu shop */}
                      <CategoryItem
                        mainCatId={getObjFrom.id}
                        // mainCategoryIndex={index}
                      />
                    </ul>
                  </>
                ) : (
                  <>
                    <a href onClick={clickedArrowHandler}>
                      <span> {getObjFrom.name}</span>
                      <i
                        class="fa fa-angle-down arrow-class"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <ul class="dropdownmenu mega-menu">
                      {/* start inner mega menu shop */}
                      <CategoryItem
                        toggleClass={toggleClass}
                        mainCatId={getObjFrom.id}
                      />
                    </ul>
                  </>
                )}
              </li>
            );
          })}

          <HeaderLinksitem toggleClass={toggleClass} />
        </ul>
        {/* <!-- mobile menu hide  --> */}
        <div class="mobile-height-area"></div>
        <div class="mobile-menu-for-home">
          <ul>
            <li>
              <Link to="/">
                <i class="fa fa-home" aria-hidden="true"></i>Home
              </Link>
            </li>
            <li>
              <a href="#demo-modal">
                <i class="fa fa-user" aria-hidden="true"></i>Login to my account
              </a>
            </li>
            <li>
              <Link to="/wishlist">
                <i class="fa fa-heart-o" aria-hidden="true"></i>Wishlist
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- mobile menu hide  --> */}
      </div>
    </div>
  );
};
export default Category;
