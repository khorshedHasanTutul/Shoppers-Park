import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { GET_LEVEL2_Products } from "../../lib/endpoints";
import ErrorPage from "../../pages/ErrorPage";
import { httpV2 } from "../../Service/httpService2";
import Suspense from "../utilities/Suspense/Suspense";
import CategoryProductHeader from "./CategoryProductHeader";
import TotalCategoryItem from "./TotalCategoryItem";

const CategoryProduct = () => {
  const { id } = useParams();
  const [categoryProducts, setCategoryProducts] = useState();
  const [isGetting, setIsGetting] = useState(true);
  const [failed, setFailed] = useState(false);
  // get category id wise child and products
  const getCategories = useCallback((id) => {
    httpV2.get({
      url: GET_LEVEL2_Products + id,
      before: () => {
        setIsGetting(true);
      },
      successed: (res) => {
        setCategoryProducts(res.data);
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
  }, []);

  useEffect(() => {
    getCategories(id);
  }, [getCategories, id]);

  return (
    <>
      {!isGetting && !failed && (
        <>
          <CategoryProductHeader
            categoryId={categoryProducts.id}
            name={categoryProducts.name}
          />
          <TotalCategoryItem
            children={categoryProducts.children}
            products={categoryProducts.products}
            name={categoryProducts.name}
          />
        </>
      )}
      {failed && <ErrorPage />}
      {isGetting && <Suspense />}
    </>
  );
};

export default CategoryProduct;
