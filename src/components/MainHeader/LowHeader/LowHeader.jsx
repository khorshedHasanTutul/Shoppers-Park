import React,{forwardRef} from 'react'
import Category from './Category/Category';

const LowHeader = forwardRef((props, ref) => {
    return (
        <div class="header-bottom-flex" ref={ref}>
            <Category />
            
            {/* <div class="wishlist-offer">
                <ul>
                 <Link to="/profile/request">Request a Order</Link>
                </ul>
            </div> */}
            
        </div>
    )
})

export default LowHeader;
