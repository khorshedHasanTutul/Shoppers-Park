import React from 'react'
import { BrandData } from '../../../Service/AppService';
import BrandSingleItem from './BrandSingleItem';
import BrandSingleNumberItem from './BrandSingleNumberItem';

const BrandCategoryList = ({classAdding}) => {
    const letters=[],numbers=[];
    BrandData.forEach(element => {
        element=element.brand_name.toUpperCase().trim().charAt(0);
        if(element>='A' && element<='Z')
        letters.push(element);
    });
    const uniqueLetters = [...new Set(letters)];
    uniqueLetters.sort();


    return (
        <div class="brandcategorylistsub-main">
        <div class="brandsubcategories">
            { 
                uniqueLetters.map((number)=>(
                    <>
                    <a id={'brandSort-'+number} ></a>
                    <div class="brandLetterContainer">
                        <div class="brandLetter">{number}</div>
                            <ul class="brandLetterLinks">
                               <BrandSingleItem number={number} />
                            </ul>
                    </div>
                    </>
                ))   
            }
             <a id="brandSort-0-9"></a>

            <div class="brandLetterContainer">
                <div class="brandLetter">0-9</div>
                <ul class="brandLetterLinks">
                       <BrandSingleNumberItem />
                </ul>
            </div>  
  
        </div>
    </div>
    )
}
export default BrandCategoryList;