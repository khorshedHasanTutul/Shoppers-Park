import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartService } from '../../Service/CartContent';
import AddressForm from '../AddressForm/AddressForm';
import Address from './Address/Address';
import CheckOutHeader from './CheckOutHeader';
import CheckOutTabs from './CheckOutTabs';
import Payment from './Payment/Payment';
import ProductSummary from './ProductSummary/ProductSummary';

const PaymentParent = () => {
    const data=CartService.Get();
    const [tabinfo, settabinfo] = useState(0)
    const [ShippingCost, setShippingCost] = useState()
    
    const tabInformation=(item)=>{
        settabinfo(item)
    }
    const proceedFunction=(ProductSummary)=>{
        setShippingCost(ProductSummary)
        if(ProductSummary>0)
        settabinfo(1)
        else
        alert('Please Select a Shipping Zone')
    }
    const proceedOrder=()=>{
        settabinfo(2)
    }
    return (
        <>
            <CheckOutHeader />
            <section class="checkout-main-area">
             <div class="container">
                 <div class="checkout-main-tab-area">
                    {/* <!-- checkout-main-tab --> */}
                    <div class="checkout-main-tab-information-main">
                      <div class="page-content">
                        <div class="tabbed">
                            {/* <input type="radio" id="tab7" name="css-tabs" checked="" />
                            <input type="radio" id="tab8" name="css-tabs" />
                            <input type="radio" id="tab9" name="css-tabs" /> */}

                            <CheckOutTabs tabInformation={tabInformation}/>
                        
                            <span class="card-shiping-item"> Your shopping cart contains:
                             <small>{data.length} Product</small>
                             </span>
                            {
                                (tabinfo==0)&& <ProductSummary data={data} proceedFunction={proceedFunction}/>
                            }
                           
                           {
                               (tabinfo==1)&& <Address proceedOrder={proceedOrder}/>
                           }
                           {
                               (tabinfo==2)&& <Payment ShippingCost={ShippingCost}/>
                           }
                            {/* AddressComponentLoaded */}

                           {/* PaymentComponentLoaded */}

                        </div>
                     </div>
                    </div>
                   {/* <!-- checkout-main-tab --> */}
                 </div>
             </div>
         </section>  
        </>
    );
};

export default PaymentParent;