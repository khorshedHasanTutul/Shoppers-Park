import React, { useEffect, useRef, useState } from "react";
import SearchTemplate from "./SearchTemplate";

const SearchPortal = ({
  data,
  closeSearch,
  lowerSearchvalue,
  setalert,
  visibleSearch,
  isGetting,
  totalSearchProduct,
}) => {
  console.log({totalSearchProduct})
  return (
    <>
      {visibleSearch && (
        <div class="search-result" id="search-result">
          {isGetting && (
            <div class="search-result__no-product-message">
              <strong>Product Finding! 😊</strong>
            </div>
          )}
          {data.length === 0 && !isGetting && (
            <div class="search-result__no-product-message">
              <strong>No Product Found! 😥</strong>
            </div>
          )}
          {data.length > 0 &&
            !isGetting &&
            data.map((item) => (
              <SearchTemplate
                item={item}
                closeSearch={closeSearch}
                lowerSearchvalue={lowerSearchvalue}
                setalert={setalert}
              />
            ))}
          {totalSearchProduct.length >= 5 && !isGetting && (
            <div class="search-result__view-more">
              <button>View All Result</button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SearchPortal;
