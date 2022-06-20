import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useParams } from "react-router";
import { humanizeShortDateTime } from "../../../helpers/utilities";
import { GET_ORDER_DETAILS } from "../../../lib/endpoints";
import { httpV2 } from "../../../Service/httpService2";
import authContext from "../../../Store/auth-context";
import Button from "../../utilities/Button/Button";
import Suspense from "../../utilities/Suspense/Suspense";
import OrderInvoice from "../OrderInvoice/OrderInvoice";

const OrderDetails = () => {
  let { id } = useParams();
  const authCtx = useContext(authContext);
  const [isLoading, setIsLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState();
  let getDate = new Date(orderDetails?.createdAt);
  const invoiceRef = useRef();

  console.log({ orderDetails });

  const printInvoiceHandler = () => {
    localStorage.setItem(
      "Invoice",
      JSON.stringify({
        orderNo: orderDetails?.orderNumber,
        userName: authCtx.user.name,
        phone: authCtx.user.phone,
        orderDate: `${getDate.toLocaleDateString()} ${getDate.toLocaleTimeString()}`,
        today: humanizeShortDateTime(`/Date(${new Date().getTime()})/`),
        products: orderDetails?.products,
        subTotal: orderDetails?.orderValue,
        payable: orderDetails?.payableAmount,
        couponDiscount: orderDetails?.coupon,
        deliveryChange: orderDetails?.shippingCharge,
        address: {
          contactName: orderDetails?.name,
          phone: orderDetails?.phone,
          email: orderDetails?.email,
          text: orderDetails?.remarks,
          upazila: orderDetails?.address.upazila.name,
          district: orderDetails?.address.district.name,
          division: orderDetails?.address.province.name,
        },
      })
    );
    window.open("/invoice.html", "_blank");
  };

  const getOrderDetailsHttp = useCallback((id) => {
    httpV2.get({
      url: GET_ORDER_DETAILS + id,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        setOrderDetails(res.data);
        setIsLoading(false);
      },
      failed: () => {
        setIsLoading(false);
      },
      always: () => {
        setIsLoading(false);
      },
    });
  }, []);

  useEffect(() => {
    getOrderDetailsHttp(id);
  }, [getOrderDetailsHttp, id]);

  return (
    <>
      {!isLoading && (
        <div>
          <div className="brick label happiness mb-16">
            <div class="Steps_steps__3SNbF Steps_wide__2JixU">
              <div className="line">
                <div className="filler"></div>
              </div>
              <div class="Steps_step__2Wic5">
                <p class="Steps_step__counter__2y6zu false Steps_active__z3pdg">
                  1
                </p>
                <div class="Steps_details__1CSho">
                  <h5>pending</h5>
                </div>
              </div>
              <div class="Steps_step__2Wic5">
                <p class="Steps_step__counter__2y6zu false false">2</p>
                <div class="Steps_details__1CSho">
                  <h5>confirmed</h5>
                </div>
              </div>
              <div class="Steps_step__2Wic5">
                <p class="Steps_step__counter__2y6zu false false">3</p>
                <div class="Steps_details__1CSho">
                  <h5>processing</h5>
                </div>
              </div>
              <div class="Steps_step__2Wic5">
                <p class="Steps_step__counter__2y6zu false false">4</p>
                <div class="Steps_details__1CSho">
                  <h5>delivering</h5>
                </div>
              </div>
              <div class="Steps_step__2Wic5">
                <p class="Steps_step__counter__2y6zu false false">5</p>
                <div class="Steps_details__1CSho">
                  <h5>delivered</h5>
                </div>
              </div>
              {/* <div class="Steps_line__1f205">
                                <div class="Steps_filler__30wuh">
                                  </div>
                                  </div> */}
            </div>
          </div>
          <div className="brick">
            <Fragment>
              <h3 class="sip-add" style={{ textAlign: "left" }}>
                Shipping Address
              </h3>
              <div
                class="shaping-address-saveing-row"
                style={{ marginBottom: "10px" }}
              >
                <div class="shapping-address-inner-content">
                  <div class="location-ad-icon">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div class="saving-address-content">
                    <small>{orderDetails?.address.name}</small>
                    <small>{orderDetails?.address.phone}</small>
                    <span>
                      <aside>
                        {orderDetails?.address.typeOfAddress === 0
                          ? "Home"
                          : orderDetails?.address.typeOfAddress === 1
                          ? "Office"
                          : "HomeTown"}
                      </aside>
                    </span>
                    <span>{orderDetails?.address.email}&nbsp;</span>
                    <span>
                      {orderDetails?.address.province.name}-
                      {orderDetails?.address.district.name}-
                      {orderDetails?.address.upazila.name}-
                      {orderDetails?.address.remarks}
                    </span>
                    &nbsp;
                  </div>
                </div>
              </div>
            </Fragment>
          </div>
          <div>
            <div className="flex justify-between align-center mb-8">
              <h4>Order Invoice</h4>
              <div>
                <Button
                  type="button"
                  text="Print Invoice"
                  buttonClasses={["success brick fill round-corner"]}
                  click={printInvoiceHandler}
                />
              </div>
            </div>
            <div className="order-invoice" ref={invoiceRef}>
              <OrderInvoice orderDetails={orderDetails} />
            </div>
          </div>
        </div>
      )}
      {isLoading && <Suspense />}
    </>
  );
};

export default OrderDetails;
