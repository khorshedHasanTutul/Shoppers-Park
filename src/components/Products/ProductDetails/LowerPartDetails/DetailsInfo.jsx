import React from "react";
import { productdetailsAllData } from "../../../../Service/AppService";

const DetailsInfo = ({ description }) => {
  return (
    <div class="tab-content detalis-page-tab-content">
      {/* <!-- product desc review information --> */}
      <div class="product-d-tab-content">
        <h4>Product Specification</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DetailsInfo;
