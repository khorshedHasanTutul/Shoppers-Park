import React, { useCallback, useEffect, useState } from "react";
import { paramsUrlGenerator } from "../../../helpers/utilities";
import { CHILD_PRODUCT_LVL_WISE } from "../../../lib/endpoints";
import { httpV2 } from "../../../Service/httpService2";
import Paginator from "../../Paginators/Paginators";
import Suspense from "../../utilities/Suspense/Suspense";
import VisibleProductByCategory from "../VisibleProduct/VisibleProductByCategory";
import SubCategorySubItemList from "./SubCategorySubItemList";

const SubCategoryTotalItem = ({ children, setalert, name, subCategoryId }) => {
  const [isGetting, setIsGetting] = useState(false);

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
        url: CHILD_PRODUCT_LVL_WISE + "level3/" + subCategoryId + paramsUrl,
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
        failed: () => {},
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

  const findEveryChildrenProducts = (children) => {
    const find = children.filter((item) => item.products.length > 0);
    return find.length > 0 ? true : false;
  };

  if (children.length === 0 || findEveryChildrenProducts(children) === false) {
    return (
      <div className="pro-not-found-img-subcategory">
        <strong>
          {" "}
          <img src="/contents/assets/images/no-product-found.png" alt="" />{" "}
        </strong>
      </div>
    );
  } else if (children.length === 0 && allProducts.items.length > 0) {
    return (
      <>
        {!isGetting && (
          <>
            <VisibleProductByCategory
              name={name}
              products={allProducts.items}
              setalert={setalert}
            />
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
      </>
    );
  } else
    return (
      <>
        {children.map((item) => (
          <SubCategorySubItemList item={item} setalert={setalert} />
        ))}
      </>
    );
};

export default SubCategoryTotalItem;
