import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { BrandData, callBack } from '../../../Service/AppService';
import appData from '../../DataSource/appData';
import { Link } from 'react-router-dom';
import { WishAddedButton } from '../../../Service/CartContent';

const ProductDetailsItem = ({product_id}) => {
    const concatData=appData.categoryProducts;
    const item=concatData.find(item=>item.Id ===product_id);
    console.log('item',item)
    const categoryData=appData.ShopCategory.find(item2=>item2.categoryId ===item.category_id );
    const brandData=BrandData.find(brand=>brand.brand_id  ===item.brand_id );
    const [count, setstate] = useState(1);
    const Increment=()=>{ 
        setstate(count+1)    
    }
    const Decrement=()=>{
        if(count>1) setstate(count-1) 
    }
    return (
        <div class="inner-product-details-flex">
                                    <div class="product-d-left-img">
                                        <div class="det-img-padding">
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>
                                    <div class="product-desc-right-content">
                                        <div class="catagory-overly-main-bg">
                                            <div class="catagory-product-overly">
                                                <h4>{item.Nm}</h4>
                                            </div>
                                            <div class="product-review-main">
                                                <div class="rate">
                                                    <input type="radio" id="star5" name="rate" value="5" />
                                                    <label for="star5" title="text">5 stars</label>
                                                    <input type="radio" id="star4" name="rate" value="4" />
                                                    <label for="star4" title="text">4 stars</label>
                                                    <input type="radio" id="star3" name="rate" value="3" />
                                                    <label for="star3" title="text">3 stars</label>
                                                    <input type="radio" id="star2" name="rate" value="2" />
                                                    <label for="star2" title="text">2 stars</label>
                                                    <input type="radio" id="star1" name="rate" value="1" />
                                                    <label for="star1" title="text">1 star</label>
                                                </div>
                                                <a href>No Review</a>
                                            </div>
                                            <div class="basket-add">
                                                <span class="item__price item__price--now">৳{(parseInt(item.MRP)%2!==0)?(item.MRP*count):(item.MRP * count).toFixed(2)}</span>
                                                {item.Ds>0 ? <span class="price product-price"><del class="cross_price">৳ {item.Ds}</del></span> :
                                                ''
                                                }
            
                                            </div>
                                            <div class="pd-brand-ctg">
                                                <ul>
                                                    <li>Category :<Link to={'/category/'+ item.category_id}>{categoryData.categoryName}</Link></li>
                                                    <li>Brand :<Link to={'/brands/'+item.brand_id}>{brandData.brand_name}</Link></li>
                                                </ul>
                                            </div>
                                             <div class="input-group product_qty">
                                                <h1>Quantity:</h1>
                                                <span class="input-group-btn">
                                                    <button class="btn btn-white btn-minus" type="button" onClick={Decrement}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                  </button>
                                                </span>
                                                <input type="text" class="form-control no-padding add-color text-center height-25" maxlength="3" value={count} />
                                                   <span class="input-group-btn">
                                                      <button class="btn btn-red btn-plus" type="button" onClick={Increment}>
                                                      <FontAwesomeIcon icon={faPlus} />
                                                  </button>
                                                </span>
                                              </div>
                                              
                                              <div class="pro-add-wish-flex">
                                              <a href>
                                                <div class="btn_cart">
                                                   <FontAwesomeIcon icon={faShoppingCart} />
                                                    <h5>Add to Cart</h5>
                                                 </div>
                                              </a>
                                              <div class="wishlist-btn" onClick={callBack(WishAddedButton,item)}>
                                                <a href><i class="fa fa-heart-o" aria-hidden="true"></i>Add to wishlist</a>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    );
};

export default ProductDetailsItem;