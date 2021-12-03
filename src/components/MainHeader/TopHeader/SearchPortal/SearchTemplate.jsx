import React from 'react';
import { Link } from 'react-router-dom';
import { callBack } from '../../../../Service/AppService';
import { cartAddedButton } from '../../../../Service/CartContent';
import appData from '../../../DataSource/appData';

const SearchTemplate = ({item,closeSearch}) => {
  const categoryData= appData.ShopCategory.find(item2=>(item2.categoryId===item.category_id))
    return (
        <div class="search-result__items">
              {/* <!-- search result --> */}
            <div class="result-card">
              <div class="result-card__img">
                <img src={item.image} alt="product_image" />
              </div>
              <div class="result-card__details">
                <Link to={'/product/'+item.Id}  class="result-card__details--name" onClick={closeSearch}>{item.Nm}
                </Link>
                <p class="result-card__details--price">
                <span>Price: </span>
                                {
                                    (item.Ds>0)?<span class="current">৳{(item.MRP-((item.MRP)*item.Ds)/100).toFixed(2)}</span>:
                                    <span class="current">৳{item.MRP}</span>
                                }
                               
                                {item.Ds>0 ? <span class="original"><del class="cross_price">৳ {item.MRP}</del></span> :
                                ''
                                }
                                
                            </p>
                <Link to={'/category/'+item.category_id} class="result-card__details--category" href onClick={closeSearch}>
                <span>Category: </span>
                <span class="current">{categoryData.categoryName}</span>
                 
                </Link>
              </div>
              <div class="result-card__details--actions">
                <button onClick={callBack(cartAddedButton,item)}>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  Add to Cart
                </button>
              </div>
            </div>
            </div>
    );
};

export default SearchTemplate;