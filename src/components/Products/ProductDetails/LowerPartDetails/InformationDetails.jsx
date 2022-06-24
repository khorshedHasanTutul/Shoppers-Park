import React from "react";

const InformationDetails = ({ product }) => {
  console.log({ product });
  return (
    <div class="tab-content detalis-page-tab-content" style={{marginTop:0}}>
      {/* <!-- product desc review information --> */}
      <div class="product-i-tab-content">
        <table class="table table-bordered">
          {/* Name */}
          <tbody>
            <tr>
              <td width="200">Name</td>
              <td>{product?.name}</td>
            </tr>
            <tr>
              <td>Packsize</td>
              <td>{product?.packSize}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>{product?.categories.map((item) => item?.name).join(', ')}</td>
            </tr>
            {/* <tr>
              <td>Strength</td>
              <td>500</td>
            </tr> */}
            <tr>
              <td>Unit</td>
              <td>{product?.unit?.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <!-- product desc review information  --> */}
    </div>
  );
};

export default InformationDetails;
