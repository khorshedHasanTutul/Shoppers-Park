import React, { useEffect, useState } from "react";
import SubCategory from "./SubCategory";
import appData from "../../../DataSource/appData";
import { Link } from "react-router-dom";
import { callBack } from "../../../../Service/AppService";
import {
  getDropDownMainCategories,
  getMainCategories,
} from "../../../../Service/DataService";

const CategoryItem = ({ toggleClass, indexofCategory, mainCategoryIndex }) => {
  const dataGet = getDropDownMainCategories();
  console.log({ dataGet });

  const [count, setcount] = useState(0);
  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };
  const classRemover = () => {
    const classfinded = document.getElementsByClassName("loaded-menu-display");
    for (let i = 0; i < classfinded.length; i++) {
      classfinded[i].classList.remove("loaded-menu-display");
    }
  };

  const clickedArrowHandler = ({ target }) => {
    // classRemover();
    const element = target.parentElement.nextSibling;
    if (count % 2 === 0) {
      element.classList += " loaded-menu-display";
      increment();
    } else {
      element.classList.remove("loaded-menu-display");
      decrement();
    }
  };

  return (
    <>
      <li class="sd-nav__item sd-nav__item--level-2" onClick={toggleClass}>
        <Link title="New In" to="/newinShop">
          New In
        </Link>
      </li>

      {dataGet[mainCategoryIndex].map((categoryItem, index) => {
        return (
          <>
            <li class="sd-nav__item sd-nav__item--level-2">
              {window.innerWidth > 991 ? (
                <>
                  <Link
                    title={categoryItem[1]}
                    to={"/category/" + categoryItem[0]}
                  >
                    {categoryItem[1]}
                    <i
                      class="fa fa-angle-right sub-menu-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </Link>
                  <ul class="loaded mega-menu mega-menu2">
                    <li class="sd-nav__section-wrapper">
                      <Link to={"/category/" + categoryItem[0]}>
                        View all {categoryItem[1]}
                      </Link>
                      <SubCategory categoryItem={categoryItem[2]} />
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <Link
                    title={categoryItem[1]}
                    to={"/category/" + categoryItem[0]}
                  >
                    <span onClick={toggleClass}>{categoryItem[1]}</span>
                    <i
                      class="fa fa-angle-right sub-menu-arrow-right"
                      aria-hidden="true"
                      onClick={clickedArrowHandler}
                    ></i>
                  </Link>
                  <ul class="loaded mega-menu mega-menu2">
                    <li class="sd-nav__section-wrapper">
                      <Link to={"/category/" + categoryItem[0]}>
                        <span onClick={toggleClass}>
                          View all {categoryItem[1]}
                        </span>
                      </Link>
                      {/* <SubCategory  categoryItem={categoryItem}  toggleClass={toggleClass} indexnum={index}/> */}
                    </li>
                  </ul>
                </>
              )}
            </li>
          </>
        );
      })}
    </>
  );
};
export default CategoryItem;
