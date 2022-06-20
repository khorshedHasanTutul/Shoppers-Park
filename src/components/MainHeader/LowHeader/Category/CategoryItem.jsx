import React, { useState } from "react";
import SubCategory from "./SubCategory";
import { Link } from "react-router-dom";
import {
  getCategories,
  getCategoryDataToObj,
  getDropDownMainCategories,
} from "../../../../Service/DataService";

const CategoryItem = ({
  toggleClass,
  indexofCategory,
  mainCategoryIndex,
  mainCatId,
}) => {
  const [count, setcount] = useState(0);
  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };
  console.log({ getCategories });
  const findItems = getCategories[0][1].filter(
    (item, index) => item[2] === mainCatId
  );
  console.log({ findItems });
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

      {findItems.map((categoryItem, index) => {
        const getObjFrom = getCategoryDataToObj(categoryItem);
        return (
          <>
            <li class="sd-nav__item sd-nav__item--level-2">
              {window.innerWidth > 991 ? (
                <>
                  <Link
                    title={getObjFrom.name}
                    to={"/category/" + getObjFrom.id}
                  >
                    {getObjFrom.name}
                    <i
                      class="fa fa-angle-right sub-menu-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </Link>
                  <ul class="loaded mega-menu mega-menu2">
                    <li class="sd-nav__section-wrapper">
                      <Link to={"/category/" + getObjFrom.id}>
                        View all {getObjFrom.name}
                      </Link>
                      <SubCategory
                        mainCatId={getObjFrom.id}
                        categoryItem={categoryItem[2]}
                      />
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
                      <SubCategory
                        categoryItem={categoryItem[2]}
                        toggleClass={toggleClass}
                        indexnum={index}
                      />
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
