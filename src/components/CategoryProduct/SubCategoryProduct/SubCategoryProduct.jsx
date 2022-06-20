import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { GET_PRODUCTS_BY_CATEGORY } from "../../../lib/endpoints";
import ErrorPage from "../../../pages/ErrorPage";
import { httpV2 } from "../../../Service/httpService2";
import PopUpAlert from "../../utilities/Alert/PopUpAlert";
import Suspense from "../../utilities/Suspense/Suspense";
import SubCategoryProductHeader from "./SubCategoryProductHeader";
import SubCategoryTotalItem from "./SubCategoryTotalItem";

const SubCategoryProduct = () => {
  const { id } = useParams();
  const [subCategoryProducts, setSubCategoryProducts] = useState();
  const [isGetting, setIsGetting] = useState(true);
  const [alert, setalert] = useState(false);
  const [failed, setFailed] = useState(false);

  const closeModal = () => {
    setalert((prevState) => !prevState);
  };

  //get category wise products and children
  const getCategories = useCallback((id) => {
    httpV2.get({
      url: GET_PRODUCTS_BY_CATEGORY + id,
      before: () => {
        setIsGetting(true);
      },
      successed: (res) => {
        setSubCategoryProducts(res.data);
        setIsGetting(false);
      },
      failed: () => {
        setFailed(true);
      },
      always: () => {
        setIsGetting(false);
      },
    });
  }, []);

  useEffect(() => {
    getCategories(id);
  }, [getCategories, id]);

  return (
    <>
      {!isGetting && !failed && (
        <>
          <SubCategoryProductHeader
            subCategoryId={subCategoryProducts.id}
            name={subCategoryProducts.name}
          />

          {alert && (
            <PopUpAlert
              content={"Already in your cart."}
              closeModal={closeModal}
            />
          )}

          <section class="catagory-product-area view-all-sub-catagory">
            <div class="container">
              {/* <!-- repeat sub catagory single --> */}
              <SubCategoryTotalItem
                children={subCategoryProducts.children}
                setalert={closeModal}
                products={subCategoryProducts.products}
                name={subCategoryProducts.name}
              />
            </div>
          </section>
        </>
      )}
      {failed && <ErrorPage />}
      {isGetting && <Suspense />}
    </>
  );
};

export default SubCategoryProduct;
