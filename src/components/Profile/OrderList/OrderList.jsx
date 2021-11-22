import OrderCard from "../OrderCard/OrderCard";

const OrderList = ({ orders }) => {
  if (orders.length === 0) {
    return (
      <div className="brick label info">
        <p className="t-14 t-bold t-center">No Order Found!</p>
      </div>
    );
  }

  return (
    <div>
      {orders.map((order) => (
        <OrderCard order={order} key={order.id} />
      ))}
    </div>
  );
};

export default OrderList;
