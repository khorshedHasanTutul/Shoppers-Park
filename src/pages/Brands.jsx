import React, { useCallback, useEffect, useState } from "react";
import BrandBody from "../components/Brand/BrandContent/BrandBody";
import BrandHeader from "../components/Brand/BrandContent/BrandHeader";
import Parks from "../components/Parks/Parks";
import Suspense from "../components/utilities/Suspense/Suspense";
import { GET_BRANDS } from "../lib/endpoints";
import { httpV2 } from "../Service/httpService2";
import GoesWrongPage from "./GoesWrongPage";

const Brands = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [brandsPrefix, setBrandsPrefix] = useState([]);
  const [failed, setFailed] = useState(false);

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
        setFailed(true);
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
      {!isLoading && !failed && (
        <>
          <Parks />
          <BrandHeader />
          <BrandBody brandsPrefix={brandsPrefix} />
        </>
      )}
      {isLoading && <Suspense />}
      {failed && <GoesWrongPage />}
    </>
  );
};
export default Brands;
