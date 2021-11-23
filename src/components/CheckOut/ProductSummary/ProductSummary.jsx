import React, { useState } from 'react';
import DelivaryStatus from './DelivaryStatus';
import TableSingleItem from './TableSingleItem';

const ProductSummary = ({data}) => {
     const [ProductSummary, setProductSummary] = useState(0)
     const statusFunction=(index)=>{
        (index==0)? setProductSummary(50):setProductSummary(120)
     }
    return (
        <div class="tab-content checkout-main-tab-content">
        {/* <!-- product desc review information --> */}
        <div class="cart-tb-tab-content">
            <div class="order-detail-content">
                <table class="table table-bordered table-responsive cart_summary">
                    <thead>
                        <tr>
                            <th class="cart_product">Product</th>
                            <th>Description</th>
                            <th>Unit price</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th class="action"></th>
                        </tr>
                    </thead>
                    <tbody>
                     <TableSingleItem data={data.Items}/>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="2" rowspan="2"></td>
                            <td colspan="3">Total Amount (tax incl.)</td>
                            <td colspan="2">৳ <span>{data.TotalAmount}</span></td>
                        </tr>
                        <tr>
                            <td colspan="3">Delivery Charge</td>
                            <td colspan="2">৳ <span>{ProductSummary}</span></td>
                        </tr>
                        <tr>
                            <td colspan="5"><strong>Total</strong></td>
                            <td colspan="3">
                                <strong>৳ <span>{data.TotalAmount + ProductSummary}</span></strong>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <div class="row-custom">
                    <div class="order-inside-outside-main">
                        <form>
                            <div class="order-outside-inside-flex">
                               <DelivaryStatus statusFunction={statusFunction}/>
                            </div>
                        </form>
                    </div>
                    <div class="cart_navigation">
                      <a class="prev-btn" href="/"><i class="fa fa-angle-left check-ang-left" aria-hidden="true"></i> Continue shopping</a>
                      <a class="next-btn" > Proceed to checkout <i class="fa fa-angle-right check-ang-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
            
        </div>
        {/* <!-- product desc review information --> */}
    </div>
    );
};

export default ProductSummary;