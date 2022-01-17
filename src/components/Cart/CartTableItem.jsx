import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { callBack } from '../../Service/AppService';
import { ButoonDec, ButoonInc, RemoveItem } from '../../Service/CartContent';
import authContext from '../../Store/auth-context';
import MiniCartQuantityRow from './MiniCartQuantityRow';

const CartTableItem = ({data}) => {
    const authCtx = useContext(authContext)
    const CartContexItemRemover=(item)=>{
        authCtx.removeItemCart(item)
    }

    return (
         <>
        { 
            data.Items.map((item,index)=>(
                 <tr class="close">
            <td class="card-title-heading">
                <Link to={'/product/'+item.Id}>
                    <span class="SearchProductName SearchFont">{item.Nm}</span>
                </Link>
                <br />
                {
                    (item.Ds>0)?<del class="SearchDelPrice SearchDelPriceDel1">৳ {item.MRP}</del>:''
                }
                {
                    (item.Ds>0) ? <strong class="SearchPrice SearchDelPriceDel2">৳{(item.MRP-((item.MRP)*item.Ds)/100).toFixed(2)}</strong>:
                    <strong class="SearchPrice SearchDelPriceDel2">৳{item.MRP.toFixed(2)}</strong>
                }
            </td>
            <MiniCartQuantityRow item={item} data={data} index={index}/>
            <td class="amount-for-popup">
                <span class="SearchFont SearchDelPrice">
                    {(item.Ds>0)? <aside>৳</aside> :<span>৳</span>} 
                    {
                        (item.Ds>0) && <del class="add-postion">{(item.MRP*data.qty[index]).toFixed(2)}</del>
                    }
                    <br />
                    <span class="SearchFont SearchPrice">{(data.MRP[index].toFixed(2))}</span>
                </span>
            </td>
            <td class="amount-inner-crose">
                <span onClick={CartContexItemRemover.bind(null,item)}>
                     <a onClick={callBack(RemoveItem,item)} href><i class="fa fa-times text-danger"></i></a>
                </span>
               
            </td>
        </tr>
            ))
           
        }
        </>
    );
};

export default CartTableItem;