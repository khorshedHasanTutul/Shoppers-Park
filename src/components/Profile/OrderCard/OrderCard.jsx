import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CANCLE_ORDER } from "../../../lib/endpoints";
import { BASE_URL, httpV2 } from "../../../Service/httpService2";
import PopAlert from "../../utilities/Alert/PopAlert";
import PopUpAlert from "../../utilities/Alert/PopUpAlert";
import Card from "../../utilities/Card/Card";
import Suspense from "../../utilities/Suspense/Suspense";
import ConfirmationAlert from "./ConfirmationAlert";

const OrderCard = ({ order, key, getAllOrdersHttp }) => {
  let created_at = new Date(order.createdAt);
  const [visibleCancleAlert, setVisibleCancleAlert] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const [goesWrong, setGoesWrong] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  console.log({ isAgree });
  let history = useHistory();
  const viewOrderHandler = () => {
    history.push(`/profile/order/details/${order.id}`);
  };
  const cancleVisibleAlert = () => {
    setVisibleCancleAlert((prevState) => !prevState);
  };
  const checkToPermitHandler = () => {
    setVisibleCancleAlert(true);
  };
  
  const cacleOrderHandler = useCallback((orderId) => {
    httpV2.patch({
      url: CANCLE_ORDER + orderId + "/00000000-0000-0000-0000-000000000000",
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        getAllOrdersHttp();
        setIsLoading(false);
      },
      failed: () => {
        setGoesWrong(true);
      },
      always: () => {},
    });
  }, []);

  useEffect(() => {
    if (isAgree) cacleOrderHandler(order.id);
  }, [cacleOrderHandler, isAgree, order.id]);

  return (
    <>
      <Card>
        <a className="order-card mb-12 kill-anchore block" href>
          <div className="t-16 t-bold bg-background py-12 px-12 round-corner">
            <div> Order ID #{order.orderNumber}</div>
            <div className="cancel-Order">
              <div
                className="cancel-order-button"
                onClick={checkToPermitHandler}
              >
                Cancel Order
              </div>
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
      {visibleCancleAlert && (
        <ConfirmationAlert
          content={`Are you sure to cancle order #${order.orderNumber}?`}
          closeModal={cancleVisibleAlert}
          setIsAgree={setIsAgree}
        />
      )}
      {isLoading && <Suspense />}
    </>
  );
};

export default OrderCard;
