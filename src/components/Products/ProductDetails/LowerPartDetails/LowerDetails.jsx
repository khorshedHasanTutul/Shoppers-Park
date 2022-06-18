import React, { useState } from "react";
import DetailsInfo from "./DetailsInfo";
import InformationDetails from "./InformationDetails";
import ProductDetailsTabs from "./ProductDetailsTabs";
import ReviewContent from "./ReviewContent/ReviewContent";

const LowerDetails = ({ product }) => {
  const [tabsData, setstate] = useState(0);
  const itemOPen = (index, item, evt) => {
    var element = document.getElementsByClassName("tab");
    for (let i = 0; i < element.length; i++) {
      element[i].children[0].classList.remove("product-details-activeTab");
    }
    evt.target.className += " product-details-activeTab";
    setstate(index);
  };

  return (
    <div class="product-desc-review-information-main">
      <div class="page-content">
        <div class="tabbed">
          <input type="radio" id="tab4" name="css-tabs" />
          <input type="radio" id="tab5" name="css-tabs" />
          <input type="radio" id="tab6" name="css-tabs" />

          <ProductDetailsTabs itemOPen={itemOPen} tabsData={tabsData} />
          {tabsData === 0 && <DetailsInfo description={product.description} />}
          {tabsData === 1 && <InformationDetails product={product}/>}
          {tabsData === 2 && <ReviewContent />}
        </div>
      </div>
    </div>
  );
};

export default LowerDetails;
