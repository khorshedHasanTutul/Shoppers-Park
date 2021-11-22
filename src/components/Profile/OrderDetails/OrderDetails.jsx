import { useRef } from "react";
import { useParams } from "react-router";
import Button from "../../utilities/Button/Button";
import OrderInvoice from "../OrderInvoice/OrderInvoice";

const OrderDetails = () => {
  const { orderId } = useParams();
  const invoiceRef = useRef();

  const printInvoice = () => {
    var print_div = invoiceRef.current;
    var print_area = window.open();
    print_area.document.write(print_div.innerHTML);
    setTimeout(() => {
      print_area.document.close();
      print_area.focus();
      print_area.print();
      print_area.close();
    }, 500);
  };

  return (
    <div>
      <div className="brick label happiness mb-16">
        <p className="t-14">
          You saved <span className="t-bold">{"200BDT"}</span> In This Order
        </p>
      </div>
      <div className="brick default label mb-16">
        <h4 className="t-bold mb-8">Shipping Address</h4>
        <p>
          {
            "House 858, Road 12, Avenue 3, Mirpur DOHS, Dhaka, Mirpur 12, Dhaka City, Dhaka"
          }
        </p>
      </div>
      <div>
        <div className="flex justify-between align-center mb-8">
          <h4>Order Invoice</h4>
          <div>
            <Button
              type="button"
              text="Print Invoice"
              buttonClasses={["success brick fill round-corner"]}
              click={printInvoice}
            />
          </div>
        </div>
        <div className="order-invoice" ref={invoiceRef}>
          <OrderInvoice />
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
