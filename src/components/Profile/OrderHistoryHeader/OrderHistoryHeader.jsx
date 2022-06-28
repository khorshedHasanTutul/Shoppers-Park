import { NavLink, useHistory } from "react-router-dom";
import {  ORDER_STATUS } from "../../utilities/dictionaries";
import "./OrderHistoryHeader.css";
const OrderHistoryHeader = ({ setStatus }) => {
  let history = useHistory();
  // useEffect(() => {
  //   window.onload(history.push("/profile/order/all"));
  // }, []);
  return (
    <div className="r-tabs">
      <NavLink
        className="kill-anchore block r-tabs__link"
        to="/profile/order/all"
        onClick={() => {
          setStatus(ORDER_STATUS.ALL);
        }}
      >
        All Orders
      </NavLink>
      <NavLink
        className="kill-anchore block r-tabs__link"
        to="/profile/order/pending"
        onClick={() => {
          setStatus(ORDER_STATUS.PENDING);
        }}
      >
        Pending Orders
      </NavLink>
      <NavLink
        className="kill-anchore block r-tabs__link"
        to="/profile/order/confirmed"
        onClick={() => {
          setStatus(ORDER_STATUS.CONFIRMED);
        }}
      >
        Confirmed Orders
      </NavLink>
      <NavLink
        className="kill-anchore block r-tabs__link"
        to="/profile/order/processing"
        onClick={() => {
          setStatus(ORDER_STATUS.PROCESSING);
        }}
      >
        Processing
      </NavLink>
      <NavLink
        className="kill-anchore block r-tabs__link"
        to="/profile/order/delivering"
        onClick={() => {
          setStatus(ORDER_STATUS.DELIVERING);
        }}
      >
        Delivering
      </NavLink>
      <NavLink
        className="kill-anchore block r-tabs__link"
        to="/profile/order/delivered"
        onClick={() => {
          setStatus(ORDER_STATUS.DELIVERED);
        }}
      >
        Delivered
      </NavLink>
      <NavLink
        className="kill-anchore block r-tabs__link"
        to="/profile/order/cancel"
        onClick={() => {
          setStatus(ORDER_STATUS.CANCELLED);
        }}
      >
        Canceled
      </NavLink>
    </div>
  );
};

export default OrderHistoryHeader;
