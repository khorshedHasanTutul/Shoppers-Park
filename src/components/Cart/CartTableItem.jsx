import React from 'react';
import { Link } from 'react-router-dom';

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
                        <a href="#" class="qty-dec-btn" title="Dec">-</a>
                        <input type="text" name="product_qty" id="product_qty" class="qty-input" value="1" />
                        <a href="#" class="qty-inc-btn" title="Inc">+</a>
                    </div>
                </div>
            </td>
            <td class="amount-for-popup">
                <span class="SearchFont SearchDelPrice">
                    <del>৳ </del>
                    <del class="add-postion">2, 450.00</del>
                    <br />
                    <span class="SearchFont SearchPrice">2, 200.05</span>
                </span>
            </td>
            <td class="amount-inner-crose">
                <a href="#"><i class="fa fa-times text-danger"></i></a>
            </td>
        </tr>
            ))
           
        }
        </>
    );
};

export default CartTableItem;