import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { callBack } from "../../../../Service/AppService";
import { getDropDownCategories } from "../../../../Service/DataService";
import SubsSubCategoryitem from "./SubsSubCategoryitem";

const SubCategory = ({ categoryItem, toggleClass }) => {
  const getDropDown = getDropDownCategories(categoryItem);
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
      {categoryItem.map((subCategoryItem, index) => {
        console.log({ subCategoryItem });
        return (
          <li>
            {window.innerWidth > 991 ? (
              <Link to={`/subcategory/${subCategoryItem[0]}`}>
                {subCategoryItem[1]}
                <i
                  class="fa fa-angle-right sub-menu-arrow-mobile"
                  aria-hidden="true"
                ></i>
              </Link>
            ) : (
              <Link to={`/subcategory/${subCategoryItem[0]}`}>
                <span onClick={toggleClass}>{subCategoryItem[1]}</span>
                <i
                  class="fa fa-angle-right sub-menu-arrow-mobile"
                  aria-hidden="true"
                  onClick={clickedArrowHandler}
                ></i>
              </Link>
            )}

            <SubsSubCategoryitem
              categoryId={categoryItem}
              subCategoryId={subCategoryItem[1]}
              subCategoryItem={subCategoryItem[2]}
              toggleClass={toggleClass}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default SubCategory;
