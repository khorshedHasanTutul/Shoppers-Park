import React from 'react';
import { Link } from 'react-router-dom';
import { callBack } from '../../Service/AppService';
import { ButoonInc, RemoveItem } from '../../Service/CartContent';

const CartTableItem = ({data}) => {

    return (
         <>
        {
           
            data.Items.map(item=>(
                 <tr class="close">
            <td class="card-title-heading">
                <Link to={'/product/'+item.Id}>
                    <span class="SearchProductName SearchFont">{item.Nm}</span>
                </Link>
                <br />
                {
                    (item.Ds>0)?<del class="SearchDelPrice SearchDelPriceDel1">৳ {item.Ds}</del>:''
                }
                <strong class="SearchPrice SearchDelPriceDel2">৳ {item.MRP}</strong>
            </td>
            <td class="card-plus-minuse">
                <div class="attributes input-group bootstrap-touchspin">
                    <div class="qty-holder">
                        <a href class="qty-dec-btn" title="Dec">-</a>
                        <input type="text" name="product_qty" id="product_qty" class="qty-input" value="1" />
                        <a class="qty-inc-btn" title="Inc" onClick={callBack(ButoonInc,item)} href>+</a>
                    </div>
                </div>
            </td>
            <td class="amount-for-popup">
                <span class="SearchFont SearchDelPrice">
                    {(item.Ds>0)? <del>৳</del> :<span>৳</span>} 
                    {
                        (item.Ds>0) && <del class="add-postion">{item.Ds}</del>
                    }
                    <br />
                    <span class="SearchFont SearchPrice">{item.MRP}</span>
                </span>
            </td>
            <td class="amount-inner-crose">
                <a onClick={callBack(RemoveItem,item)} href><i class="fa fa-times text-danger"></i></a>
            </td>
        </tr>
            ))
           
        }
        </>
    );
};

export default CartTableItem;