import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { GET_PRODUCTS_BY_CATEGORY } from "../../lib/endpoints";
import { httpV2 } from "../../Service/httpService2";
import Suspense from "../utilities/Suspense/Suspense";
import CategoryProductHeader from "./CategoryProductHeader";
import TotalCategoryItem from "./TotalCategoryItem";

const CategoryProduct = () => {
  const { id } = useParams();
  const [categoryProducts, setCategoryProducts] = useState();
  const [isGetting, setIsGetting] = useState(true);
  // get category id wise child and products
  const getCategories = useCallback((id) => {
    httpV2.get({
      url: GET_PRODUCTS_BY_CATEGORY + id,
      before: () => {
        setIsGetting(true);
      },
      successed: (res) => {
        setCategoryProducts(res.data);
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
          <CategoryProductHeader
            categoryId={categoryProducts.id}
            name={categoryProducts.name}
          />
          <TotalCategoryItem children={categoryProducts.children} />
        </>
      )}
      {isGetting && <Suspense />}
    </>
  );
};

export default CategoryProduct;
