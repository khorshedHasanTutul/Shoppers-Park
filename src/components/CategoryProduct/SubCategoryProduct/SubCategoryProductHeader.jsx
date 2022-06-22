import React from "react";
import { Link } from "react-router-dom";
import {
  getCategories,
  getCategoryDataToObj,
} from "../../../Service/DataService";

const SubCategoryProductHeader = ({ subCategoryId, name }) => {
  //
  const findCatDetails = getCategories[2].find(
    (item) => item[0] === subCategoryId
  );
  const findParentCategory = getCategories[1].find(
    (item) => item[0] === findCatDetails[3]
  );
  const getObjFrom = getCategoryDataToObj(findParentCategory);

  return (
    <section class="breadcrumb-main-area">
      <div class="container">
        <nav aria-label="breadcrumb" class="breadcrumb-main">
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item">
              <Link to={"/category/" + getObjFrom.id}>{getObjFrom.name}</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {name}
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default SubCategoryProductHeader;
