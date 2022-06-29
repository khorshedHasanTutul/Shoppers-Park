import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { paramsUrlGenerator } from "../../helpers/utilities";
import { GET_NEWIN_PRODUCT } from "../../lib/endpoints";
import ErrorPage from "../../pages/ErrorPage";
import { httpV2 } from "../../Service/httpService2";
import Paginator from "../Paginators/Paginators";
import ProductsInfoModel from "../Products/ProductsInfoModel";
import Suspense from "../utilities/Suspense/Suspense";
import NewinHeader from "./NewinHeader";

const NewProduct = () => {
  const { id } = useParams();
  const [alert, setalert] = useState(false);

  const [newInProduct, setNewInProduct] = useState({
    items: [],
    totalCount: 0,
    count: 0,
  });
  const [isLoading, setIsloading] = useState(true);
  const [failed, setFailed] = useState(false);

  const [params, setParams] = useState({
    Index: 1,
    Take: 20,
  });
  const closeModal = () => {
    setalert((prevState) => !prevState);
  };

  const pageChangeHandler = (page) => {
    setParams((prevState) => ({ ...prevState, Index: page }));
  };

  const getNewInProduct = useCallback((id, paramURL) => {
    httpV2.get({
      url: GET_NEWIN_PRODUCT + id + paramURL,
      before: () => {
        setIsloading(true);
      },
      successed: (res) => {
        setNewInProduct({
          items: res.data.data,
          totalCount: res.data.count,
          count: res.data.length ?? 0,
        });
        console.log("res=>", res);
        setIsloading(false);
      },
      failed: () => {
        setFailed(true);
        console.log("failed");
      },
      always: () => {
        setIsloading(false);
      },
    });
  }, []);

  useEffect(() => {
    const paramUrl = paramsUrlGenerator(params);
    getNewInProduct(id, paramUrl);
  }, [getNewInProduct, id, params]);

  return (
    <>
      <NewinHeader />
      {/* <NewInBanner /> */}
      {/* <NewInShopCategory /> */}
      {!isLoading && !failed && newInProduct.items.length > 0 && (
        <>
          <div className="container">
            <div class="product-catagory-main-flex owl-slider-perk">
              <div class="product-catagory-inner-flex owl-slider-perk-items">
                {newInProduct.items.map((item) => (
                  // <NewInProduct items={item} />
                  <ProductsInfoModel
                    item={item}
                    from={"api"}
                    setalert={closeModal}
                  />
                ))}
                <div className="paginator container">
                  <Paginator
                    items={newInProduct.totalCount}
                    pageItems={params.Take}
                    startPage={params.Index}
                    onPageChange={pageChangeHandler}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* {!isLoading && newInProduct.length === 0 && (

      )} */}
      {failed && <ErrorPage />}
      {isLoading && <Suspense />}
    </>
  );
};

export default NewProduct;
