import React from "react";
import { Link } from "react-router-dom";
import {
  getCategories,
  getCategoryDataToObj,
} from "../../../../Service/DataService";

export const SubsSubCategoryitem = ({
  subCategoryItem,
  categoryId,
  subCategoryName,
  toggleClass,
  mainCatId,
}) => {
  const findItems = getCategories[0][3].filter(
    (item, index) => item[4] === mainCatId
  );
  console.log({ findItems }, "hi");
  return (
    <ul class="mega-menu3">
      <li>
        <Link class="hover-special-view" to={"/subcategory/" + categoryId}>
          <span
            onClick={toggleClass}
            style={{ borderBottom: "1px solid #df2c8a" }}
          >
            View all {subCategoryName}
          </span>
        </Link>
      </li>
      {findItems.map((item) => {
        /* screen size bigger than 991px  allow this  */
        const getObjFrom = getCategoryDataToObj(item);
        return (
          <>
            {window.innerWidth > 991 ? (
              <li>
                <Link to={"/productsSub/" + getObjFrom.id}>
                  {getObjFrom.name}
                </Link>
              </li>
            ) : (
              <li>
                <Link to={"productsSub/" + getObjFrom.id}>
                  <span onClick={toggleClass}>{getObjFrom.name}</span>
                </Link>
              </li>
            )}
          </>
        );
      })}
    </ul>
  );
};
export default SubsSubCategoryitem;
