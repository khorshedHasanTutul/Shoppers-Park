import { useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { paramsUrlGenerator } from "../../../helpers/utilities";
import { CANCLE_ORDER } from "../../../lib/endpoints";
import { BASE_URL, httpV2 } from "../../../Service/httpService2";
import Card from "../../utilities/Card/Card";
import Suspense from "../../utilities/Suspense/Suspense";
import ConfirmationAlert from "./ConfirmationAlert";

const OrderCard = ({ order, key, getAllOrdersHttp, status }) => {
  let history = useHistory();
  let { pathname } = useLocation();
  let created_at = new Date(order.createdAt);
  const [visibleCancleAlert, setVisibleCancleAlert] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const [goesWrong, setGoesWrong] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
        const paramsUrl = paramsUrlGenerator({
          index: 1,
          IsDecending: false,
          Status: status,
          take: 10,
        });
        getAllOrdersHttp(paramsUrl);
        // getAllOrdersHttp();
        setIsLoading(false);
        history.push("/profile/order/all");
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

  console.log({ order });

  return (
    <>
      <Card>
        <a className="order-card mb-12 kill-anchore block" href>
          <div className="t-16 t-bold bg-background py-12 px-12 round-corner">
            <div> Order ID #{order.orderNumber}</div>
            <div className="cancel-Order">
              {pathname !== "/profile/order/cancel" && (
                <div
                  className="cancel-order-button"
                  onClick={checkToPermitHandler}
                >
                  Cancel Order
                </div>
              )}

              <div className="cancel-order-button" onClick={viewOrderHandler}>
                View Order
              </div>
            </div>
          </div>
          <div className="p-12" onClick={viewOrderHandler}>
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
                <span className="chips brick primay">{order.status}</span>
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
