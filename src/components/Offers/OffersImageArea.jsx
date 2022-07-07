import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../Service/httpService2";

const OffersImageArea = ({ products }) => {
  console.log(products);
  return (
    <section class="beautifull-offer-area section-padding">
      <div class="container">
        {/* <!-- offer heading --> */}
        {products.length > 0 && (
          <>
            <div class="butifull-heading-title">
              <h4>UNMISSABLE BEAUTY OFFERS</h4>
            </div>

            {/* <!-- butifull single item --> */}
            <div class="butiful-offer-item-flex">
              {/* <!-- single item --> */}
              {products.map((item) => (
                <div class="single-item-inner-left">
                  <Link to={`product/${item.id}`}>
                    {item.imageURL === null ? (
                      <img
                        src="/contents/assets/images/no_productimg.jpg"
                        alt="img"
                      />
                    ) : (
                      <img src={BASE_URL + item.imageURL} alt="img" />
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
        {/* <!-- butifull single item --> */}
      </div>
    </section>
  );
};

export default OffersImageArea;
