import { Route, Redirect } from "react-router-dom";
import OrderList from "../OrderList/OrderList";
import OrderDetails from "../OrderDetails/OrderDetails";
 
const ORDERS = [
  {
    id: 2255,
  },
];

const OrderHistoryBody = () => {
  return (
    <div>
    <Route path="/profile/order" exact>
      <Redirect to='/profile/order/all'/>
    </Route>
    <Route path="/profile/order/all">
      <OrderList orders={ORDERS} />
    </Route>
    <Route path="/profile/order/confirmed">
      <OrderList orders={ORDERS} />
    </Route>
    <Route path="/profile/order/processing">
      <OrderList orders={ORDERS} />
    </Route>
    <Route path="/profile/order/delivered">
      <OrderList orders={ORDERS} />
    </Route>
    <Route path="/profile/order/cancel">
      <OrderList orders={ORDERS} />
    </Route>
    <Route path="/profile/order/details/:orderId">
        <OrderDetails />
      </Route>
  </div>
  );
};

export default OrderHistoryBody;
