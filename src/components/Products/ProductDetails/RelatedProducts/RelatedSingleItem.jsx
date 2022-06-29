import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../../Service/httpService2";

const RelatedSingleItem = ({ relatedProducts }) => {
  console.log({ relatedProducts });
  return (
    <>
      {relatedProducts.map((item) => (
        <div class="recent-pro-del-flex">
          <Link to={"/product/" + item.id}>
            <div class="product-del-s-img">
              {item.imageURL === null ? (
                <img
                  src="/contents/assets/images/no_productimg.jpg"
                  alt="img"
                />
              ) : (
                <img src={BASE_URL + item.imageURL} alt="img" />
              )}
            </div>
            <div class="product-del-s-content">
              <div class="product-del-s-title">
                <h4>{item.name}</h4>
              </div>
              <div class="product-del-s-blog-desc">
                <div class="basket-add">
                  <span class="item__price item__price--now">
                    ৳{item.currentPrice}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default RelatedSingleItem;
