import { useEffect, useState } from "react";
import { goTO } from "../../../helpers/utilities";
import Paginator from "../../Paginators/Paginators";
import PopUpAlert from "../../utilities/Alert/PopUpAlert";
import OrderCard from "../OrderCard/OrderCard";

const OrderList = ({ ordersArray, getAllOrdersHttp }) => {
  const pageSize = 5;
  const [pagedOrders, setPagedOrders] = useState([]);

  const pageChangeHandler = (page) => {
    setPagedOrders(ordersArray.slice((page - 1) * pageSize, page * pageSize));
    goTO();
  };

  useEffect(() => {
    setPagedOrders(ordersArray.slice(0, pageSize));
  }, [ordersArray]);

  if (ordersArray === undefined || ordersArray.length === 0) {
    return (
      <div className="brick label info">
        <p className="t-14 t-bold t-center">No Order Found!</p>
      </div>
    );
  }

  return (
    <>
      <div className="tabbed niiceeTabContent profile-tab">
        {pagedOrders.map((order) => (
          <OrderCard
            order={order}
            key={order.orderNumber}
            getAllOrdersHttp={getAllOrdersHttp}
          />
        ))}

        <div className="paginator">
          <Paginator
            items={ordersArray.length}
            pageItems={pageSize}
            onPageChange={pageChangeHandler}
          />
        </div>
      </div>
    </>
  );
};

export default OrderList;
