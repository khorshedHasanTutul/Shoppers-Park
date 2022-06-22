import React from "react";
import { Link } from "react-router-dom";
import {
  getCategories,
  getCategoryDataToObj,
} from "../../../Service/DataService";

const SubSubHeader = ({ categoryId, name }) => {
  
  const findFullPropObj = getCategories[3].find(
    (item) => item[0] === categoryId
  );
  const findParentObj = getCategoryDataToObj(
    getCategories[1].find((item) => item[0] === findFullPropObj[3])
  );
  const findSubparentObj = getCategoryDataToObj(
    getCategories[2].find((item) => item[0] === findFullPropObj[4])
  );

  return (
    <section class="breadcrumb-main-area">
      <div class="container">
        <nav aria-label="breadcrumb" class="breadcrumb-main">
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item">
              <Link to={"/category/" + findParentObj.id}>
                {findParentObj?.name}
              </Link>
            </li>
            <li class="breadcrumb-item">
              <Link to={"/subcategory/" + findSubparentObj.id}>
                {findSubparentObj?.name}
              </Link>
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

export default SubSubHeader;
