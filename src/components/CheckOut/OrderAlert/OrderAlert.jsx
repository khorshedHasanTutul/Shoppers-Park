import React from "react";
import { Link } from "react-router-dom";

const OrderAlert = ({ orderData }) => {
  return (
    <>
      <span>Your order has been placed</span>
      <h4>Your order number is #{orderData?.orderNumber}</h4>
      {/* <aside>All deliveries are closed on Fridays!!!</aside> */}
      <div class="common-btn">
        <Link to={"/profile/order/all"}>View Order</Link>
      </div>
    </>
  );
};

export default OrderAlert;
