import React, { useContext } from 'react';
import { callBack } from '../../../Service/AppService';
import { RemoveItem } from '../../../Service/CartContent';
import authContext from '../../../Store/auth-context';
import CartQuantityRow from './CartQuantityRow';
import TableItemCategoryBrand from './TableItemCategoryBrand';

const TableSingleItem = ({data}) => {
    const authCtx = useContext(authContext)
    const cartItemRemover=(item)=>{
        authCtx.removeItemCart(item)

    }
    return (
        <>
        {
            data.Items.map((item,index)=>(
                <tr>
                <td class="cart_product">
                    <a href><img src={item.image} alt="img" /></a>
                </td>
              <TableItemCategoryBrand item={item} />
              {
                (item.Ds>0)? <td class="price"><span>৳ {(item.MRP-((item.MRP)*item.Ds)/100).toFixed(2)}</span></td>:
                <td class="price"><span>৳ {(item.MRP).toFixed(2)}</span></td>
              }
                <CartQuantityRow item={item} data={data} index={index}/>
                <td class="price"><span>{(data.MRP[index].toFixed(2))}</span></td>
                <td class="action">
                    <a onClick={callBack(RemoveItem,item)} href>
                        <span onClick={cartItemRemover.bind(null,item)}> <i class="fa fa-times" aria-hidden="true"></i></span>
                       
                    </a>
                </td>
            </tr>
            
            ))
        }
        </>
       
    );
};

export default TableSingleItem;