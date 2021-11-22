import style from "./OrderInvoiceStyle";
// import logo from "../../../images/sp.jpeg";


const OrderInvoice = () => {

  return (
    <div className='order-invoice-ea'>
        <style>
            {style}
        </style>
      <div className="page">
        <div className="custom-row-top">
          <div className="span4">
            <img src="/contents/assets/images/sp.jpeg" alt="img" className='no-print'/>
            <img src="/contents/assets/images/sp.jpeg" alt="img" className='print'/>
            <address>
              <h2>Shopper Perk Ltd</h2>
              Road 12, Avenue 3, Mirpur DOHS
              <br />
              Dhaka City, Dhaka
            </address>
          </div>
          <div className="span4 well">
            <table className="invoice-head">
              <tbody>
                <tr>
                  <td className="pull-right">
                    <strong>Name</strong>
                  </td>
                  <td>Jack Ma</td>
                </tr>
                <tr>
                  <td className="pull-right">
                    <strong>Order ID</strong>
                  </td>
                  <td>#41824</td>
                </tr>
                <tr>
                  <td className="pull-right">
                    <strong>Mobile</strong>
                  </td>
                  <td>8801745896321</td>
                </tr>
                <tr>
                  <td className="pull-right">
                    <strong>Order Date</strong>
                  </td>
                  <td>10-08-2013</td>
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
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Discount</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>SEO Bronze</td>
                  <td>www.swaransoft.com</td>
                  <td>8 Months</td>
                  <td>0</td>
                  <td>$1000</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>SEO Bronze</td>
                  <td>www.swaransoft.com</td>
                  <td>8 Months</td>
                  <td>0</td>
                  <td>$1000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sum-table-for-invoice">
            <table className="table table-bordered small-table-sum">
              <tbody>
                <tr>
                  <td>SubTotal</td>
                  <td className="SubTotal-tab">
                    ৳<span>1.51</span>
                  </td>
                </tr>
                <tr>
                  <td>Rounding Off</td>
                  <td className="SubTotal-tab">
                    <span>
                      -<span>৳</span>0.51
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Total order value</td>
                  <td className="SubTotal-tab">
                    <span>
                      <span>৳</span>1.00
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Delivery charge (Inside Dhaka)</td>
                  <td className="SubTotal-tab">
                    <span>
                      <span>৳</span>29
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Amount Payable</strong>
                  </td>
                  <td className="SubTotal-tab">
                    <strong>
                      <span>৳</span>30.00
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="footer-row">
          <div className="cask-rewarded">
            <span>0 Taka Cashback Rewarded For This Order</span>
            <p>* N.B: This cashback will be applicable at your next Order</p>
            <h5>Thank You!</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInvoice;
