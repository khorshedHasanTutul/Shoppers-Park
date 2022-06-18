import React from "react";
import { Link } from "react-router-dom";

const SubSubHeader = ({ categoryId, name }) => {
  return (
    <section class="breadcrumb-main-area">
      <div class="container">
        <nav aria-label="breadcrumb" class="breadcrumb-main">
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            {/* <li class="breadcrumb-item"><Link to={'/category/'+categoryId.categoryId}>{categoryId.categoryName}</Link></li>
                            <li class="breadcrumb-item"><Link to={'/subcategory/'+categoryId.categoryId+'/'+subCategoryId.subCategory_id}>{subCategoryId.subCategoryName}</Link></li> */}
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
