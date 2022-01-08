import React from 'react';
import SearchTemplate from './SearchTemplate';

const SearchPortal = ({data,closeSearch,lowerSearchvalue}) => {
    return (
        <div class="search-result" id="search-result">
            {
                (data.length===0)&& 
                <div class="search-result__no-product-message">
                    <strong>No Product Found!</strong>
                     
                </div>
            }
            {
                (data.length>0)&&
                data.map(item=>(
                    <SearchTemplate item={item} closeSearch={closeSearch} lowerSearchvalue={lowerSearchvalue}/>
                ))
            }
            {
                (data.length===5)&&
                <div class="search-result__view-more">
                <button>View All Result</button>
                </div>
            }
          </div>
    );
};

export default SearchPortal;