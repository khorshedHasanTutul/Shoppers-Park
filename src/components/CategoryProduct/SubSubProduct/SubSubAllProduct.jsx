import React from 'react';
import { Link } from 'react-router-dom';
import { callBack } from '../../../Service/AppService';
import { cartAddedButton, WishAddedButton } from '../../../Service/CartContent';
import appData from '../../DataSource/appData';

const SubSubAllProduct = ({categoryId,subCategoryId,subItemId}) => {
    
    const concatData=appData.categoryProducts;
    const data=concatData.filter(item=>item.category_id===categoryId.categoryId && item.subCategory_id===subCategoryId.subCategory_id && item.subCategory_item_id===subItemId.subCategory_item);
    if(data.length===0){
        return(
            <div>
                <strong>No Product Found!</strong>
            </div>
        )
    }
    else
    return (
        <>
        
        {  
            
            data.map(item=>(
                 <div class="single-product-catagory-item">
        <div class="hover-eff-product" onClick={callBack(WishAddedButton,item)}>
            <a title="Add to Wishlist" href> <i class="fa fa-heart-o" aria-hidden="true"></i></a>
        </div>
        <Link to={'/product/'+item.Id}>
        {
         item.Ds>0 ? <div class="group-price-drag"><span class="product-new-drag">{item.Ds>0 ? item.Ds:''}{item.Ds>0 ? '%':''} </span></div> : ''
         }
            <img src={item.image} alt="img" />
            <div class="catagory-overly-main-bg">
                <div class="catagory-product-overly">
                    <h4>{item.Nm}</h4>
                </div>
                <div class="basket-add">
                        {
                            (item.Ds>0)?<span class="item__price item__price--now">৳{(item.MRP-((item.MRP)*item.Ds)/100).toFixed(2)}</span>:
                            <span class="item__price item__price--now">৳{item.MRP}</span>
                        }
                        
                        {item.Ds>0 ? <span class="price product-price"><del class="cross_price">৳ {item.MRP}</del></span> :
                        ''
                        }
                        
                </div>
                <div class="btn_cart" onClick={callBack(cartAddedButton,item)}>
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    <h5>Add to Cart</h5>
                </div>
            </div>
        </Link>
    </div>
            ))

        }
       </>
    );
};

export default SubSubAllProduct;