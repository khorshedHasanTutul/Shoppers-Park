import React, { useState } from 'react'
import { callBack } from '../../../Service/AppService';
import { ButoonDec, ButoonInc, QtyChange } from '../../../Service/CartContent';

export const CartQuantityRow = ({item,data,index}) => {
    const [quantityValue, setquantityValue] = useState(data.qty[index])
    const qtyChangehandler=(e)=>{ 
        const x = callBack(QtyChange,item,e.target.value);
        x(e);
        setquantityValue(e.target.value);
    }
    const qtyIncreaseHandler=()=>{
        setquantityValue(parseInt(quantityValue)+1);
    }
    const qtyDecreaseHandler=()=>{
        setquantityValue(parseInt(quantityValue)-1);
    }

    return (
        <td class="qty">
        <div class="input-group product_qty">
        <span class="input-group-btn" onClick={qtyDecreaseHandler}>
                <button class="btn btn-white btn-minus" type="button" onClick={callBack(ButoonDec,item)}>
                <i class="fa fa-minus" aria-hidden="true"></i>
              </button>
            </span>
            <input type="text" class="form-control no-padding add-color text-center height-25" maxlength="3" value={quantityValue} onChange={qtyChangehandler}/>
            
             <span class="input-group-btn" onClick={qtyIncreaseHandler}>
                  <button class="btn btn-red btn-plus" type="button" onClick={callBack(ButoonInc,item)}>
                <i class="fa fa-plus" aria-hidden="true"></i>
              </button>
            </span>
          </div>
    </td>
    )
}
export default CartQuantityRow;