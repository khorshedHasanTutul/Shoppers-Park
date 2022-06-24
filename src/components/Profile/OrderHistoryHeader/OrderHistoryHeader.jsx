import { NavLink } from "react-router-dom";
import { OrderStatus } from "../../utilities/dictionaries";
import "./OrderHistoryHeader.css";
const OrderHistoryHeader = ({ setStatus }) => {
  return (
    <div className="r-tabs">
      <NavLink
        className="kill-anchore block r-tabs__link"
        to="/profile/order/all"
        onClick={() => {
          setStatus(OrderStatus.All);
        }}
      >
        All Orders
      </NavLink>
      <NavLink
        className="kill-anchore block r-tabs__link"
        to="/profile/order/pending"
        onClick={() => {
          setStatus(OrderStatus.Pending);
        }}
      >
        Pending Orders
      </NavLink>
      <NavLink
        className="kill-anchore block r-tabs__link"
        to="/profile/order/confirmed"
        onClick={() => {
          setStatus(OrderStatus.Confirmed);
        }}
      >
        Confirmed Orders
      </NavLink>
      <NavLink
        className="kill-anchore block r-tabs__link"
        to="/profile/order/processing"
        onClick={() => {
          setStatus(OrderStatus.Processing);
        }}
      >
        Processing
      </NavLink>
      <NavLink
        className="kill-anchore block r-tabs__link"
        to="/profile/order/delivering"
        onClick={() => {
          setStatus(OrderStatus.Delivering);
        }}
      >
        Delivering
      </NavLink>
      <NavLink
        className="kill-anchore block r-tabs__link"
        to="/profile/order/delivered"
        onClick={() => {
          setStatus(OrderStatus.Delivered);
        }}
      >
        Delivered
      </NavLink>
      <NavLink
        className="kill-anchore block r-tabs__link"
        to="/profile/order/cancel"
        onClick={() => {
          setStatus(OrderStatus.Cancelled);
        }}
      >
        Canceled
      </NavLink>
    </div>
  );
};

export default OrderHistoryHeader;
