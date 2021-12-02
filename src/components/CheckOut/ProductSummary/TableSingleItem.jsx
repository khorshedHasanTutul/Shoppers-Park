import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { callBack } from '../../../Service/AppService';
import { ButoonDec, ButoonInc, CartService, RemoveItem } from '../../../Service/CartContent';

const TableSingleItem = ({data}) => {
    const [CartContent, setCartContent] = useState(CartService.Get())
    CartService.Refresh=setCartContent;
    // const [count, setcount] = useState(1)
    // const Increment=(item)=>{ 
    //       console.log(item)
    // }
    
    return (
        <>
        {
            CartContent.Items.map((item,index)=>(
                <tr>
                <td class="cart_product">
                    <a href><img src={item.image} alt="img" /></a>
                </td>
                <td class="cart_description">
                    <p class="product-name"><Link to={'/product/'+item.Id}>{item.Nm}</Link></p>
                    <small class="cart_ref">Category : XYZ</small>
                    <br />
                    <small>Brand: LPC </small>
                </td>
                <td class="price"><span>৳ {item.MRP}</span></td>
                <td class="qty">
                    <div class="input-group product_qty">
                        <input type="text" class="form-control no-padding add-color text-center height-25" maxlength="3" value={data.qty[index]} />
                        <span class="input-group-btn">
                            <button class="btn btn-white btn-minus" type="button" onClick={callBack(ButoonDec,item)}>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                          </button>
                        </span>
                        
                         <span class="input-group-btn">
                              <button class="btn btn-red btn-plus" type="button" onClick={callBack(ButoonInc,item)}>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                          </button>
                        </span>
                      </div>
                </td>
                <td class="price"><span>{data.MRP[index]}</span></td>
                <td class="action"><a onClick={callBack(RemoveItem,item)} href><img src="/contents/assets/images/delete_icon.png" alt="" /></a></td>
            </tr>
            
            ))
        }
        </>
       
    );
};

export default TableSingleItem;