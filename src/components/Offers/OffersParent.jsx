import React, { useCallback, useEffect, useState } from "react";
import { GET_TOP_OFFERS } from "../../lib/endpoints";
import ErrorPage from "../../pages/ErrorPage";
import { httpV2 } from "../../Service/httpService2";
import Suspense from "../utilities/Suspense/Suspense";
import OffersHeader from "./OffersHeader";
import OffersImageArea from "./OffersImageArea";
import OffersProductArea from "./OffersProductArea";

const OffersParent = () => {
  const [offersTop, setOffersTop] = useState();
  const [failed, setFailed] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  const getTopOffers = useCallback(() => {
    httpV2.get({
      url: GET_TOP_OFFERS,
      before: () => {
        setIsloading(true);
      },
      successed: (res) => {
        setOffersTop(res.data);
        setIsloading(false);
        console.log("Res=>", res);
      },
      failed: () => {
        setFailed(true);
        console.log("failed");
      },
      always: () => {
        setIsloading(false);
      },
    });
  }, []);
  useEffect(() => {
    getTopOffers();
  }, [getTopOffers]);

  return (
    <>
      {!isLoading && (
        <>
          <OffersHeader banners={offersTop.banners} />
          <OffersImageArea products={offersTop.products} />

          {offersTop.display.map((item) => (
            <OffersProductArea item={item} />
          ))}
        </>
      )}
      {isLoading && <Suspense />}
      {failed && <ErrorPage />}
    </>
  );
};

export default OffersParent;
