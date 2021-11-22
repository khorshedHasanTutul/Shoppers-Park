import React from 'react'
import { Link } from 'react-router-dom';
import { BrandData } from '../../../Service/AppService';

const BrandSingleItem = ({number}) => {
    const data=BrandData.filter(func);
    function func(item){
        item=item.brand_name.toUpperCase().trim().charAt(0);
        return item===number
    }
    return (
            <>
            {
                (data.length>0)?
                data.map((item)=>(
                    <li class={'brandcat brand-'+number}>
                    <div class="brandcatContainer">
                        <Link to={'/brands/'+item.brand_id} name="a" data-category="sortAllBrands health">
                            <span>{item.brand_name}</span>
                        </Link>
                    </div>
                </li>
                )):''
            }
            </>

    )
}
export default BrandSingleItem;