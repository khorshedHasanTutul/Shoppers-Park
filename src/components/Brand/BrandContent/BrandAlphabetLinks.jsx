import React from 'react'
import { callBack } from '../../../Service/AppService';

const BrandAlphabetLinks = ({classAdding}) => {
    const BrandsLetter=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    return (
        <div class="atozlinks">
        <ul data-role="none" class="list-alphabets">
            {
                BrandsLetter.map(item=>(
                    <li id={'id-'+item} class="greyout">
                        <a class="scroll-down"  onClick={callBack(classAdding,item)}>{item}</a>
                    </li>
                ))
            }

            <li id="id-0-9" class="greyout">
                <a class="scroll-down" href="#brandSort-0-9">0-9</a>
            </li>
        </ul>
    </div>
    )
}
export default BrandAlphabetLinks;