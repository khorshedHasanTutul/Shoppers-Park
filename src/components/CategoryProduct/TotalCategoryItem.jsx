import React, { useCallback, useEffect, useState } from "react";
import { paramsUrlGenerator } from "../../helpers/utilities";
import { CHILD_PRODUCT_LVL_WISE } from "../../lib/endpoints";
import { httpV2 } from "../../Service/httpService2";
import Paginator from "../Paginators/Paginators";
import PopUpAlert from "../utilities/Alert/PopUpAlert";
import Suspense from "../utilities/Suspense/Suspense";
import CategorySubItemProductList from "./CategorySubItemProductList";
import VisibleProductByCategory from "./VisibleProduct/VisibleProductByCategory";

const TotalCategoryItem = ({ children, name, categoryId }) => {
  const [alert, setalert] = useState(false);
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

  const closeModal = () => {
    setalert((prevState) => !prevState);
  };

  const findEveryChildrenProducts = (children) => {
    const find = children.filter((item) => item.products.length > 0);
    return find.length > 0 ? true : false;
  };

  const getChildLvlWProduct = useCallback(
    (paramsUrl) => {
      httpV2.get({
        url: CHILD_PRODUCT_LVL_WISE + "level2/" + categoryId + paramsUrl,
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
    [categoryId]
  );

  useEffect(() => {
    const paramsUrl = paramsUrlGenerator(params);
    getChildLvlWProduct(paramsUrl);
  }, [getChildLvlWProduct, params]);

  return (
    <>
      {/* {isGetting && <Suspense />} */}
      {!isGetting &&
      (children.length === 0 ||
        findEveryChildrenProducts(children) === false) &&
      allProducts.items.length === 0 ? (
        <div class="container">
          <div className="pro-not-found-img-subcategory">
            <strong>
              {" "}
              <img
                src="/contents/assets/images/no-product-found.png"
                alt=""
              />{" "}
            </strong>
          </div>
        </div>
      ) : !isGetting &&
        children.length === 0 &&
        allProducts.items.length > 0 ? (
        <>
          <VisibleProductByCategory
            name={name}
            products={allProducts.items}
            setalert={closeModal}
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
      ) : (
        <section class="catagory-product-area view-all-sub-catagory">
          {alert && (
            <PopUpAlert
              content={"Already in your cart."}
              closeModal={closeModal}
            />
          )}
          <div class="container">
            {children.map((subCategory_item) => (
              <CategorySubItemProductList
                subCategory_item={subCategory_item}
                setalert={closeModal}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default TotalCategoryItem;
