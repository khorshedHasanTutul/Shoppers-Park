import { Route, Redirect, useParams, useLocation } from "react-router-dom";
import OrderList from "../OrderList/OrderList";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useCallback, useEffect, useState } from "react";
import { httpV2 } from "../../../Service/httpService2";
import { GET_ORDERS } from "../../../lib/endpoints";
import { OrderStatus } from "../../utilities/dictionaries";
import Suspense from "../../utilities/Suspense/Suspense";
import { paramsUrlGenerator } from "../../../helpers/utilities";

const OrderHistoryBody = ({ status }) => {
  const [allOrders, setAllOrders] = useState({
    items: [],
    totalCount: 0,
    count: 0,
  });
  const [params, setParams] = useState({
    index: 1,
    IsDecending: false,
    Status: status,
    take: 5,
  });
  const [isLoading, setIsLoading] = useState(true);

  const pageChangeHandler = (page) => {
    setParams((prevState) => ({ ...prevState, index: page }));
  };

  const getAllOrdersHttp = useCallback((paramsUrl) => {
    httpV2.get({
      url: GET_ORDERS + paramsUrl,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        console.log(res);
        setIsLoading(false);
        setAllOrders({
          items: res.data.data,
          totalCount: res.data.count,
          count: res.data.data.length ?? 0,
        });
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {
        setIsLoading(false);
      },
    });
  }, []);

  // useEffect(() => {

  //   console.log(paramsUrlGenerator(params));

  // }, [params]);

  useEffect(() => {
    // setParams((prevState) => ({ ...prevState, Status: status }));
    const paramsUrl = paramsUrlGenerator({
      index: 1,
      IsDecending: false,
      Status: status,
      take: 5,
    });

    getAllOrdersHttp(paramsUrl);
  }, [getAllOrdersHttp, status]);

  return (
    <div>
      {!isLoading && (
        <>
          <Route path="/profile/order" exact>
            <Redirect to="/profile/order/all" />
          </Route>
          <Route path="/profile/order/all">
            <OrderList
              ordersArray={allOrders.items}
              getAllOrdersHttp={getAllOrdersHttp}
            />
          </Route>
          <Route path="/profile/order/pending">
            <OrderList ordersArray={allOrders.items} pageChangeHandler={pageChangeHandler} />
          </Route>
          <Route path="/profile/order/confirmed">
            <OrderList ordersArray={allOrders.items} />
          </Route>
          <Route path="/profile/order/processing">
            <OrderList ordersArray={allOrders.items} />
          </Route>
          <Route path="/profile/order/delivering">
            <OrderList ordersArray={allOrders.items} />
          </Route>
          <Route path="/profile/order/delivered">
            <OrderList ordersArray={allOrders.items} />
          </Route>
          <Route path="/profile/order/cancel">
            <OrderList ordersArray={allOrders.items} />
          </Route>
          <Route path="/profile/order/details/:id">
            <OrderDetails />
          </Route>
        </>
      )}
      {isLoading && <Suspense />}
    </div>
  );
};

export default OrderHistoryBody;
