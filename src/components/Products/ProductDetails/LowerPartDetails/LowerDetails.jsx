import React, { useState } from 'react';
import { useParams } from 'react-router';
import DetailsInfo from './DetailsInfo';
import InformationDetails from './InformationDetails';
import ProductDetailsTabs from './ProductDetailsTabs';
import ReviewContent from './ReviewContent/ReviewContent';

const LowerDetails = () => {
    const {id}=useParams();
    const [tabsData, setstate] = useState(0)
    const itemOPen=(item,evt)=>{
        setstate(item)
    }
    return (
        <div class="product-desc-review-information-main">
                                    <div class="page-content">
                                        <div class="tabbed">
                                       
                                        <input type="radio" id="tab4" name="css-tabs" defaultChecked/>
                                        <input type="radio" id="tab5" name="css-tabs" />
                                        <input type="radio" id="tab6" name="css-tabs" />

                                            <ProductDetailsTabs itemOPen={itemOPen} tabsData={tabsData} />
                                        {
                                            (tabsData==0)&&  <DetailsInfo product_id={id}/>
                                        }
                                        {
                                            (tabsData==1)&&  <InformationDetails  product_id={id}/>
                                        }
                                        {
                                             (tabsData==2)&&  <ReviewContent />
                                        }
                                       
                                           
                                        </div>
                                    </div>
                                </div>
    );
};

export default LowerDetails;