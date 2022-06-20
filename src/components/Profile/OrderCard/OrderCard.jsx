import { useHistory } from "react-router-dom";
import Card from "../../utilities/Card/Card";

const OrderCard = ({ order, key }) => {
  let created_at = new Date(order.createdAt);
  let history = useHistory();
  const viewOrderHandler = () => {
    history.push(`/profile/order/details/${order.id}`);
  };
  return (
    <Card>
      <a className="order-card mb-12 kill-anchore block" href>
        <div className="t-16 t-bold bg-background py-12 px-12 round-corner">
          <div> Order ID #{order.orderNumber}</div>
          <div className="cancel-Order">
            <div className="cancel-order-button">Cancel Order</div>
            <div className="cancel-order-button" onClick={viewOrderHandler}>
              View Order
            </div>
          </div>
        </div>
        <div className="p-12">
          <div className="flex justify-between mb-8">
            <div className="t-14 t-bold t-left">Date</div>
            <div className="t-14 t-right">
              {" "}
              {created_at.toLocaleDateString()}&nbsp;
              {created_at.toLocaleTimeString()}
            </div>
          </div>
          <div className="flex justify-between mb-8">
            <div className="t-14 t-bold t-left">Status</div>
            <div>
              <span className="chips brick primay">Pending</span>
            </div>
          </div>
          <div className="flex justify-between mb-8">
            <div className="t-14 t-bold t-left">Payable Amount</div>
            <div className="t-14 t-right">
              {order.payableAmount}
              <span>BDT</span>
            </div>
          </div>
          <div className="ordercard-shippingaddress">
            <h4 className="t-14 t-bold t-left mb-4">Shipping Address</h4>
            <aside style={{ fontWeight: "400" }}>
              {order?.address.province.name}-{order?.address.district.name}-
              {order?.address.upazila.name}-{order?.address.remarks}
            </aside>
            {/* <p className="t-14">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
              et sint eaque!
            </p> */}
          </div>
        </div>
      </a>
    </Card>
  );
};

export default OrderCard;
