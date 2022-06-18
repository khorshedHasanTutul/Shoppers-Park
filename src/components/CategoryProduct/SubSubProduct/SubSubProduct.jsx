import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { GET_PRODUCTS_BY_CATEGORY } from "../../../lib/endpoints";
import { httpV2 } from "../../../Service/httpService2";
import PopUpAlert from "../../utilities/Alert/PopUpAlert";
import Suspense from "../../utilities/Suspense/Suspense";
import SubSubAllProduct from "./SubSubAllProduct";
import SubSubHeader from "./SubSubHeader";

const SubSubProduct = () => {
  const [alert, setalert] = useState(false);
  const { id } = useParams();
  const [subcategoryProducts, setSubCategoryProducts] = useState();
  const [isGetting, setIsGetting] = useState(true);

  const closeModal = () => {
    setalert((prevState) => !prevState);
  };

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
      failed: () => {},
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
      {!isGetting && (
        <>
          {alert && (
            <PopUpAlert
              content={"Already in your cart."}
              closeModal={closeModal}
            />
          )}
          <SubSubHeader
            categoryId={subcategoryProducts.id}
            name={subcategoryProducts.name}
          />

          <section class="catagory-product-area view-all-sub-catagory sub2-shop-all-new-in-make-up">
            <div class="container">
              {/* <!-- repeat sub catagory single --> */}
              <div class="catagory-main-product-area">
                {/* <!-- common heading --> */}
                <div class="hompe-common-title">
                  <h2>{subcategoryProducts.name}</h2>
                  <div class="my-header-underline"></div>
                </div>
                {/* <!-- common heading --> */}
                {/* <!-- single product catagory main area --> */}
                <div class="product-catagory-main-flex owl-slider-perk">
                  <div class="product-catagory-inner-flex owl-slider-perk-items">
                    {/* <!-- single item --> */}

                    <SubSubAllProduct
                      subCategoryId={subcategoryProducts.id}
                      products={subcategoryProducts.products}
                      setalert={closeModal}
                    />
                  </div>
                </div>
                {/* <!-- single product catagory main area --> */}
              </div>
            </div>
          </section>
        </>
      )}
      {isGetting && <Suspense />}
    </>
  );
};

export default SubSubProduct;
