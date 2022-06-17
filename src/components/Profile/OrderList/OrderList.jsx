import OrderCard from "../OrderCard/OrderCard";

const OrderList = ({ ordersArray }) => {
  if (ordersArray === undefined || ordersArray.length === 0) {
    return (
      <div className="brick label info">
        <p className="t-14 t-bold t-center">No Order Found!</p>
      </div>
    );
  }

  return (
    <div className="tabbed niiceeTabContent profile-tab">
      {ordersArray.map((order) => (
        <OrderCard order={order} key={order.orderNumber} />
      ))}
    </div>
  );
};

export default OrderList;
