import React from "react";
import { Link } from "react-router-dom";

export const SubsSubCategoryitem = ({
  subCategoryItem,
  categoryId,
  subCategoryId,
  toggleClass,
}) => {
  return (
    <ul class="mega-menu3">
      <li>
        <Link class="hover-special-view" to={"/"}>
          <span onClick={toggleClass}>View all {}</span>
        </Link>
      </li>
      {subCategoryItem.map((item) => (
        <>
          {window.innerWidth > 991 ? (
            <li>
              <Link to={"/productsSub/" + item[0]}>{item[1]}</Link>
            </li>
          ) : (
            <li>
              <Link to={"productsSub/" + item[0]}>
                <span onClick={toggleClass}>{item[1]}</span>
              </Link>
            </li>
          )}
        </>
      ))}
    </ul>
  );
};
export default SubsSubCategoryitem;
