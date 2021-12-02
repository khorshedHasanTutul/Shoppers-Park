import React, { useState } from 'react';
import { CartService } from '../../Service/CartContent';
import AddressForm from '../AddressForm/AddressForm';
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
    const proceedFunction=(ProductSummary,)=>{
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
          });
        setShippingCost(ProductSummary)
        if(ProductSummary>0)
        settabinfo(1)
        else
        alert('Please Select a Shipping Zone')
    }
    const proceedOrder=(evt)=>{
        console.log(['evt=>',evt])
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
          });
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
                            <input type="radio" id="tab7" name="css-tabs" defaultChecked />
                            <input type="radio" id="tab8" name="css-tabs" />
                            <input type="radio" id="tab9" name="css-tabs" />

                            <CheckOutTabs tabInformation={tabInformation}/>
                        
                            <span class="card-shiping-item"> Your shopping cart contains:
                             <small>{data.length} Product</small>
                             </span>
                            {
                                (tabinfo===0)&& <ProductSummary data={data} proceedFunction={proceedFunction}/>
                            }
                           
                           {
                               (tabinfo===1)&&
                                //   <Address proceedOrder={proceedOrder}/>
                               <AddressForm proceedOrder={proceedOrder}  />
                            
                           }
                            {/* AddressComponentLoaded */}
                           {
                               (tabinfo===2)&& <Payment ShippingCost={ShippingCost}/>
                           }
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