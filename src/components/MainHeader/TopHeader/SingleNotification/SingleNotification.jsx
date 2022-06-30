import React, { useCallback, useEffect, useState } from "react";
import { goTO, paramsUrlGenerator } from "../../../../helpers/utilities";
import { GET_NOTIFICATIONS, MARK_UNSEEN } from "../../../../lib/endpoints";
import GoesWrongPage from "../../../../pages/GoesWrongPage";
import { httpV2 } from "../../../../Service/httpService2";
import Paginator from "../../../Paginators/Paginators";
import Suspense from "../../../utilities/Suspense/Suspense";
import NotificationContent from "./NotificationContent";
import NotificationHeader from "./NotificationHeader";

const SingleNotification = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [goesWrong, setGoesWrong] = useState(false);
  const [allNotifications, setAllNotifications] = useState({
    items: [],
    totalCount: 0,
    count: 0,
  });
  const [params, setParams] = useState({
    Index: 1,
    Take: 5,
  });
  const pageChangeHandler = (page) => {
    setParams((prevState) => ({ ...prevState, Index: page }));
    goTO();
  };

  const getNotifications = useCallback((paramUrl) => {
    httpV2.get({
      url: GET_NOTIFICATIONS + paramUrl,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        setAllNotifications({
          items: res.data.data,
          totalCount: res.data.count,
          count: res.data.data.length,
        });
        setIsLoading(false);
        setGoesWrong(false);
      },
      failed: () => {
        setGoesWrong(true);
      },
      always: () => {
        setIsLoading(false);
      },
    });
  }, []);

  const markAsUnseen = useCallback((paramUrl) => {
    httpV2.get({
      url: MARK_UNSEEN + paramUrl,
      before: () => {},
      successed: () => {},
      failed: () => {},
      always: () => {},
    });
  }, []);

  useEffect(() => {
    const paramUrl = paramsUrlGenerator(params);
    getNotifications(paramUrl);
  }, [getNotifications, params]);

  useEffect(() => {
    const paramUrl = allNotifications.items
      .map((item) => "ids=" + item.id)
      .join("&");
    markAsUnseen(paramUrl);
  }, [allNotifications.items, markAsUnseen]);

  return (
    <>
      {!isLoading && !goesWrong && (
        <div>
          <NotificationHeader />
          <section class="notifaction-single-area">
            <div class="container">
              <div class="notifaction-main-flex">
                <div id="services" class="notifaction-inner-left">
                  <h2>Notifications</h2>
                  {/* <!-- single Items --> */}
                  <div class="notifaction-inner-read-more">
                    {/* <!-- single Items --> */}
                    {allNotifications.items.map((item) => (
                      <NotificationContent item={item} />
                    ))}
                  </div>
                </div>
                {/* <!-- notifaction inner right --> */}

                {/* <Discountedoffer /> */}
              </div>
            </div>
            <div className="paginator container">
              <Paginator
                items={allNotifications.totalCount}
                pageItems={params.Take}
                startPage={params.Index}
                onPageChange={pageChangeHandler}
              />
            </div>
          </section>
        </div>
      )}
      {isLoading && <Suspense />}
      {goesWrong && <GoesWrongPage />}
    </>
  );
};

export default SingleNotification;
