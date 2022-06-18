import React from "react";
import ProductsInfoModel from "../../Products/ProductsInfoModel";

const SubSubAllProduct = ({ subCategoryId, products, setalert }) => {
  if (products.length === 0) {
    return (
      <div className="pro-not-found-img">
        <strong>
          {" "}
          <img src="/contents/assets/images/no-product-found.png" alt="" />{" "}
        </strong>
      </div>
    );
  } else
    return (
      <>
        {products.map((item) => (
          <ProductsInfoModel item={item} setalert={setalert} from={"api"} />
        ))}
      </>
    );
};

export default SubSubAllProduct;
