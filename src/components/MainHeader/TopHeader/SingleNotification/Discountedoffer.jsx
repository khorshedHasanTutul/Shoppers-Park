import React from "react";
import { Link } from "react-router-dom";
import { Offers } from "../../../../Service/AppService";
import appData from "../../../DataSource/appData";

const Discountedoffer = () => {
  const headingArea = Offers.OffersProductArea.HeaderAreaText;
  const data = appData.categoryProducts.filter(
    (item) => item.offer_status === true
  );
  data.sort((a, b) => b.Ds - a.Ds);
  
  return (
    <div class="notifaction-inner-right">
      <div class="related-product-main">
        <h4>{headingArea}</h4>
        {/* <!-- single item --> */}
        {data.map((item) => (
          <div class="recent-pro-del-flex">
            <Link to={"/product/" + item.Id}>
              <div class="product-del-s-img">
                <img src={item.image} alt="img" />
              </div>
              <div class="product-del-s-content">
                <div class="product-del-s-title">
                  <h4>{item.Nm}</h4>
                </div>
                <div class="product-del-s-blog-desc">
                  <div class="basket-add">
                    <span class="item__price item__price--now">
                      ৳{item.MRP}
                    </span>
                    {item.Ds > 0 ? (
                      <span class="price product-price">
                        <del class="cross_price">৳ {item.Ds}</del>
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discountedoffer;
