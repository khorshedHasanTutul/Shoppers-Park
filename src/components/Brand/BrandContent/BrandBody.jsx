import React, { useState } from 'react'
import { BrandData } from '../../../Service/AppService';
import Alert from './Alert';
import BrandAlphabetLinks from './BrandAlphabetLinks';
import BrandCategoryList from './BrandCategoryList';

const BrandBody = () => {
     const [foundBrand, setfoundBrand] = useState(false)
    function setfoundData(item){
        var value=item;
        item=item.target.text.toLowerCase();
        const foundData=BrandData.filter(item2=>item2.brand_name.trim().toLowerCase().charAt(0)==item);
        if(foundData.length<=0){
            setfoundBrand(true)
        }
        else{
          var element=document.getElementById('brandSort-'+value.target.text)
        //   var data= element.nextElementSibling;
        //   data.className+=' '
        //   data.className+='brand-click-padding';
          element.scrollIntoView(); 
        }
    }
    function closeModal(){
        setfoundBrand(false)
    }
    function classAdding(evt,item){
        setfoundData(item)
    }

    return (
        <section class="brand-a-z-area">
        <div class="container">
            <h1 class="az__title">A-Z of All Brands</h1>
            <div class="stickyAtoz-area">
                <BrandAlphabetLinks classAdding={classAdding}/>
                {
                    (foundBrand)&& <Alert closeModal={closeModal}/>
                }
            </div>
            <BrandCategoryList/>
        </div>
    </section>
    )
}
export default BrandBody;