import style from "./OrderInvoiceStyle";
// import logo from "../../../images/sp.jpeg";

const OrderInvoice = ({ orderDetails }) => {
  let getDate = new Date(orderDetails?.createdAt);
  return (
    <div className="order-invoice-ea">
      <style>{style}</style>
      <div className="page">
        <div className="custom-row-top">
          <div className="span4">
            <img
              src="/contents/assets/images/sp.jpeg"
              alt="img"
              className="no-print"
            />
            <img
              src="/contents/assets/images/sp.jpeg"
              alt="img"
              className="print"
            />
            <address>
              <h2>Shopper Perk Ltd</h2>
              Genetic Plaza, Shop -222, Dhaka
              <br />
              {/* Dhaka City, Dhaka */}
            </address>
          </div>
          <div className="span4 well">
            <table className="invoice-head">
              <tbody>
                <tr>
                  <td className="pull-right">
                    <strong>Name</strong>
                  </td>
                  <td>{orderDetails?.address.name}</td>
                </tr>
                <tr>
                  <td className="pull-right">
                    <strong>Order ID</strong>
                  </td>
                  <td>#{orderDetails?.orderNumber}</td>
                </tr>
                <tr>
                  <td className="pull-right">
                    <strong>Mobile</strong>
                  </td>
                  <td>{orderDetails?.address.phone}</td>
                </tr>
                <tr>
                  <td className="pull-right">
                    <strong>Order Date</strong>
                  </td>
                  <td>{getDate.toLocaleDateString()}</td>
                </tr>
                <tr>
                  <td className="pull-right">
                    <strong>Invoice Date</strong>
                  </td>
                  <td>20-08-2013</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="invoice">
          <h2>Invoice</h2>
        </div>
        <div className="custom-table-row">
          <div className="span12 well invoice-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>sl</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Discount</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                {orderDetails?.products.map((item, index) => (
                  <tr>
                    <td>0{index + 1}</td>
                    <td>{item.displayName}</td>
                    <td>{item.currentPrice}</td>
                    <td>{item.quantity}</td>
                    <td>{item.discount}</td>
                    <td>{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="sum-table-for-invoice">
            <table className="table table-bordered small-table-sum">
              <tbody>
                <tr>
                  <td>SubTotal</td>
                  <td className="SubTotal-tab">
                    <span>{orderDetails?.orderValue}</span>
                  </td>
                </tr>

                <tr>
                  <td>Coupon Discount </td>
                  <td className="SubTotal-tab">
                    <span>{orderDetails?.coupon}</span>
                  </td>
                </tr>
                <tr>
                  <td>Total order value</td>
                  <td className="SubTotal-tab">
                    <span>{orderDetails?.orderValue}</span>
                  </td>
                </tr>
                <tr>
                  <td>Delivery charge</td>
                  <td className="SubTotal-tab">
                    <span>{orderDetails?.shippingCharge}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Amount Payable</strong>
                  </td>
                  <td className="SubTotal-tab">
                    <strong>{orderDetails?.payableAmount}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="footer-row">
          <div className="cask-rewarded">
            <span>
              {orderDetails?.cashback} Taka Cashback Rewarded For This Order
            </span>
            <p>* N.B: This cashback will be applicable at your next Order</p>
            <h5>Thank You!</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInvoice;
