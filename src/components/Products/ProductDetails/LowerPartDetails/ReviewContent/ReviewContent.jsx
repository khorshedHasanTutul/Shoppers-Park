import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { paramsUrlGenerator } from "../../../../../helpers/utilities";
import { PRODUCT_REVIEWS } from "../../../../../lib/endpoints";
import { httpV2 } from "../../../../../Service/httpService2";
import authContext from "../../../../../Store/auth-context";
import ModalPOpUp from "../../../../MainHeader/TopHeader/AuthenticationPortal/ModalPOpUp";
import Paginator from "../../../../Paginators/Paginators";
import Suspense from "../../../../utilities/Suspense/Suspense";
import ReviewSingleItem from "./ReviewSingleItem";

const ReviewContent = () => {
  const { id } = useParams();
  const authCtx = useContext(authContext);
  const [allReviews, setAllReviews] = useState({
    items: [],
    totalCount: 0,
    count: 0,
  });
  const [params, setParams] = useState({
    Take: 5,
    Index: 1,
    ProductId: id,
  });
  const [clicked, setClicked] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState("");
  const [reviewIsTouched, setReviewIsTouched] = useState(false);
  const [reviewValid, setReviewValid] = useState(false);

  const reviewChangeHandler = ({ target }) => {
    setReview(target.value);
  };
  const reviewTouchedHandler = () => {
    setReviewIsTouched(true);
  };
  const closeCart = () => {
    setLoginModal((prevState) => !prevState);
  };
  const pageChangeHandler = (page) => {
    setParams((prevState) => ({ ...prevState, Index: page }));
  };

  const submitHandler = () => {
    setClicked(true);
    if (!authCtx.isLoggedIn) {
      setLoginModal(true);
      return;
    }
    if (authCtx.isLoggedIn && review.length > 0) {
      httpV2.post({
        url: PRODUCT_REVIEWS,
        payload: {
          content: review,
          productId: id,
        },
        before: () => {
          setIsLoading(true);
        },
        successed: () => {
          setIsLoading(false);
          const paramUrl = paramsUrlGenerator(params);
          getAllReview(paramUrl);
          setClicked(false);
          setReview("");
          setReviewIsTouched(false);
          setReviewValid(false);
        },
        failed: () => {},
        always: () => {
          setIsLoading(false);
        },
      });
    }
  };

  const getAllReview = useCallback((paramUrl) => {
    httpV2.get({
      url: PRODUCT_REVIEWS + paramUrl,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        setAllReviews({
          items: res.data.data,
          totalCount: res.data.count,
          count: res.data.data.length,
        });
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

  console.log("allreview=>", allReviews.items);

  useEffect(() => {
    if (clicked) {
      if (
        (reviewIsTouched && review.length === 0) ||
        (!reviewIsTouched && review.length === 0)
      ) {
        setReviewValid(true);
      } else {
        setReviewValid(false);
      }
    }
  }, [clicked, review.length, reviewIsTouched]);

  useEffect(() => {
    const paramUrl = paramsUrlGenerator(params);
    getAllReview(paramUrl);
  }, [getAllReview, params]);

  return (
    <>
      <>
        <div
          class="tab-content detalis-page-tab-content"
          style={{ marginTop: 0 }}
        >
          {/* <!-- product desc review information --> */}
          <div class="product-comments-block-tab-review">
            <div class="new_comment_container" style={{ margin: 0 }}>
              <div class="post-cmt-input-review">
                <input
                  placeholder="Post Your Review Here"
                  type="text"
                  onChange={reviewChangeHandler}
                  onBlur={reviewTouchedHandler}
                  value={review}
                />
                {reviewValid && (
                  <div class="alert alert-error">Review cann't be empty.</div>
                )}
                {reviewIsTouched && review.length === 0 && !reviewValid && (
                  <div class="alert alert-error">Review cann't be empty.</div>
                )}
              </div>
              <div class="post-cmt-btn">
                <button type="submit" onClick={submitHandler}>
                  Post
                </button>
              </div>
            </div>
            <p></p>
            <div class="comment_container">
              {/* <!-- single comment item --> */}
              {allReviews.items.map((item) => (
                <ReviewSingleItem item={item} />
              ))}
              <div className="paginator">
                <Paginator
                  items={allReviews.totalCount}
                  pageItems={params.Take}
                  startPage={params.Index}
                  onPageChange={pageChangeHandler}
                />
              </div>

              {/* <!-- single comment item --> */}
            </div>
          </div>
          {/* <!-- product desc review information --> */}
        </div>
        {loginModal && <ModalPOpUp ModalOpen={closeCart} />}
      </>
    </>
  );
};

export default ReviewContent;
