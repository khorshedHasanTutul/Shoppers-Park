import { Link } from "react-router-dom";
import Card from '../../utilities/Card/Card';

const OrderCard = ({ order }) => {
  return (
    <Card>
      <Link
        className="order-card mb-12 kill-anchore block"
        to={`/profile/order/details/${order.id}`}
      >
        <div className="t-16 t-bold bg-background py-12 px-12 round-corner">
         <div> Order ID #2566</div>
         <div className="cancel-Order">
           <div className="cancel-order-button">
           Cancel Order
            </div> 
            </div>
        </div>
        <div className="p-12">
          <div className="flex justify-between mb-8">
            <div className="t-14 t-bold t-left">Date</div>
            <div className="t-14 t-right">12 October'22 02:30 PM</div>
          </div>
          <div className="flex justify-between mb-8">
            <div className="t-14 t-bold t-left">Status</div>
            <div>
              <span className="chips brick primay">Awaiting For Feedback</span>
            </div>
          </div>
          <div className="flex justify-between mb-8">
            <div className="t-14 t-bold t-left">Payable Amount</div>
            <div className="t-14 t-right">
              59<span>BDT</span>
            </div>
          </div>
          <div>
            <h4 className="t-14 t-bold t-left mb-4">Shipping Address</h4>
            <p className="t-14">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
              et sint eaque!
            </p>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default OrderCard;
