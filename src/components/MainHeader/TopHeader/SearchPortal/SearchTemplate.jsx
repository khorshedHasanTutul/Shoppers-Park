import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import { callBack } from '../../../../Service/AppService';
import { cartAddedButton } from '../../../../Service/CartContent';

const SearchTemplate = ({item,closeSearch}) => {
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
                  <span>Price: </span><span class="current">{item.MRP}<span>BDT</span></span> <span class="original">3200 <span>BDT</span></span>
                </p>
                <a class="result-card__details--category">
                  Lorem, ipsum dolor.
                </a>
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