import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { GET_PRODUCT_DETAILS } from "../../../lib/endpoints";
import ErrorPage from "../../../pages/ErrorPage";
import { httpV2 } from "../../../Service/httpService2";
import PopUpAlert from "../../utilities/Alert/PopUpAlert";
import Suspense from "../../utilities/Suspense/Suspense";
import LowerDetails from "./LowerPartDetails/LowerDetails";
import ProductDetailsHeader from "./ProductDetailsHeader";
import ProductDetailsItem from "./ProductDetailsItem";
import RelatedProductes from "./RelatedProducts/RelatedProductes";

const ProductDetailsParent = () => {
  const { id } = useParams();
  const [isGetting, setIsGetting] = useState(true);
  const [productItemDetails, setProductItemDetails] = useState();
  const [alert, setalert] = useState(false);
  const [failed, setFailed] = useState(false);

  const closeModal = () => {
    setalert((prevState) => !prevState);
  };

  const getProductDetails = useCallback((id) => {
    httpV2.get({
      url: GET_PRODUCT_DETAILS + id,
      before: () => {
        setIsGetting(true);
      },
      successed: (res) => {
        console.log(res.data);
        setProductItemDetails(res.data);
        setIsGetting(false);
      },
      failed: () => {
        console.log("failed");
        setFailed(true);
      },
      always: () => {
        setIsGetting(false);
      },
    });
  }, []);

  useEffect(() => {
    getProductDetails(id);
  }, [getProductDetails, id]);

  console.log({ productItemDetails });

  return (
    <>
      {alert && (
        <PopUpAlert content={"Already in your cart."} closeModal={closeModal} />
      )}
      {!isGetting && !failed && (
        <>
          <ProductDetailsHeader categories={productItemDetails?.categories} />

          <section class="product-details-area">
            <div class="container">
              <div class="product-details-main">
                <div class="product-details-inner-flex">
                  {/* <!-- product-details-left --> */}
                  <div class="product-details-left">
                    {/* <!-- product item details --> */}
                    <ProductDetailsItem
                      product={productItemDetails}
                      setalert={closeModal}
                    />
                    {/* <!-- product item details --> */}
                    {/* <!-- product desc review information --> */}
                    <LowerDetails product={productItemDetails} />
                    {/* <!-- product desc review information --> */}
                  </div>
                  {/* <!-- product-details-right --> */}
                  <div class="product-details-right">
                    {/* <!-- RELATED PRODUCTS --> */}
                    {productItemDetails.relatedProducts.length > 0 && (
                      <RelatedProductes
                        relatedProducts={productItemDetails?.relatedProducts}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      {isGetting && <Suspense />}
      {failed && <ErrorPage />}
    </>
  );
};

export default ProductDetailsParent;
