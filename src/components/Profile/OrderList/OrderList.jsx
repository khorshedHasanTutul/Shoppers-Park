import { useEffect, useState } from "react";
import { goTO } from "../../../helpers/utilities";
import Paginator from "../../Paginators/Paginators";
import PopUpAlert from "../../utilities/Alert/PopUpAlert";
import OrderCard from "../OrderCard/OrderCard";

const OrderList = ({
  getAllOrdersHttp,
  pageChangeHandler,
  allOrders,
  params,
}) => {
  if (allOrders === undefined || allOrders.items.length === 0) {
    return (
      <div className="brick label info">
        <p className="t-14 t-bold t-center">No Order Found!</p>
      </div>
    );
  }

  return (
    <>
      <div className="tabbed niiceeTabContent profile-tab">
        {allOrders.items.map((order) => (
          <OrderCard
            order={order}
            key={order.orderNumber}
            getAllOrdersHttp={getAllOrdersHttp}
            status={params.Status}
          />
        ))}

        <div className="paginator">
          <Paginator
            items={allOrders.totalCount}
            pageItems={params.take}
            startPage={params.index}
            onPageChange={pageChangeHandler}
          />
        </div>
      </div>
    </>
  );
};

export default OrderList;
