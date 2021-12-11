import React, { useState } from 'react'
import { callBack } from '../../Service/AppService';
import { ButoonDec, ButoonInc, QtyChange } from '../../Service/CartContent';

const MiniCartQuantityRow = ({item,data,index}) => {
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
        <td class="card-plus-minuse">
        <div class="attributes input-group bootstrap-touchspin">
            <div class="qty-holder">
                <span onClick={qtyDecreaseHandler}>
                    <a href class="qty-dec-btn" title="Dec" onClick={callBack(ButoonDec,item)}>-</a>
                </span>
                <input type="text" name="product_qty" id="product_qty" class="qty-input" value={quantityValue} onChange={qtyChangehandler}/>
                <span onClick={qtyIncreaseHandler}>
                    <a class="qty-inc-btn" title="Inc" onClick={callBack(ButoonInc,item)} href>+</a>
                </span>
                
            </div>
        </div>
    </td>
    )
}
export default MiniCartQuantityRow;