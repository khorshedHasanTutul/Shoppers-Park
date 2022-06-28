import React, { useCallback, useEffect, useState } from "react";
import BrandBody from "../components/Brand/BrandContent/BrandBody";
import BrandHeader from "../components/Brand/BrandContent/BrandHeader";
import Parks from "../components/Parks/Parks";
import Suspense from "../components/utilities/Suspense/Suspense";
import { GET_BRANDS } from "../lib/endpoints";
import { httpV2 } from "../Service/httpService2";

const Brands = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [brandsPrefix, setBrandsPrefix] = useState([]);

  const getBanners = useCallback(() => {
    httpV2.get({
      url: GET_BRANDS,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        console.log({ res });
        setBrandsPrefix(Object.entries(res.data));
        setIsLoading(false);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {
        setIsLoading(false);
      },
    });
  }, []);

  useEffect(() => {
    getBanners();
  }, []);

  return (
    <>
      {!isLoading && (
        <>
          <Parks />
          <BrandHeader />
          <BrandBody brandsPrefix={brandsPrefix} />
        </>
      )}
      {isLoading && <Suspense />}
    </>
  );
};
export default Brands;
