import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { callBack } from '../../../Service/AppService';
import { CartService } from '../../../Service/CartContent';
import PopUpModal from './PopUpModal';
import { endpoints } from '../../../lib/endpoints';
import { http } from '../../../Service/httpService';

const Payment = ({savedShippingInfo,savedShippingData}) => {
    const [cupon, setcupon] = useState('')
    const data=CartService.Get();
    const [OrderStatus, setproceedOrder] = useState(false)
    const [invalidCupon, setinvalidCupon] = useState(false)
    const [validCupon, setvalidCupon] = useState(false)
    const [cuponDiscount, setcuponDiscount] = useState(0)
    const [paymentChacked, setpaymentChacked] = useState(false)
    const paymentSelectedHandler=()=>{
        setpaymentChacked(true)
    }
    const proceedOrder=()=>{
        if(!paymentChacked){
            alert('Please select a payment method')
        }
        else
        setproceedOrder(true)
    }
    const cuponChangeHandler=({target})=>{
        setcupon(target.value)
    }
    const cuponSubmitButtonHandler=(e)=>{
        e.preventDefault();
        http.post({
            url:endpoints.postCuponCode,
            payload:{
                "ActivityId":"7ebae99c-251e-4369-9f32-2296d30de10b",
                "CouponCode":cupon,
                "OrderAmount":data.TotalAmount,
                "OrderDiscount":0
            },
            before:()=>{
                console.log('Program started');
            },
            successed:(data)=>{
                setvalidCupon(true)
                setcuponDiscount(data)
                setinvalidCupon(false);
                console.log(data)
            },
            failed:()=>{
                setinvalidCupon(true);
                setvalidCupon(false)
            },
            always:()=>{
                console.log('function end');
            }
        })
    }
    

    return (
        <div class="tab-content checkout-main-tab-content">
                                <div class="discount-cupon-payment">
                                    <label for="discount_code">Use Coupon</label>
                                    <form id="discount_codeSubmit">
                                        <div> <input type="text" id="discount_code" placeholder="Discount Code..." onChange={cuponChangeHandler} value={cupon}/>
                                        {
                                            (invalidCupon)&& <div class="h-12"><p class="t-bold t-secondary t-12">Invalid Coupon Code.</p></div>
                                        }
                                        {
                                             (validCupon)&&<div class="h-12"><p class="t-bold t-primary t-12">You Will Receive {cuponDiscount.toFixed(2)} BDT Discount.</p></div>
                                        }
                                        
                                        </div>
                                        <button type="submit" onClick={cuponSubmitButtonHandler}>Apply</button>
                                      </form>
                                      
                                </div>
                               
                                {/* <!-- product desc review information --> */}
                                <div class="product-payment-block-tab">
                                    <div class="payment-summary-table">
                                        <table class="table table-bordered table-responsive cart_summary">
                                            <tbody>
                                                <tr>
                                                    <td class="summary-details-p" colspan="3">Amount</td>
                                                    <td class="summary-details-p" colspan="2">{(data.TotalAmount).toFixed(2)}</td>
                                                </tr>
                                                
                                                <tr>
                                                    <td class="summary-details-p" colspan="3">Discount</td>
                                                    <td class="summary-details-p" colspan="2">0</td>
                                                </tr>
                                                <tr>
                                                    <td class="summary-details-p" colspan="3">Cupon Discount</td>
                                                    <td class="summary-details-p" colspan="2">{cuponDiscount.toFixed(2)}</td>
                                                </tr>
                                                <tr>
                                                    <td class="summary-details-p" colspan="3">Delivery Charge</td>
                                                    <td class="summary-details-p" colspan="2">{savedShippingInfo}</td>
                                                </tr>
                                                <tr>
                                                    <td class="summary-details-p" colspan="3"><strong>Total Amount </strong></td>
                                                    <td class="summary-details-p" colspan="2"><strong>{(data.TotalAmount+parseInt(savedShippingInfo)-parseInt(cuponDiscount)).toFixed(2)}</strong></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="summary-notice-address">
                                        <p class="OrderNotice" styles="margin-top: 1%;">*** Please pay first for outside Dhaka delivery</p>
                                        <p class="OrderNotice">*** Please pay the delivery charge first for inside Dhaka delivery (Cash on Delivery)</p>
                                        <p class="OrderNotice">*** LP agent will call you for delivery charge and reconfirm your order</p>
                                    </div>

                                    <div class="row-custom">
                                        <div class="order-inside-outside-main">
                                            <form>
                                                <div class="order-outside-inside-flex">
                                                    <p>
                                                        <input type="radio" id="test3" name="radio-group" onClick={paymentSelectedHandler}/>
                                                        <label for="test3">Cash on Delivery</label>
                                                      </p>
                                                      <p>
                                                        <input type="radio" id="test4" name="radio-group" onClick={paymentSelectedHandler}/>
                                                        <label for="test4">Onlie Payments</label>
                                                      </p>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="cart_navigation">
                                          <Link class="prev-btn" to="/"><i class="fa fa-angle-left check-ang-left" aria-hidden="true"></i> Continue shopping</Link>
                                          <a class="next-btn" onClick={callBack(proceedOrder)} href> Order Now <i class="fa fa-angle-right check-ang-right" aria-hidden="true"></i></a>
                                          {
                                              (OrderStatus)&& <PopUpModal savedShippingDataMobile={savedShippingData.Mobile}/>
                                          }
                                        </div>
                                    </div> 
                                </div>
                                {/* <!-- product desc review information --> */}
                            </div>
    );
};

export default Payment;