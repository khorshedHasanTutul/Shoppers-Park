import React, { useCallback, useEffect, useState } from "react";
import { paramsUrlGenerator } from "../../helpers/utilities";
import { GET_WISH_ITEMS } from "../../lib/endpoints";
import { httpV2 } from "../../Service/httpService2";
import PopUpAlert from "../utilities/Alert/PopUpAlert";
import Suspense from "../utilities/Suspense/Suspense";
import WishlistHeader from "./WishlistHeader";
import WishlistNoProduct from "./WishlistNoProduct";
import WishlistProduct from "./WishlistProduct";

const WishlistParent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [goesWrong, setGoesWrong] = useState(false);
  const [alert, setAlert] = useState(false);

  const [allWishItems, setAllWishItems] = useState({
    items: [],
    totalCount: 0,
    count: 0,
  });
  const [params, setParams] = useState({
    Index: 1,
    Take: 20,
  });
  const pageChangeHandler = (page) => {
    setParams((prevState) => ({ ...prevState, Index: page }));
  };
  const closeAlert = () => {
    setAlert((prevState) => !prevState);
  };

  const getWishList = useCallback((paramUrl) => {
    httpV2.get({
      url: GET_WISH_ITEMS + paramUrl,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        setIsLoading(false);
        setAllWishItems({
          items: res.data.data,
          totalCount: res.data.count,
          count: res.data.data.length,
        });
      },
      failed: () => {
        setGoesWrong(true);
      },
      always: () => {
        setIsLoading(false);
      },
    });
  }, []);

  useEffect(() => {
    const paramUrl = paramsUrlGenerator(params);
    getWishList(paramUrl);
  }, [getWishList, params]);

  return (
    <>
      <WishlistHeader />
      {!isLoading && (
        <section class="wishlist-area">
          <div class="container">
            <div class="wishlist-main-item">
              {allWishItems.items.length === 0 && <WishlistNoProduct />}
              {allWishItems.items.length > 0 && (
                <div class="add-product-wishlist-main-page">
                  <h3>Your products wishlist</h3>
                  <WishlistProduct
                    params={params}
                    allWishItems={allWishItems}
                    setAlert={closeAlert}
                    pageChangeHandler={pageChangeHandler}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      {isLoading && <Suspense />}
      {alert && (
        <PopUpAlert content={"Already in your cart"} closeModal={closeAlert} />
      )}
    </>
  );
};

export default WishlistParent;
