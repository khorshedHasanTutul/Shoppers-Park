import OrderHistoryHeader from "../OrderHistoryHeader/OrderHistoryHeader";
import OrderHistoryBody from "../OrderHistoryBody/OrderHistoryBody";
import { useState } from "react";

const OrderHistory = () => {
  const [status, setStatus] = useState(6);

  return (
    <div>
      <OrderHistoryHeader setStatus={setStatus} />
      <OrderHistoryBody status={status} />
    </div>
  );
};

export default OrderHistory;
