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
        <div class="Steps_steps__3SNbF Steps_wide__2JixU">
          <div className="line">
            <div className="filler">
              
            </div>
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
