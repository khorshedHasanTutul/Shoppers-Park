import OrderHistoryHeader from "../OrderHistoryHeader/OrderHistoryHeader";
import OrderHistoryBody from "../OrderHistoryBody/OrderHistoryBody";
import { useState } from "react";
import { ORDER_STATUS } from "../../utilities/dictionaries";

const OrderHistory = () => {
  const [status, setStatus] = useState(ORDER_STATUS.ALL);
  console.log(window.performance.getEntriesByType("navigation"));
  return (
    <div>
      <OrderHistoryHeader setStatus={setStatus} />
      <OrderHistoryBody status={status} />
    </div>
  );
};

export default OrderHistory;
