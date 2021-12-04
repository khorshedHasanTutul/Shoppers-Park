import React from 'react';
import { Link } from 'react-router-dom';
import { callBack } from '../../../Service/AppService';
import { ButoonDec, ButoonInc, RemoveItem } from '../../../Service/CartContent';
import TableItemCategoryBrand from './TableItemCategoryBrand';

const TableSingleItem = ({data}) => {
    return (
        <>
        {
            data.Items.map((item,index)=>(
                <tr>
                <td class="cart_product">
                    <a href><img src={item.image} alt="img" /></a>
                </td>
              <TableItemCategoryBrand item={item} />
                <td class="price"><span>৳ {(item.MRP).toFixed(2)}</span></td>
                <td class="qty">
                    <div class="input-group product_qty">
                    <span class="input-group-btn">
                            <button class="btn btn-white btn-minus" type="button" onClick={callBack(ButoonDec,item)}>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                          </button>
                        </span>
                        <input type="text" class="form-control no-padding add-color text-center height-25" maxlength="3" value={data.qty[index]} />
                        
                         <span class="input-group-btn">
                              <button class="btn btn-red btn-plus" type="button" onClick={callBack(ButoonInc,item)}>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                          </button>
                        </span>
                      </div>
                </td>
                <td class="price"><span>{(data.MRP[index].toFixed(2))}</span></td>
                <td class="action"><a onClick={callBack(RemoveItem,item)} href><img src="/contents/assets/images/delete_icon.png" alt="" /></a></td>
            </tr>
            
            ))
        }
        </>
       
    );
};

export default TableSingleItem;