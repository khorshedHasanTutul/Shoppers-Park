import React, { useCallback, useEffect, useState } from "react";
import { paramsUrlGenerator } from "../../../helpers/utilities";
import { CHILD_PRODUCT_LVL_WISE } from "../../../lib/endpoints";
import ErrorPage from "../../../pages/ErrorPage";
import { httpV2 } from "../../../Service/httpService2";
import Paginator from "../../Paginators/Paginators";
import ProductsInfoModel from "../../Products/ProductsInfoModel";
import Suspense from "../../utilities/Suspense/Suspense";

const SubSubAllProduct = ({ subCategoryId, setalert }) => {
  const [failed, setFailed] = useState(false);
  const [isGetting, setIsGetting] = useState(true);

  const [allProducts, setAllProducts] = useState({
    items: [],
    totalCount: 0,
    count: 0,
  });
  const [params, setParams] = useState({
    index: 1,
    take: 20,
  });

  const pageChangeHandler = (page) => {
    setParams((prevState) => ({ ...prevState, index: page }));
  };
  const getChildLvlWProduct = useCallback(
    (paramsUrl) => {
      httpV2.get({
        url: CHILD_PRODUCT_LVL_WISE + "level4/" + subCategoryId + paramsUrl,
        before: () => {
          setIsGetting(true);
        },
        successed: (res) => {
          console.log(res);
          setAllProducts({
            items: res.data.data,
            totalCount: res.data.count,
            count: res.data.data.length ?? 0,
          });
          setIsGetting(false);
        },
        failed: () => {
          setFailed(true);
          setIsGetting(false);
        },
        always: () => {
          setIsGetting(false);
        },
      });
    },
    [subCategoryId]
  );
  useEffect(() => {
    const paramsUrl = paramsUrlGenerator(params);
    getChildLvlWProduct(paramsUrl);
  }, [getChildLvlWProduct, params]);

  return (
    <>
      {!isGetting && !failed && allProducts.items.length === 0 && (
        <div className="pro-not-found-img">
          <strong>
            {" "}
            <img
              src="/contents/assets/images/no-product-found.png"
              alt=""
            />{" "}
          </strong>
        </div>
      )}
      {!isGetting && !failed && allProducts.items.length > 0 && (
        <>
          {allProducts.items.map((item) => (
            <ProductsInfoModel item={item} setalert={setalert} from={"api"} />
          ))}
          <div className="paginator container">
            <Paginator
              items={allProducts.totalCount}
              pageItems={params.take}
              startPage={params.index}
              onPageChange={pageChangeHandler}
            />
          </div>
        </>
      )}
      {isGetting && <Suspense />}
      {failed && <ErrorPage />}
    </>
  );
};

export default SubSubAllProduct;
