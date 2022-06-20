import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { callBack } from "../../../../Service/AppService";
import {
  getCategories,
  getCategoryDataToObj,
  getDropDownCategories,
} from "../../../../Service/DataService";
import SubsSubCategoryitem from "./SubsSubCategoryitem";

const SubCategory = ({ categoryItem, toggleClass, mainCatId }) => {
  // const getDropDown = getDropDownCategories(categoryItem);
  const findItems = getCategories[0][2].filter(
    (item, index) => item[3] === mainCatId
  );
  console.log({ findItems }, "hi");
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
    <ul>
      {findItems.map((subCategoryItem, index) => {
        const getObjFrom = getCategoryDataToObj(subCategoryItem);
        return (
          <li>
            {window.innerWidth > 991 ? (
              <Link to={`/subcategory/${getObjFrom.id}`}>
                {getObjFrom.name}
                <i
                  class="fa fa-angle-right sub-menu-arrow-mobile"
                  aria-hidden="true"
                ></i>
              </Link>
            ) : (
              <Link to={`/subcategory/${getObjFrom.id}`}>
                <span onClick={toggleClass}>{getObjFrom.name}</span>
                <i
                  class="fa fa-angle-right sub-menu-arrow-mobile"
                  aria-hidden="true"
                  onClick={clickedArrowHandler}
                ></i>
              </Link>
            )}

            <SubsSubCategoryitem
              categoryId={subCategoryItem[0]}
              subCategoryName={subCategoryItem[1]}
              subCategoryItem={subCategoryItem[2]}
              toggleClass={toggleClass}
              mainCatId={getObjFrom.id}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default SubCategory;
