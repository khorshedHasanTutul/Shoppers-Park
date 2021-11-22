import {NavLink} from 'react-router-dom';
import './OrderHistoryHeader.css';
const OrderHistoryHeader = () => {
    return (
        <div className='r-tabs'>
            <NavLink className='kill-anchore block r-tabs__link' to='/profile/order/all'>
                All Orders
            </NavLink>
            <NavLink className='kill-anchore block r-tabs__link' to='/profile/order/confirmed'>
                Confirmed Orders
            </NavLink>
            <NavLink className='kill-anchore block r-tabs__link' to='/profile/order/processing'>
                Processing
            </NavLink>
            <NavLink className='kill-anchore block r-tabs__link' to='/profile/order/delivered'>
                Delivered
            </NavLink>
            <NavLink className='kill-anchore block r-tabs__link' to='/profile/order/cancel'>
                Canceled
            </NavLink>
        </div>
    );
}

export default OrderHistoryHeader;