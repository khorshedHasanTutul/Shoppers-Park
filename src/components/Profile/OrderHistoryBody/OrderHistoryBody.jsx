import { Route, Redirect, useParams, useLocation } from "react-router-dom";
import OrderList from "../OrderList/OrderList";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useCallback, useEffect, useState } from "react";
import { httpV2 } from "../../../Service/httpService2";
import { GET_ORDERS } from "../../../lib/endpoints";
import { OrderStatus } from "../../utilities/dictionaries";
import Suspense from "../../utilities/Suspense/Suspense";
import { goTO, paramsUrlGenerator } from "../../../helpers/utilities";

const OrderHistoryBody = ({ status }) => {
  const [testIndex, setTestIndex] = useState(1);
  const [allOrders, setAllOrders] = useState({
    items: [],
    totalCount: 0,
    count: 0,
  });
  const [params, setParams] = useState({
    index: 1,
    IsDecending: false,
    Status: status,
    take: 10,
  });
  const [isLoading, setIsLoading] = useState(true);

  const pageChangeHandler = (page) => {
    setTestIndex(page);
    setParams((prevState) => ({ ...prevState, index: page }));
    goTO();
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

  useEffect(() => {
    const paramsUrl = paramsUrlGenerator({
      index: testIndex,
      IsDecending: false,
      Status: status,
      take: 10,
    });
    getAllOrdersHttp(paramsUrl);
  }, [getAllOrdersHttp, params, status, testIndex]);

  return (
    <div>
      {!isLoading && (
        <>
          <Route path="/profile/order" exact>
            <Redirect to="/profile/order/all" />
          </Route>
          <Route path="/profile/order/all">
            <OrderList
              allOrders={allOrders}
              params={params}
              getAllOrdersHttp={getAllOrdersHttp}
              pageChangeHandler={pageChangeHandler}
            />
          </Route>
          <Route path="/profile/order/pending">
            <OrderList
              allOrders={allOrders}
              params={params}
              getAllOrdersHttp={getAllOrdersHttp}
              pageChangeHandler={pageChangeHandler}
            />
          </Route>
          <Route path="/profile/order/confirmed">
            <OrderList
              allOrders={allOrders}
              params={params}
              getAllOrdersHttp={getAllOrdersHttp}
              pageChangeHandler={pageChangeHandler}
            />
          </Route>
          <Route path="/profile/order/processing">
            <OrderList
              allOrders={allOrders}
              params={params}
              getAllOrdersHttp={getAllOrdersHttp}
              pageChangeHandler={pageChangeHandler}
            />
          </Route>
          <Route path="/profile/order/delivering">
            <OrderList
              allOrders={allOrders}
              params={params}
              getAllOrdersHttp={getAllOrdersHttp}
              pageChangeHandler={pageChangeHandler}
            />
          </Route>
          <Route path="/profile/order/delivered">
            <OrderList
              allOrders={allOrders}
              params={params}
              getAllOrdersHttp={getAllOrdersHttp}
              pageChangeHandler={pageChangeHandler}
            />
          </Route>
          <Route path="/profile/order/cancel">
            <OrderList
              allOrders={allOrders}
              params={params}
              getAllOrdersHttp={getAllOrdersHttp}
              pageChangeHandler={pageChangeHandler}
            />
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
