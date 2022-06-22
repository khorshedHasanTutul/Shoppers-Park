import { Route, Redirect } from "react-router-dom";
import OrderList from "../OrderList/OrderList";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useCallback, useEffect, useState } from "react";
import { httpV2 } from "../../../Service/httpService2";
import { GET_ORDERS } from "../../../lib/endpoints";
import { OrderStatus } from "../../utilities/dictionaries";
import Suspense from "../../utilities/Suspense/Suspense";

const OrderHistoryBody = () => {
  const [ordersArray, setOrdersArray] = useState([]);
  const [confirmedOrders, setConfirmOrders] = useState([]);
  const [processingOrders, setProcessingOrders] = useState([]);
  const [delivaringOrders, setDelivaringdOrders] = useState([]);
  const [cancellingOrders, setCancellingdOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllOrdersHttp = useCallback(() => {
    httpV2.get({
      url: GET_ORDERS,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        console.log(res);
        setIsLoading(false);
        setOrdersArray(res.data.data);
        setConfirmOrders(
          res?.data?.data.filter(
            (item) => item?.orderStatus === OrderStatus.Confirmed
          )
        );
        setProcessingOrders(
          res?.data?.data.filter(
            (item) => item?.orderStatus === OrderStatus.Processing
          )
        );
        setDelivaringdOrders(
          res?.data?.data.filter(
            (item) => item?.orderStatus === OrderStatus.Delivering
          )
        );
        setCancellingdOrders(
          res?.data?.data.filter(
            (item) => item?.orderStatus === OrderStatus.Cancelled
          )
        );
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
    getAllOrdersHttp();
  }, [getAllOrdersHttp]);

  console.log({ ordersArray });
  return (
    <div>
      {!isLoading && (
        <>
          <Route path="/profile/order" exact>
            <Redirect to="/profile/order/all" />
          </Route>
          <Route path="/profile/order/all">
            <OrderList ordersArray={ordersArray} getAllOrdersHttp={getAllOrdersHttp} />
          </Route>
          <Route path="/profile/order/confirmed">
            <OrderList ordersArray={confirmedOrders} />
          </Route>
          <Route path="/profile/order/processing">
            <OrderList ordersArray={processingOrders} />
          </Route>
          <Route path="/profile/order/delivered">
            <OrderList ordersArray={delivaringOrders} />
          </Route>
          <Route path="/profile/order/cancel">
            <OrderList ordersArray={cancellingOrders} />
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
