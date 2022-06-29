import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { transformQuery } from "../../../../helpers/utilities";
import { SEARCH_PRODUCT } from "../../../../lib/endpoints";
import { httpV2 } from "../../../../Service/httpService2";
import appContext from "../../../../Store/app-context";
import SearchPortal from "./SearchPortal";

export const SearchProduct = ({
  closeSearch,
  SearchValue,
  setalert,
  visibleSearch,
}) => {
  const appCtx = useContext(appContext);
  const [searchedProduct, setSearchProduct] = useState([]);
  const [inputTimeout, setInputTimeout] = useState(null);
  const [isGetting, setIsGetting] = useState(false);

  const getSearchProducts = useCallback((searchQuery) => {
    if (searchQuery.trim().length === 0) {
      setIsGetting(false);
      return false;
    }
    httpV2.get({
      url: SEARCH_PRODUCT + transformQuery(searchQuery),
      before: () => {
        setIsGetting(true);
        appCtx.searchQuery.storeSearchQuery(searchQuery);
      },
      successed: (res) => {
        setIsGetting(false);
        setSearchProduct(res.data);
      },
      failed: () => {
        setIsGetting(false);
      },
      always: () => {},
    });
  }, []);

  const searchHandler = useCallback(
    (searchQuery) => {
      setIsGetting(true);
      if (inputTimeout) clearTimeout(inputTimeout);

      setInputTimeout(
        setTimeout(() => {
          getSearchProducts(searchQuery);
        }, 400)
      );
    },
    [getSearchProducts]
  );
  useEffect(() => {
    searchHandler(SearchValue);
  }, [SearchValue, searchHandler]);

  useEffect(() => () => clearTimeout(inputTimeout), [inputTimeout]);

  const data =
    searchedProduct.length > 5 ? searchedProduct.slice(0, 5) : searchedProduct;

  return (
    <SearchPortal
      data={data}
      closeSearch={closeSearch}
      lowerSearchvalue={SearchValue}
      setalert={setalert}
      visibleSearch={visibleSearch}
      isGetting={isGetting}
      totalSearchProduct={searchedProduct}
    />
  );
};

export default SearchProduct;
