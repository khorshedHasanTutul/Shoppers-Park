import React, { useCallback, useEffect, useState } from "react";
import { GET_TOPOFFERS } from "../../lib/endpoints";
import { httpV2 } from "../../Service/httpService2";
import Suspense from "../utilities/Suspense/Suspense";
import OffersHeader from "./OffersHeader";
import OffersImageArea from "./OffersImageArea";
import OffersProductArea from "./OffersProductArea";

const OffersParent = () => {
  const [offersTop, setOffersTop] = useState();
  const [isLoading, setIsloading] = useState(true);
  const getTopOffers = useCallback(() => {
    httpV2.get({
      url: GET_TOPOFFERS,
      before: () => {
        setIsloading(true);
      },
      successed: (res) => {
        setOffersTop(res.data);
        setIsloading(false);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {
        setIsloading(false);
      },
    });
  }, []);
  useEffect(() => {
    getTopOffers();
  }, []);

  return (
    <>
      {!isLoading && (
        <>
          <OffersHeader banners={offersTop.banners} />
          <OffersImageArea />
          <OffersProductArea />
        </>
      )}
      {isLoading && <Suspense />}
    </>
  );
};

export default OffersParent;
