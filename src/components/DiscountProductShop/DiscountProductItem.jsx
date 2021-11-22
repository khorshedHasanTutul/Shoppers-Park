import React from 'react'

const DiscountProductItem = ({item}) => {
    return (
        <div class="banner-inner-product-single">
                        <a href="#">
                            <img src={item.image} alt="img" />
                            <div class="shop-all-offer-btn">
                                <small>{item.text}</small>
                            </div>
                        </a>
                    </div>
    )
}
export default DiscountProductItem;