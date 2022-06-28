import React from "react";
import { Link } from "react-router-dom";
import { Offers } from "../../Service/AppService";

const OffersImageArea = ({ products = [] }) => {
  if (products.length === 0) return;

  return (
    <section class="beautifull-offer-area section-padding">
      <div class="container">
        {/* <!-- offer heading --> */}
        <div class="butifull-heading-title">
          <h4>UNMISSABLE BEAUTY OFFERS</h4>
        </div>
        {/* <!-- butifull single item --> */}
        <div class="butiful-offer-item-flex">
          {/* <!-- single item --> */}
          {products.map((item) => (
            <div class="single-item-inner-left">
              <Link to={`product/${item.id}`}>
                <img src={item.imageUrl} alt="img" />
              </Link>
            </div>
          ))}
        </div>
        {/* <!-- butifull single item --> */}
      </div>
    </section>
  );
};

export default OffersImageArea;
