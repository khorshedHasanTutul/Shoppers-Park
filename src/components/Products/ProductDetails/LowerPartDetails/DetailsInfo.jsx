import React from "react";
import { productdetailsAllData } from "../../../../Service/AppService";

const DetailsInfo = ({ description }) => {
  console.log({description})
  const createInnerHtml = () => {
    return {
      __html: description,
    };
  };
  return (
    <div class="tab-content detalis-page-tab-content" style={{marginTop:0}}>
      {/* <!-- product desc review information --> */}
      <div class="product-d-tab-content">
        <h4>Product Specification</h4>
        <p dangerouslySetInnerHTML={createInnerHtml()}></p>
      </div>
    </div>
  );
};

export default DetailsInfo;
