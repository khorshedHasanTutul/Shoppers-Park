import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { callBack } from '../../../Service/AppService';

const TableSingleItem = ({data}) => {
    const [count, setcount] = useState(1)
    const Increment=(item)=>{ 
          console.log(item)
    }
    // const Decrement=()=>{
    //     if(count>1) setstate(count-1) 
    // }
    
    return (
        <>
        {
            data.Items.map(item=>(
                <tr>
                <td class="cart_product">
                    <a href="#"><img src={item.image} alt="img" /></a>
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
                        <input type="text" class="form-control no-padding add-color text-center height-25" maxlength="3" value={count} />
                        <span class="input-group-btn">
                            <button class="btn btn-white btn-minus" type="button" >
                            <i class="fa fa-minus" aria-hidden="true"></i>
                          </button>
                        </span>
                        
                         <span class="input-group-btn">
                              <button class="btn btn-red btn-plus" type="button" onClick={callBack(Increment,item)}>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                          </button>
                        </span>
                      </div>
                </td>
                <td class="price"><span>{item.MRP*count}</span></td>
                <td class="action"><a href="#"><img src="/contents/assets/images/delete_icon.png" alt="" /></a></td>
            </tr>
            ))
        }
        </>
       
    );
};

export default TableSingleItem;